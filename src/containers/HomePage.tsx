import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleValue } from 'react-select';
import BusStopsDisplay from '../components/BusStopsDisplay';
import CustomSelect from '../components/CustomSelect';
import {
  getAllRoutes,
  getBusStops,
  getPossibleDirections
} from '../store/actions/generalActions';
import {
  resetReduxState,
  setBusStops,
  setSelectedDirection,
  setSelectedRoute
} from '../store/reducers/reducer';
import { store } from '../store/store';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const {
    routes,
    directions,
    busStops,
    selectedRoute,
    selectedDirection,
    loadingRoutes,
    loadingDirections,
    loadingStops
  } = useSelector((state: AppState) => state.reducer);

  useEffect(() => {
    if (routes.length === 0) {
      store.dispatch(getAllRoutes());
    }
  }, [routes.length]);

  const routeOptions = useMemo(
    () =>
      routes?.map((route: BusRouteType) => ({
        value: route.route_id,
        label: route.route_label
      })),
    [routes]
  );

  const directionOptions = useMemo(
    () =>
      directions?.map((direction: BusDirectionType) => ({
        value: direction.direction_id,
        label: direction.direction_name
      })),
    [directions]
  );

  const handleRouteSelectionChange = (
    selectedOption: SingleValue<SelectOptionType>
  ) => {
    if (selectedOption !== null) {
      dispatch(setSelectedRoute(selectedOption));
      dispatch(setSelectedDirection(null));
      dispatch(setBusStops([]));
      store.dispatch(getPossibleDirections(selectedOption.value));
    } else {
      dispatch(resetReduxState());
    }
  };

  const handleDirectionSelectionChange = (
    selectedDirection: SingleValue<SelectOptionType>
  ) => {
    dispatch(setSelectedDirection(selectedDirection));
    if (selectedRoute && selectedDirection) {
      const queryParams = {
        routeId: selectedRoute.value,
        directionId: selectedDirection.value
      };
      store.dispatch(getBusStops(queryParams));
    } else {
      dispatch(setBusStops([]));
    }
  };

  return (
    <div className="home-page-container">
      <CustomSelect
        data-testid="route-select"
        placeholder="Select route"
        options={routeOptions}
        selectedValue={selectedRoute}
        isDisabled={loadingRoutes || routes.length === 0}
        handleChange={handleRouteSelectionChange}
      />
      <CustomSelect
        data-testid="direction-select"
        placeholder="Select direction"
        options={directionOptions}
        selectedValue={selectedDirection}
        isDisabled={loadingDirections || !selectedRoute}
        handleChange={handleDirectionSelectionChange}
      />
      <BusStopsDisplay
        routeLabel={selectedRoute?.label}
        directionLabel={selectedDirection?.label}
        busStops={busStops}
        isLoading={loadingStops}
      />
    </div>
  );
};

export default HomePage;
