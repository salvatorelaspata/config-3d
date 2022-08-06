import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	// manage selected menu item
	const location = useLocation();
	const cssSelected =
		"block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
	const cssUnselected =
		"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<a href="#" className="flex items-center">
					<img
						src="./simple-logo-geometric-polygonal.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Config.teste"
					/>
					<span className="self-center text-2xl font-mono-nowrap dark:text-white">
						Config.teste
					</span>
				</a>
				<button
					onClick={() => setIsOpen(!isOpen)}
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
					</svg>
				</button>
				<div
					className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-mono md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								to="/"
								className={
									location.pathname === "/" ? cssSelected : cssUnselected
								}
								aria-current="page"
							>
								🏠 Home
							</Link>
						</li>
						<li>
							<Link
								to="/catalog"
								className={
									location.pathname === "/catalog" ? cssSelected : cssUnselected
								}
							>
								📚 Catalogo
							</Link>
						</li>
						<li>
							<Link
								to="/configurator"
								className={
									location.pathname === "/configurator"
										? cssSelected
										: cssUnselected
								}
							>
								💡 Configurator
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<ol className="inline-flex items-center justify-end space-x-1 md:space-x-3">
				<li className="inline-flex items-center">
					<a
						href="#"
						className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					>
						<svg
							className="w-4 h-4 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
						</svg>
						Home
					</a>
				</li>
				<li>
					<div className="flex items-center">
						<svg
							className="w-6 h-6 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
						</svg>
						<a
							href="#"
							className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
						>
							Catalog
						</a>
					</div>
				</li>
				<li aria-current="page">
					<div className="flex items-center">
						<svg
							className="w-6 h-6 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
						</svg>
						<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
							Configurator
						</span>
					</div>
				</li>
			</ol>
		</nav>
	);
};
