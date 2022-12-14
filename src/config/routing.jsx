import { HomeIcon } from '../assets/HomeIcon'
import { Catalog } from '../routes/Catalog'
import { Configurator } from '../routes/Configurator'
import { ConfiguratorRefactor } from '../routes/ConfiguratorRefactor'
import { LandingPage } from '../routes/LandingPage'
import { Uploader } from '../routes/Uploader'

export const routing = [
  {
    id: '918f3341-2a38-449c-854c-9fc660b777b2',
    path: '/',
    page: <LandingPage />,
    title: 'Home',
    icon: '🏠',
    svgIcon: HomeIcon,
    hidden: false,
  },
  {
    id: '6c655319-c56a-4ce4-90d4-2491e32fbd61',
    path: '/catalog',
    page: <Catalog />,
    title: 'Catalog',
    icon: '💡',
    hidden: false,
  },
  {
    id: '60bf0f6d-8d6d-4521-a556-3290062fdd89',
    path: '/uploader',
    page: <Uploader />,
    title: 'Uploader',
    icon: '☁',
    hidden: false,
  },

  // {
  // 	id: "e1d69cda-73f3-468b-9101-2416c4616011",
  // 	path: "/configurator",
  // 	page: <Configurator />,
  // 	title: "Configurator Sample",
  // 	icon: "📚",
  // 	hidden: false,
  // },
  // {
  // 	id: "e1d69cda-73f3-468b-9101-2416c4616012",
  // 	path: "/configuratorRefactor",
  // 	page: <ConfiguratorRefactor />,
  // 	title: "Configurator Material Sample",
  // 	icon: "🤩",
  // 	hidden: false,
  // },
  {
    id: 'e1d69cda-73f3-468b-9101-2416c4616011',
    path: '/configurator/:objId',
    page: <Configurator />,
    title: 'Configurator',
    icon: '📚',
    hidden: true,
  },
  {
    id: 'e1d69cda-73f3-468b-9101-2416c4616012',
    path: '/configuratorRefactor/:objId',
    page: <ConfiguratorRefactor />,
    title: 'Configurator Material',
    icon: '🤩',
    hidden: true,
  },
]
