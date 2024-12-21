declare global {
  export type SelectOptionType = {
    value: string;
    label: string;
  };

  export type BusRouteType = {
    route_id: string;
    route_label: string;
  };

  export type BusDirectionType = {
    direction_id: string;
    direction_name: string;
  };

  export type BusStopType = {
    place_code: string;
    description: string;
  };
}

// file treated as a module
export {};
