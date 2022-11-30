import React from "react";

const RobotCard = ({ classStyles, dataId, primaryText, secondaryText }) => {
	return (
		<div className={classStyles}>
			<img
				src={`https://robohash.org/${dataId}?size=120x120`}
				alt={`robot-${dataId}`}
				className="w-fit mx-auto my-2"
			/>
			<p className="font-bold">{primaryText}</p>
			<p className="text-xs italic">{secondaryText}</p>
		</div>
	);
};

export default RobotCard;
