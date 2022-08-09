import { useRef } from "react";
import Sidebar from "../components/Sidebar";
import useViewer from "../hook/useViewer";
import { useComponent } from "../store/store";

export const Configurator = () => {
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
