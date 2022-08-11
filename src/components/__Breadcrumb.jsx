import { Link } from "react-router-dom";

export const __Breadcrumb = ({ pathname }) => {
	return (
		<ol className="w-full inline-flex items-center justify-start space-x-1 md:space-x-3">
			<li className="inline-flex items-center">
				<Link
					to="/"
					className="inline-flex items-center text-sm font-mono p-1 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
				>
					<img
						src="/home.png"
						className="w-4 h-4 mr-2"
						style={{ filter: "invert(48%)" }}
					/>
					Home
				</Link>
			</li>
			<li
				className={
					pathname !== "/catalog" && pathname !== "/configurator"
						? "hidden"
						: ""
				}
			>
				<div className="flex items-center">
					<img
						src="/fast-forward-double-right-arrows-symbol.png"
						style={{ filter: "invert(48%)" }}
						className=" w-4 h-4"
					/>
					<Link
						to="/catalog"
						className="ml-1 text-sm font-mono text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
					>
						Catalog
					</Link>
				</div>
			</li>
			<li
				className={pathname !== "/configurator" ? "hidden" : ""}
				aria-current="page"
			>
				<div className="flex items-center">
					<img
						src="/fast-forward-double-right-arrows-symbol.png"
						style={{ filter: "invert(48%)" }}
						className=" w-4 h-4"
					/>
					<span className="ml-1 text-sm font-mono text-gray-500 md:ml-2 dark:text-gray-400">
						Configurator
					</span>
				</div>
			</li>
		</ol>
	);
};
