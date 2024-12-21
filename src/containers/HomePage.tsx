import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleValue } from "react-select";
import BusStopsDisplay from "../components/BusStopsDisplay";
import CustomSelect from "../components/CustomSelect";
import {
	getAllRoutes,
	getBusStops,
	getPossibleDirections,
} from "../store/actions/generalActions";
import {
	resetReduxState,
	setBusStops,
	setSelectedDirection,
	setSelectedRoute,
} from "../store/reducers/reducer";
import { store } from "../store/store";

const HomePage: React.FC = () => {
	const dispatch = useDispatch();

	const {
		routes,
		possibleDirections,
		busStops,
		selectedRoute,
		selectedDirection,
	} = useSelector((state: any) => state.reducer);

	useEffect(() => {
		if (routes.length === 0) {
			store.dispatch(getAllRoutes());
		}
	}, [routes.length]);

	const routeOptions = useMemo(
		() =>
			routes?.map((route: any) => ({
				value: route.route_id,
				label: route.route_label,
			})),
		[routes]
	);

	const directionOptions = useMemo(
		() =>
			possibleDirections?.map((direction: any) => ({
				value: direction.direction_id,
				label: direction.direction_name,
			})),
		[possibleDirections]
	);

	const handleRouteSelectionChange = (
		selectedOption: SingleValue<SelectOption>
	) => {
		if (selectedOption !== null) {
			dispatch(setSelectedRoute(selectedOption));
			store.dispatch(getPossibleDirections(selectedOption.value));
		} else {
			dispatch(resetReduxState());
		}
	};

	const handleDirectionSelectionChange = (
		selectedOption: SingleValue<SelectOption>
	) => {
		dispatch(setSelectedDirection(selectedOption));
		if (selectedOption !== null) {
			const queryParams = {
				routeId: selectedRoute.value,
				directionId: selectedOption.value,
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
				isDisabled={false}
				handleChange={handleRouteSelectionChange}
			/>
			<CustomSelect
				data-testid="direction-select"
				placeholder="Select direction"
				options={directionOptions}
				selectedValue={selectedDirection}
				isDisabled={!selectedRoute}
				handleChange={handleDirectionSelectionChange}
			/>
			<BusStopsDisplay busStops={busStops} />
		</div>
	);
};

export default HomePage;
