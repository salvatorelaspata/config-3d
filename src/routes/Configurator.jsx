import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Drawer } from "../components/Drawer";
// import Sidebar from "../components/Sidebar";
import useViewer from "../hook/useViewer";
import { useComponent } from "../store/store";

export const Configurator = () => {
	const mount = useRef(null);
	let params = useParams();
	console.log(params);
	let { objId } = useParams();
	const [changeRandomColor] = useViewer(mount, objId);
	const components = useComponent();
	return (
		<div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap">
			<div ref={mount} className="w-full h-full rounded " />
			{/* <Sidebar changeRandomColor={changeRandomColor} components={components} /> */}
			<Drawer components={components} changeRandomColor={changeRandomColor} />
		</div>
	);
};
