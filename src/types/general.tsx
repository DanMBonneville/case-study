import { ReactElement } from "react";
import { SingleValue } from "react-select";

declare global {
	export type LayoutProps = {
		children: ReactElement;
	};

	export type CustomSelectProps = {
		"data-testid": string;
		placeholder: string;
		options: SelectOption[];
		selectedValue?: SelectOption;
		isDisabled: boolean;
		handleChange: (selectedOption: SingleValue<SelectOption>) => void;
	};

	export type SelectOption = {
		value: string;
		label: string;
	};

	export type ReducerType = {
		routes: SelectOption[];
		directions: SelectOption[];
		busStops: StopType[];

		selectedRoute: SelectOption | null;
		selectedDirection: SelectOption | null;

		loadingRoutes: boolean;
		loadingDirections: boolean;
	};

	export type StopType = {
		place_code: string;
		description: string;
	};

	export type BusStopsDisplayProps = {
		busStops: StopType[];
	};
}
