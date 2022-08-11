import { Breadcrumb as B } from "flowbite-react";
import { routing } from "../config/routing";

export const Breadcrumb = ({ pathname }) => {
	const _calcolateVisibleBreadCrumb = (currentI) => {
		const i = routing.map((r) => r.path).indexOf(pathname);
		console.log(currentI, i, currentI <= i);
		return currentI <= i;
	};

	return (
		<B
			aria-label="Default breadcrumb example"
			className={`${pathname === "/configurator" ? "hidden" : "visible"}`}
		>
			{routing.map(({ id, path, title, svgIcon }, i) => (
				<B.Item
					className={_calcolateVisibleBreadCrumb(i) ? "hidden" : "hidden"}
					hidden={_calcolateVisibleBreadCrumb(i)}
					key={id}
					href={path}
					icon={path === "/" && svgIcon}
				>
					{title}
				</B.Item>
			))}
		</B>
	);
};
