import { Button, Navbar as N } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { routing } from "../config/routing";
import { Breadcrumb } from "./Breadcrumb";

export const Navbar = () => {
	// manage selected menu item
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<>
			<N fluid={true} rounded={true}>
				<N.Brand href="#">
					<img
						src="/simple-logo-geometric-polygonal.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Config.teste Logo"
					/>
					<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						Config.teste
					</span>
				</N.Brand>
				<div className="flex md:order-2">
					<Button outline={true} gradientDuoTone="pinkToOrange">
						Configura
					</Button>
					<N.Toggle />
				</div>
				<N.Collapse>
					{routing.map(({ id, path, title, icon }) => (
						<N.Link key={id} href={path} active={path === `${pathname}`}>
							<span>
								{icon} {"	"}
								{title}
							</span>
						</N.Link>
					))}
				</N.Collapse>
			</N>
			<Breadcrumb pathname={pathname} />
		</>
	);
};
