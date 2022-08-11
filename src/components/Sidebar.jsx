import { useEffect, useRef, useState } from "react";
const animationDuration = 700;
const initialOpen = true;
function Sidebar({ changeRandomColor, components }) {
	const mobileNavRef = useRef();
	const floatButtonRef = useRef();
	const [isOpen, setIsOpen] = useState(!initialOpen);
	const sidebarHandler = () => {
		const {
			current: { classList: sidebarClassList },
		} = mobileNavRef;
		const {
			current: { classList: floatButton },
		} = floatButtonRef;
		if (!isOpen) {
			// show with transition
			// sidebarClassList.remove("opacity-0");
			// sidebarClassList.add("opacity-100");
			// floatButton.remove("opacity-100");
			// floatButton.add("opacity-60");
			sidebarClassList.remove("hidden");
		} else {
			// hide with transition
			// sidebarClassList.remove("opacity-100");
			// sidebarClassList.add("opacity-0");
			// floatButton.remove("opacity-60");
			// floatButton.add("opacity-100");
			sidebarClassList.add("hidden");
		}
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		sidebarHandler();
	}, []);

	return (
		<>
			{/* Float button */}
			<button
				aria-label="Close sidebar"
				className={`fixed z-20 hover:scale-150 ease-in-out duration-150 right-10 bottom-10 h-12 w-12 bg-blue-500 flex items-center shadow rounded-full justify-center cursor-pointer text-white`}
				onClick={sidebarHandler}
				ref={floatButtonRef}
			>
				<img
					src={`${!isOpen ? "/sidebar-settings.png" : "/close.png"}`}
					style={{ filter: "invert(100%)" }}
					className="w-4 h-4"
				/>
			</button>
			{/* Sidebar */}
			<div
				className={`z-10 
				w-full bg-gray-800 shadow flex-col justify-between 
				`}
				// *`transition-opacity duration-${animationDuration} ease-in opacity-0`
				ref={mobileNavRef}
			>
				<div className="px-4">
					<div className="h-16 w-full flex items-center">
						<p className="text-2xl text-white">Configurator</p>
					</div>
					{/* Component */}
					<ul className="mt-4">
						{components.map((e, i) => (
							<li
								key={i.toString()}
								className="w-full text-gray-300 hover:text-blue-500 cursor-pointer h-12"
								onClick={() => changeRandomColor(e)}
							>
								<div
									className="flex justify-between w-full 
									focus:outline-none focus:ring-2 focus:ring-white"
								>
									<p className="text-sm">👀 {e.name.replace("_", " ")}</p>
									🤩
								</div>
							</li>
						))}
					</ul>
				</div>
				{/* Varianti */}
				<div className="border-t border-gray-700">
					<p className="text-white my-2">Varianti:</p>
					<ul className="w-full flex items-center justify-between bg-gray-800">
						{Array.from({ length: 4 }, (_, i) => (
							<li
								key={`c049d475-296f-42fa-9c6b-74dd153d9f3b-${i}`}
								className="cursor-pointer text-white pb-3"
							>
								<button
									className="w-11 h-11 flex flex-col items-center m-2 focus:outline-none focus:ring-2 rounded focus:ring-blue-500"
									onClick={() => changeRandomColor(null)}
								>
									<img
										src="/default-settings.png"
										style={{ filter: "invert(40%)" }}
										className="w-6 h-6"
									/>
									<span>v. {i + 1}</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
