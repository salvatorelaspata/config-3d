import { useRef } from "react";
import { applyRandomMesh, use3DViewer } from "../hook/use3DViewer";

export const ConfiguratorRefactor = () => {
	const mount = useRef(null);

	const { obj, texture, hdrEquirect } = use3DViewer(mount);
	return (
		<div className="flex justify-center">
			<div ref={mount} />
			{/* <Sidebar changeRandomColor={changeRandomColor} components={components} /> */}
			{/* <Drawer components={components} changeRandomColor={changeRandomColor} /> */}
			<button
				onClick={() => applyRandomMesh(obj, texture, hdrEquirect)}
				className="absolute bottom-4 right-4 text-white bg-blue-400 rounded-full w-20 h-20 font-bold font-mono"
			>
				Random
			</button>
		</div>
	);
};
