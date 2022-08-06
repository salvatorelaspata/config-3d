import React, { useRef } from "react";
import useViewer from "../hook/useViewer";
import { Gui3D } from "./Gui3D";

const Viewer = () => {
	const mount = useRef(null);
	const [_changeRandomColor] = useViewer(mount);
	return (
		<>
			<div ref={mount} />
			<Gui3D changeRandomColor={_changeRandomColor} />
		</>
	);
};

export default Viewer;
