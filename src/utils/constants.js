import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";
import Projects from "components/Projects";

import StripeMenu from "components/Projects/StripeMenu";
import PricingComparator from "components/Projects/PricingComparator";
import GamePadWrapper from "components/Projects/GamePad";
import CreditCardForm from "components/Projects/CreditCardForm";
import WavesCanvas from "components/Projects/WavesCanvas";
import StackedMenu from "components/Projects/StackedMenu";
import VirtualTicket from "components/Projects/VirtualTicket";

export const PAGES = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Career",
    url: "/career",
    component: About,
  },
  {
    name: "Personal work",
    url: "/projects",
    component: Projects,
  },
  {
    name: "Contact",
    url: "/contact",
    component: Contact,
  },
];

export const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/estellegresillon/",
    icon: "fab fa-linkedin",
  },
  {
    url: "https://dribbble.com/estellegresillon",
    icon: "fab fa-dribbble",
  },
  {
    url: "https://github.com/estellegresillon",
    icon: "fab fa-github-alt",
  },
  {
    url: "mailto:estelle.gresillon@gmail.com",
    icon: "far fa-paper-plane",
  },
];

export const CONTACT_PAGE_WORDS = [
  "an app from scratch",
  "a great feature to develop",
  "some refactoring",
  "a collaboration",
  "an outsanding showcase website ",
  "a brand new app concept ",
  "a breathtaking portfolio ",
  "a cool project ",
];

export const BLOG_URL = "https://blog.estellegresillon.fr";

export const PROJECTS = [
  {
    name: "Kardinal",
    isFreelance: true,
    img: "kardinal",
    date: "May '20 - Now",
    sector: "Logistic & Supply Chain",
    description: [
      "Development of a route optimization solution",
      "CRA / ReactJs / Hooks / NextJs / Typescript",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Styled Components and AntDesign to generate the UI",
      "Conception of 2 interactives maps with React MapGl",
      "Code refactoring",
      "App performances improvement with memos and callbacks",
      "Websockets service integration",
      "Backend development with Node and the framework NestJs",
      "Endpoint exposure / CQRS architecture",
      "Storybook integration",
      "Release into production and preproduction with Docker, Kubernetes and Rancher",
    ],
  },
  {
    name: "Osmo",
    isFreelance: true,
    img: "osmo",
    date: "April '20 - May '20",
    sector: "Education & E-Learning",
    description: [
      "Development of a virtual classroom",
      "The app features video courses and a chat between teacher and students",
      "CRA / ReactJs / Hooks",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Voxeet (video streaming)",
      "SendBird (chat)",
      "Websockets service integration",
      "Responsive integration for desktop, tablet and mobile",
    ],
  },
  {
    name: "Apricity",
    isFreelance: true,
    img: "apricity",
    date: "January '20 - April '20",
    sector: "Health & Fertility",
    description: [
      "Development of an application supporting fertility",
      "CRA / ReactJs / NextJs / Typescript",
      "Responsive integration for desktop, tablet and mobile",
      "Development of the institutional website with Prismic",
      "Code refactoring",
      "Collaboration with the designer to harmonize the graphic charter",
    ],
  },
  {
    name: "Wifirst",
    isFreelance: false,
    img: "wifirst",
    date: "August '18 - December '19",
    sector: "Telecommunications",
    description: [
      "Development of multiple internal applications",
      "Hotspot management apps and a ticketing app",
      "CRA / Webpack / Gulp",
      "ReactJs : transition from class components to hooks",
      "Redux / Context React",
      "Creation of a UI Kit",
      "Unit testing with Jest and Enzyme",
      "Responsive integration for desktop tablet and mobile",
      "UI/UX design for the apps I created from scratch",
      "Backend in RoR and Graphql",
    ],
  },
];

export const WEBSITES = [
  {
    name: "Foodlab",
    subtitle: "School Project",
    link: "https://foodlab.estellegresillon.fr/",
    component: null,
  },
  {
    name: "Zest Neobank",
    subtitle: "One Page",
    link: "https://zest.estellegresillon.fr",
    component: null,
  },
  {
    name: "Otaku Market",
    subtitle: "Shopify Site",
    link: "https://www.otaku-market.com",
    component: null,
  },
  {
    name: "Love for Greece",
    subtitle: "One Page",
    link: "https://santorini.estellegresillon.fr",
    component: null,
  },
  {
    name: "That's My Rock",
    subtitle: "School Project",
    link: "http://thatsmyrock.com",
    component: null,
  },
];

export const FRONT_END_CHALLENGES = [
  {
    name: "Stacked Menu",
    subtitle: "CSS - UI/UX",
    link: "/stacked-menu",
    component: StackedMenu,
  },
  {
    name: "Virtual Ticket",
    subtitle: "CSS - UI/UX",
    link: "/virtual-ticket",
    component: VirtualTicket,
  },
  {
    name: "Credit Card Form",
    subtitle: "CSS - UI/UX",
    link: "/credit-card-form",
    component: CreditCardForm,
  },
  {
    name: "Waves with Canvas",
    subtitle: "Animation / GUI",
    link: "/waves-canvas",
    component: WavesCanvas,
  },
  {
    name: "Pricing Comparator",
    subtitle: "CSS - UI/UX",
    link: "/pricing-comparator",
    component: PricingComparator,
  },
  {
    name: "3D Gamepad",
    subtitle: "3D",
    link: "/3d-gamepad",
    component: GamePadWrapper,
  },
  {
    name: "Stripe Menu",
    subtitle: "CSS - UI/UX",
    link: "/stripe-menu",
    component: StripeMenu,
  },
];

// export const PROJECTS = [
//   {
//     name: "Kardinal",
//     isFreelance: true,
//     img: "kardinal",
//     date: "May '20 - Now",
//     sector: "Logistic & Supply Chain",
//     description: [
//       "Développement d'une application de tournées",
//       "ReactJs / Hooks / NextJs / Typescript",
//       "Redux : Selectors / Hooks Redux / Redux Saga",
//       "Styled Components & Ant Design pour générer l'UI",
//       "Conception de 2 maps interactives avec React MapGl",
//       "Refactoring de code",
//       "Amélioration des performances du front grâce aux hooks",
//       "Intégration d'un service de Websockets",
//       "Développement backend Node/NestJs (exposition d'endpoints / architecture CQRS)",
//     ],
//   },
//   {
//     name: "Osmo",
//     isFreelance: true,
//     img: "osmo",
//     date: "April '20 - May '20",
//     sector: "Education & E-Learning",
//     description: [
//       "Développement d'une virtual classroom",
//       "Cours vidéo du professeur et échange avec ses élèves via chat",
//       "Application ReactJs / Hooks",
//       "Redux / Redux Saga",
//       "Voxeet (video streaming)",
//       "SendBird (chat)",
//       "Développement d'un service de websockets",
//       "Intégration responsive tout devices",
//     ],
//   },
//   {
//     name: "Apricity",
//     isFreelance: true,
//     img: "apricity",
//     date: "January '20 - April '20",
//     sector: "Health & Fertility",
//     description: [
//       "Développement d'une application d'accompagnement à la fertilité",
//       "ReactJs / NextJs / Typescript",
//       "Intégration responsive tout devices",
//       "Intégration des nouvelles pages du site institutionnel avec Prismic",
//       "Refactoring de code",
//       "Collaboration avec le designer pour l'harmonisation de la charte graphique du site",
//     ],
//   },
//   {
//     name: "Wifirst",
//     isFreelance: false,
//     img: "wifirst",
//     date: "August '18 - December '19",
//     sector: "Télécommunications",
//     description: [
//       "Développement de plusieurs applications internes",
//       "ReactJs / Hooks",
//       "Redux / Context React",
//       "Création d'un UI Kit type Storybook",
//       "Tests unitaires avec Jest & Enzyme",
//       "Intégration responsive tout devices",
//       "Design UI/UX",
//     ],
//   },
// ];
