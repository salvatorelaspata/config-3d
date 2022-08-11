import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";

const cssSelected =
	"block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
const cssUnselected =
	"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	// manage selected menu item
	const { pathname } = useLocation();
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 dark:bg-gray-900">
			<div className="flex flex-wrap justify-between items-center  border-dashed border-b-2 border-b-gray-300">
				<a href="#" className="flex items-center">
					<img
						src="./simple-logo-geometric-polygonal.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Config.teste"
					/>
					<span className="self-center text-2xl font-mono dark:text-white">
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
					className={`${!isOpen ? "hidden" : ""} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-mono md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								to="/"
								className={pathname === "/" ? cssSelected : cssUnselected}
								aria-current="page"
							>
								🏠 Home
							</Link>
						</li>
						<li>
							<Link
								to="/catalog"
								className={
									pathname === "/catalog" ? cssSelected : cssUnselected
								}
							>
								📚 Catalogo
							</Link>
						</li>
						<li>
							<Link
								to="/configurator"
								className={
									pathname === "/configurator" ? cssSelected : cssUnselected
								}
							>
								💡 Configurator
							</Link>
						</li>
						<li>
							<label
								htmlFor="default-toggle"
								className="inline-flex relative items-center mb-4 cursor-pointer"
							>
								<input
									type="checkbox"
									value=""
									id="default-toggle"
									className="sr-only peer"
									onChange={(oEvn) => {
										console.log("click");
										debugger;
									}}
								/>
								<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							</label>
						</li>
					</ul>
				</div>
			</div>
			<Breadcrumb pathname={pathname} />
		</nav>
	);
};
