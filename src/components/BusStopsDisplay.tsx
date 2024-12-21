import React from 'react';
import Loader from '../hoc/Loader';

const BusStopsDisplay: React.FC<BusStopsDisplayProps> = ({
  routeLabel,
  directionLabel,
  busStops,
  isLoading
}) => {
  const busStopDisplayLabel = `Bus stops for ${routeLabel} headed ${directionLabel}`;

  if (isLoading) return <Loader />;

  return (
    <div data-testid={'bus-stops-wrapper'} className="bus-stops-wrapper">
      {busStops.length > 0 && <h2>{busStopDisplayLabel}</h2>}
      {busStops.map((busStop) => (
        <div className="bus-stop-list-item" key={busStop.place_code}>
          <p>{busStop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BusStopsDisplay;
