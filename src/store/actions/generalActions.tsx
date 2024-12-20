import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendGetRequest } from "./requestUtil";

export const getAllRoutes = createAsyncThunk("get-all-routes", async () => {
	return sendGetRequest("routes");
});

export const getPossibleDirections = createAsyncThunk(
	"get-possible-directions",
	async (routeId: string) => {
		return sendGetRequest(`directions/${routeId}`);
	}
);

export const getBusStops = createAsyncThunk(
	"get-bus-stops",
	async (queryParams: any) => {
		return sendGetRequest(
			`stops/${queryParams.routeId}/${queryParams.directionId}`
		);
	}
);
