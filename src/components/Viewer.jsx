import React, { useRef } from "react";
import useViewer from "../hook/useViewer";
import { useComponent } from "../store/store";
import Sidebar from "./Sidebar";

const Viewer = () => {
	const mount = useRef(null);
	const [changeRandomColor] = useViewer(mount);
	const components = useComponent();
	return (
		<>
			<Sidebar changeRandomColor={changeRandomColor} components={components} />
			<div ref={mount} className="w-full h-full rounded " />
		</>
	);
};

export default Viewer;
