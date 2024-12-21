import React from 'react';

const BusStopsDisplay: React.FC<BusStopsDisplayProps> = ({
  routeLabel,
  directionLabel,
  busStops
}) => {
  const busStopDisplayLabel = `Bus stops for ${routeLabel} headed ${directionLabel}`;

  return (
    <div data-testid={'bus-stops-wrapper'} className="bus-stops-wrapper">
      <h2>{busStopDisplayLabel}</h2>
      {busStops.map((busStop) => (
        <div className="bus-stop-list-item" key={busStop.place_code}>
          <p>{busStop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BusStopsDisplay;
