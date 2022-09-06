import { Breadcrumb as B } from "flowbite-react";
import React from "react";
import { routing } from "../config/routing";

export const Breadcrumb = ({ pathname }) => {
	const _calcolateVisibleBreadCrumb = (currentI) => {
		const i = routing.map((r) => r.path).indexOf(pathname);
		// console.log(currentI, i, currentI <= i);
		return currentI <= i;
	};

	return (
		<B
			aria-label="Breadcrumb"
			className={`${pathname !== "/" ? "hidden" : "visible"}`}
			tabIndex={0} // accessibility keyboard navigation
		>
			{routing
				.filter((r) => !r.hidden)
				.map(({ id, path, title, svgIcon }, i) => (
					<B.Item
						className={`${
							_calcolateVisibleBreadCrumb(i) ? "hidden" : "visible"
						}`}
						key={id}
						href={path}
						hidden={_calcolateVisibleBreadCrumb(i)}
						icon={path === "/" && svgIcon}
					>
						{title}
					</B.Item>
				))}
		</B>
	);
};
