import React, { useRef } from "react";
import useViewer from "../hook/useViewer";
import { Gui3D } from "./Gui3D";
import Sidebar from "./Sidebar";

const Viewer = () => {
	const mount = useRef(null);
	const [_changeRandomColor] = useViewer(mount);
	return (
		<>
			<div className="flex flex-no-wrap">
				<Sidebar />

				{/* Remove class [ h-64 ] when adding a card block */}
				<div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
					{/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
					<div className="w-full h-full rounded border-dashed border-2 border-gray-300">
						<div ref={mount} />
					</div>
				</div>
			</div>
			{/* <Gui3D changeRandomColor={_changeRandomColor} /> */}
		</>
	);
};

export default Viewer;
