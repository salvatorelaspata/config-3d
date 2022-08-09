import { useEffect, useState } from "react";
import "./index.css";
import { LandingPage } from "./routes/LandingPage";
function App() {
	useEffect(() => {
		// setInterval(() => {
		// 	const color1 = Math.floor(Math.random() * 16777215).toString(16);
		// 	const color2 = Math.floor(Math.random() * 16777215).toString(16);
		// 	setRandomBgColorGradient([].concat(color1, color2));
		// }, 1000);
	}, []);
	return (
		<div className="App">
			<LandingPage />
		</div>
	);
}

export default App;
