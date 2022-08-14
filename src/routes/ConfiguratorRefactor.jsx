import { useRef } from "react";
import { use3DViewer } from "../hook/use3DViewer";

export const ConfiguratorRefactor = () => {
	const mount = useRef(null);
	use3DViewer(mount);
	return (
		<div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap">
			<div ref={mount} className="w-full h-full rounded " />
			{/* <Sidebar changeRandomColor={changeRandomColor} components={components} /> */}
			{/* <Drawer components={components} changeRandomColor={changeRandomColor} /> */}
		</div>
	);
};
