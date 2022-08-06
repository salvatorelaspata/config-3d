import React from "react";
import { useComponent } from "../store/store";

export const Gui3D = ({ changeRandomColor }) => {
	const components = useComponent();
	console.log(components);
	return (
		<div>
			Gui3D
			<button onClick={changeRandomColor}>Change Color</button>
			{components.map((e, i) => (
				<div key={i}>{JSON.stringify(e)}</div>
			))}
		</div>
	);
};
