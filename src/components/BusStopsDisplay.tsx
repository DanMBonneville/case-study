import React, { useMemo } from 'react';
import Loader from '../hoc/Loader';

const BusStopsDisplay: React.FC<BusStopsDisplayProps> = ({
  routeLabel,
  directionLabel,
  busStops,
  isLoading
}) => {
  const visibilityClass = useMemo(() => {
    return busStops.length === 0 ? 'hidden' : '';
  }, [busStops]);

  const busStopList = useMemo(() => {
    return busStops.map((busStop) => (
      <div className="bus-stop-list-item" key={busStop.place_code}>
        <p>{busStop.description}</p>
      </div>
    ));
  }, [busStops]);

  return (
    <div
      data-testid={'bus-stops-wrapper'}
      className={'bus-stops-wrapper ' + visibilityClass}
    >
      <h3 className={'bus-stop-label ' + visibilityClass}>
        Bus stops for:&nbsp;<u>{routeLabel}</u>&nbsp;headed&nbsp;
        <u>{directionLabel}</u>
      </h3>
      <div data-testid="bus-stops-list" className="bus-stops-list">
        {isLoading ? <Loader /> : busStopList}
      </div>
    </div>
  );
};

export default BusStopsDisplay;
