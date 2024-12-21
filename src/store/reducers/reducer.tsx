import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  getAllRoutes,
  getBusStops,
  getPossibleDirections
} from '../actions/generalActions';

const initialState: ReducerType = {
  routes: [],
  directions: [],
  busStops: [],

  selectedRoute: null,
  selectedDirection: null,

  loadingRoutes: false,
  loadingDirections: false,
  loadingStops: false
} as ReducerType;

const reducerSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    resetReduxState: () => initialState,
    setSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
    setSelectedDirection: (state, action) => {
      state.selectedDirection = action.payload;
    },
    setBusStops: (state, action) => {
      state.busStops = action.payload;
    }
  },
  extraReducers: (builder) => {
    addGetAllRoutesApiCases(builder);
    addGetPossibleDirectionsApiCases(builder);
    addGetBusStopsApiCases(builder);
  }
});

const addGetAllRoutesApiCases = (
  builder: ActionReducerMapBuilder<ReducerType>
) => {
  builder.addCase(getAllRoutes.fulfilled, (state, action) => {
    state.routes = action.payload;
    state.loadingRoutes = false;
  });
  builder.addCase(getAllRoutes.rejected, (state) => {
    state.loadingRoutes = false;
  });
  builder.addCase(getAllRoutes.pending, (state) => {
    state.loadingRoutes = true;
  });
};

const addGetPossibleDirectionsApiCases = (
  builder: ActionReducerMapBuilder<ReducerType>
) => {
  builder.addCase(getPossibleDirections.fulfilled, (state, action) => {
    state.directions = action.payload;
    state.loadingDirections = false;
  });
  builder.addCase(getPossibleDirections.rejected, (state) => {
    state.loadingDirections = false;
  });
  builder.addCase(getPossibleDirections.pending, (state) => {
    state.loadingDirections = true;
  });
};

export const addGetBusStopsApiCases = (
  builder: ActionReducerMapBuilder<ReducerType>
) => {
  builder.addCase(getBusStops.fulfilled, (state, action) => {
    state.busStops = action.payload;
    state.loadingStops = false;
  });
  builder.addCase(getBusStops.rejected, (state) => {
    state.loadingStops = false;
  });
  builder.addCase(getBusStops.pending, (state) => {
    state.loadingStops = true;
  });
};

export const {
  resetReduxState,
  setSelectedRoute,
  setSelectedDirection,
  setBusStops
} = reducerSlice.actions;

export default reducerSlice.reducer;
