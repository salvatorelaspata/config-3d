import { useRef, useState } from "react";
function Sidebar({ changeRandomColor, components }) {
	var mobileNavRef = useRef();
	// sideBar.style.transform = "translateX(-260px)";
	const [isOpen, setIsOpen] = useState(true);
	function sidebarHandler() {
		if (!isOpen) {
			mobileNavRef.current.style.transform = "translateX(0px)";
		} else {
			mobileNavRef.current.style.transform = "translateX(-260px)";
		}
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className="flex flex-no-wrap">
				{/* <!-- Sidebar starts --> */}
				{/* <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] --> */}
				<div
					className="w-64 z-40 absolute bg-gray-800 shadow flex-col justify-between transition duration-150 ease-in-out"
					ref={mobileNavRef}
				>
					<button
						aria-label="toggle sidebar"
						id="openSideBar"
						className={`${
							isOpen && "hidden"
						} h-10 w-10 bg-gray-400 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800`}
						onClick={sidebarHandler}
					>
						<img
							src="/sidebar-settings.png"
							className="fill-white w-4"
							alt="toggler"
						/>
					</button>
					<button
						aria-label="Close sidebar"
						id="closeSideBar"
						className={`${
							!isOpen && "hidden"
						} h-10 w-10 bg-gray-400 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white`}
						onClick={sidebarHandler}
					>
						<img src="/close.png" className="fill-white w-3 h-3" alt="cross" />
					</button>
					<div className="px-4">
						<div className="h-16 w-full flex items-center">
							<p className="text-2xl text-white">Configurator</p>
						</div>
						<ul className="mt-4">
							{components.map((e, i) => (
								<li
									key={i.toString()}
									className="w-full text-gray-300 hover:text-blue-500 cursor-pointer h-12"
									onClick={() => changeRandomColor(e)}
								>
									<div className="flex justify-between w-full focus:outline-none focus:ring-2 focus:ring-white">
										<p className="text-sm">👀 {e.name.replace("_", " ")}</p>
										🤩
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="px-4 border-t border-gray-700">
						<p className="text-white my-2">Varianti:</p>
						<ul className="w-full flex items-center justify-between bg-gray-800">
							<li className="cursor-pointer text-white pb-3">
								<button
									className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
									onClick={() => changeRandomColor(null)}
								>
									<img
										src="/default-settings.png"
										style={{ filter: "invert(40%)" }}
										className="w-6"
									/>
									v. 1
								</button>
							</li>
							<li className="cursor-pointer text-white pb-3">
								<button
									className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
									onClick={() => changeRandomColor(null)}
								>
									<img
										src="/default-settings.png"
										style={{ filter: "invert(40%)" }}
										className="w-6"
									/>
									v. 2
								</button>
							</li>
							<li className="cursor-pointer text-white pb-3">
								<button
									className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
									onClick={() => changeRandomColor(null)}
								>
									<img
										src="/default-settings.png"
										style={{ filter: "invert(40%)" }}
										className="w-6"
									/>
									v. 3
								</button>
							</li>
							<li className="cursor-pointer text-white pb-3">
								<button
									className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
									onClick={() => changeRandomColor(null)}
								>
									<img
										src="/default-settings.png"
										style={{ filter: "invert(40%)" }}
										className="w-6"
									/>
									v. 4
								</button>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- Sidebar ends --> */}
			</div>
		</>
	);
}

export default Sidebar;
