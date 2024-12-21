import { ReactElement } from 'react';
import { SingleValue } from 'react-select';

declare global {
  export type LayoutProps = {
    children: ReactElement;
  };

  export type CustomSelectProps = {
    'data-testid': string;
    placeholder: string;
    options: SelectOptionType[];
    selectedValue: SelectOptionType | null;
    isDisabled: boolean;
    handleChange: (selectedOption: SingleValue<SelectOptionType>) => void;
  };

  export type BusStopsDisplayProps = {
    routeLabel?: string;
    directionLabel?: string;
    busStops: BusStopType[];
    isLoading: boolean;
  };
}
