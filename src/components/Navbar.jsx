import { Button, Navbar as N } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { routing } from "../config/routing";
import { Breadcrumb } from "./Breadcrumb";
import { useTranslation } from "react-i18next";
import { ConfigureButton } from "./ConfigureButton";

export const Navbar = () => {
	// manage selected menu item
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { t } = useTranslation();

	return (
		<>
			<N fluid={true} rounded={true}>
				<N.Brand href="#">
					<img
						src="/smartphone-camera-svgrepo-com.svg"
						className="mr-3 h-6 sm:h-9"
						alt={`${t("title")} logo`}
					/>
					<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						{t("title")}
					</span>
				</N.Brand>
				<div className="flex md:order-2">
					<ConfigureButton size="xl" />
				</div>
				<N.Collapse>
					{routing
						.filter((r) => !r.hidden)
						.map(({ id, path, title, icon }) => (
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
