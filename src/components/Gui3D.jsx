import React from "react";
import { useComponent } from "../store/store";

export const Gui3D = ({ changeRandomColor }) => {
	const components = useComponent();
	console.log(components);
	return (
		<div className="flex bottom-0 right-0">
			Gui3D
			<button className="bg-red-300" onClick={changeRandomColor}>
				Change Color
			</button>
			{components.map((e, i) => (
				<div key={i}>{JSON.stringify(e)}</div>
			))}
		</div>
	);
};
