import { useState } from "react";
import "./App.css";
import Robotcard from "./components/Robotcard.tsx";
import Robots from "./data.ts";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<nav>
				<input
					type="text"
					placeholder="search..."
					value={search}
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
			</nav>
			<div className="robots-container">
				{Robots.filter((robot) => {
					return search === "" || robot.name.includes(search);
				}).map((robot) => {
					return <Robotcard robot={robot} />;
				})}
			</div>
		</>
	);
}

export default App;
