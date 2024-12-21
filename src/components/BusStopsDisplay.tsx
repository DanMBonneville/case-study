import React from "react";

const BusStopsDisplay: React.FC<BusStopsDisplayProps> = ({ busStops }) => {
	return (
		<div data-testid={"bus-stops-wrapper"} className="bus-stops-wrapper">
			{busStops.map((busStop) => (
				<div className="bus-stop-list-item" key={busStop.place_code}>
					<p>{busStop.description}</p>
				</div>
			))}
		</div>
	);
};

export default BusStopsDisplay;
