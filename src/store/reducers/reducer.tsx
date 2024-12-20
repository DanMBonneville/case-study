import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
	getAllRoutes,
	getBusStops,
	getPossibleDirections,
} from "../actions/generalActions";

const initialState: ReducerType = {
	routes: [],
	directions: [],
	busStops: [],

	selectedRoute: null,
	selectedDirection: null,

	loadingRoutes: false,
	loadingDirections: false,
} as ReducerType;

const reducerSlice = createSlice({
	name: "reducer",
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
		},
	},
	extraReducers: (builder) => {
		addGetAllRoutesApiCases(builder);
		addGetPossibleDirectionsApiCases(builder);
		addGetBusStopsApiCases(builder);
	},
});

const addGetAllRoutesApiCases = (builder: ActionReducerMapBuilder<any>) => {
	builder.addCase(getAllRoutes.pending, (state) => {
		state.loadingRoutes = true;
	});
	builder.addCase(getAllRoutes.fulfilled, (state, action) => {
		state.routes = action.payload;
		state.loadingRoutes = false;
	});
	builder.addCase(getAllRoutes.rejected, (state) => {
		state.loadingRoutes = false;
	});
};

const addGetPossibleDirectionsApiCases = (
	builder: ActionReducerMapBuilder<any>
) => {
	builder.addCase(getPossibleDirections.pending, (state) => {
		state.loadingDirections = true;
	});
	builder.addCase(getPossibleDirections.fulfilled, (state, action) => {
		state.possibleDirections = action.payload;
		state.loadingDirections = false;
	});
	builder.addCase(getPossibleDirections.rejected, (state) => {
		state.loadingDirections = false;
	});
};

export const addGetBusStopsApiCases = (
	builder: ActionReducerMapBuilder<any>
) => {
	builder.addCase(getBusStops.pending, (state) => {
		state.loadingStops = true;
	});
	builder.addCase(getBusStops.fulfilled, (state, action) => {
		state.busStops = action.payload;
		state.loadingStops = false;
	});
	builder.addCase(getBusStops.rejected, (state) => {
		state.loadingStops = false;
	});
};

export const {
	resetReduxState,
	setSelectedRoute,
	setSelectedDirection,
	setBusStops,
} = reducerSlice.actions;

export default reducerSlice.reducer;
