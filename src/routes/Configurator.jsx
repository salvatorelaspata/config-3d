import React, { useEffect } from "react";
import Viewer from "../components/Viewer";

export const Configurator = () => {
	useEffect(() => {
		console.log("Configuration");
	}, []);
	return (
		<div>
			<Viewer />
		</div>
	);
};
