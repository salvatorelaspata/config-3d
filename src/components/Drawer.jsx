import { useState } from "react";

export const Drawer = ({ components, changeRandomColor }) => {
	const [showWidget, setShowWidget] = useState(true);
	const toggleShowWidget = () => {
		setShowWidget(!showWidget);
		// showWidget ? "visible" : "hidden"
	};
	return (
		<>
			{/* Drawer Header */}
			<div
				className="bg-red-400 hover:bg-red-300 p-4 cursor-pointer fixed w-full bottom-0 h-14 rounded-lg"
				data-drawer-toggle="drawer-swipe"
				onClick={toggleShowWidget}
			>
				<span className="absolute w-8 h-1 -translate-x-1/2 rounded-lg top-3 left-1/2  bg-gray-500"></span>
				<h5
					id="drawer-swipe-label"
					className="inline-flex items-center text-base text-white"
				>
					<svg
						className="w-5 h-5 mr-2"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
					</svg>
					Configuration - Components
				</h5>
			</div>

			{/* Drawer Content */}
			<div
				id="drawer-swipe"
				className="bg-opacity-80 fixed bottom-14 z-40 w-full overflow-y-auto rounded-lg bg-red-200 border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800"
				tabIndex="-1"
				aria-labelledby="drawer-swipe-label"
			>
				<div
					className={`${
						showWidget ? "visible" : "hidden"
					} h-72 grid grid-cols-2 gap-4 p-4 lg:grid-cols-4 md:grid-cols-3 shadow-2xl`}
				>
					{components.map((e, i) => (
						// Card
						<div
							key={e.id}
							className="p-4 rounded-lg shadow-lg cursor-pointer bg-opacity-75 bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700"
							onClick={() => changeRandomColor(e)}
						>
							<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
								{["colore1", "colore2", "colore3"].map((e) => (
									<span className="bg-red-200 rounded-full w-10 h-10 m-3 text-center">
										{e}
									</span>
								))}
							</div>
							<div className="font-medium text-center text-gray-500 dark:text-gray-400">
								{e.name.replace(new RegExp("_", "g"), " ")}
							</div>
						</div>
					))}
					{/* Varianti */}
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={`e59e351c-ae71-4c4f-80c0-2d30b5335d11-${i}`}
							className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700"
							onClick={() => changeRandomColor(e)}
						>
							<div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
								<svg
									className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
									<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
								</svg>
							</div>
							<div className="font-medium text-center text-gray-500 dark:text-gray-400">
								{`Variante ${i + 1}`}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
