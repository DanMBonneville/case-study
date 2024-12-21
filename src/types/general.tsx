import { store } from '../store/store';

declare global {
  export type AppState = ReturnType<typeof store.getState>;

  export type ReducerType = {
    routes: BusRouteType[];
    directions: BusDirectionType[];
    busStops: BusStopType[];

    selectedRoute: SelectOptionType | null;
    selectedDirection: SelectOptionType | null;

    loadingRoutes: boolean;
    loadingDirections: boolean;
    loadingStops: boolean;
  };

  export type getBusStopQueryType = {
    routeId: string;
    directionId: string;
  };
}
