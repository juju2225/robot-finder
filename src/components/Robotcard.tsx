import { useState } from "react";
import RobotAdress from "./RobotAdress";

function Robotcard({ robot }) {
	const [display, setDisplay] = useState(false);

	return (
		<div className="robot-card">
			<img src={`https://robohash.org/${robot.id}?set=set2`} />
			<h2>{robot.name}</h2>
			<p>{robot.username}</p>
			<p>Tel : {robot.phone}</p>
			<p> Mail : {robot.email}</p>
			<p>Website : {robot.website}</p>
			<button type="button" onClick={() => setDisplay(!display)}>
				Adress
			</button>
			{display && <RobotAdress add={robot.address} />}
		</div>
	);
}

export default Robotcard;
