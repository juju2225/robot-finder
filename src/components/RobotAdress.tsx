function RobotAdress({ add }) {
	return (
		<div className="robot-address">
			<h3>
				{add.suite} {add.zipcode}
				{add.city}
			</h3>
		</div>
	);
}

export default RobotAdress;
