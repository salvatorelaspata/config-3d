import { HomeIcon } from "../assets/HomeIcon";
import { Catalog } from "../routes/Catalog";
import { Configurator } from "../routes/Configurator";
import { ConfiguratorRefactor } from "../routes/ConfiguratorRefactor";
import { LandingPage } from "../routes/LandingPage";

export const routing = [
	{
		id: "918f3341-2a38-449c-854c-9fc660b777b2",
		path: "/",
		page: <LandingPage />,
		title: "Home",
		icon: "🏠",
		svgIcon: HomeIcon,
	},
	{
		id: "6c655319-c56a-4ce4-90d4-2491e32fbd61",
		path: "/catalog",
		page: <Catalog />,
		title: "Catalog",
		icon: "💡",
	},
	{
		id: "e1d69cda-73f3-468b-9101-2416c4616011",
		path: "/configurator",
		page: <Configurator />,
		title: "Configurator",
		icon: "📚",
	},
	,
	{
		id: "e1d69cda-73f3-468b-9101-2416c4616012",
		path: "/configuratorRefactor",
		page: <ConfiguratorRefactor />,
		title: "Configurator Material",
		icon: "📚",
	},
];
