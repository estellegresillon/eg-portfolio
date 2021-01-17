import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";
import Projects from "components/Projects";

import StripeMenu from "components/Projects/StripeMenu";
import PricingComparator from "components/Projects/PricingComparator";
import GamePadWrapper from "components/Projects/GamePad";
import CreditCardForm from "components/Projects/CreditCardForm";
import WavesCanvas from "components/Projects/WavesCanvas";

export const PAGES = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Projects",
    url: "/projects",
    component: Projects,
  },
  {
    name: "About",
    url: "/about",
    component: About,
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
      "Développement d'une application de tournées",
      "ReactJs / Hooks / NextJs / Typescript",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Styled Components & Ant Design pour générer l'UI",
      "Conception de 2 maps interactives avec React MapGl",
      "Refactoring de code",
      "Amélioration des performances du front grâce aux hooks",
      "Intégration d'un service de Websockets",
      "Développement backend Node/NestJs (exposition d'endpoints / architecture CQRS)",
    ],
  },
  {
    name: "Osmo",
    isFreelance: true,
    img: "osmo",
    date: "April '20 - May '20",
    sector: "Education & E-Learning",
    description: [
      "Développement d'une virtual classroom",
      "Cours vidéo du professeur et échange avec ses élèves via chat",
      "Application ReactJs / Hooks",
      "Redux / Redux Saga",
      "Voxeet (video streaming)",
      "SendBird (chat)",
      "Développement d'un service de websockets",
      "Intégration responsive tout devices",
    ],
  },
  {
    name: "Apricity",
    isFreelance: true,
    img: "apricity",
    date: "January '20 - April '20",
    sector: "Health & Fertility",
    description: [
      "Développement d'une application d'accompagnement à la fertilité",
      "ReactJs / NextJs / Typescript",
      "Intégration responsive tout devices",
      "Intégration des nouvelles pages du site institutionnel avec Prismic",
      "Refactoring de code",
      "Collaboration avec le designer pour l'harmonisation de la charte graphique du site",
    ],
  },
  {
    name: "Wifirst",
    isFreelance: false,
    img: "wifirst",
    date: "August '18 - December '19",
    sector: "Télécommunications",
    description: [
      "Développement de plusieurs applications internes",
      "ReactJs / Hooks",
      "Redux / Context React",
      "Création d'un UI Kit type Storybook",
      "Tests unitaires avec Jest & Enzyme",
      "Intégration responsive tout devices",
      "Design UI/UX",
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
    subtitle: "One Page Love",
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
    subtitle: "One Page Love",
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
    name: "Stripe Menu",
    subtitle: "UI Challenge",
    link: "/stripe-menu",
    component: StripeMenu,
  },
  {
    name: "Pricing Comparator",
    subtitle: "UI Challenge",
    link: "/pricing-comparator",
    component: PricingComparator,
  },
  {
    name: "3D Gamepad",
    subtitle: "UI Challenge",
    link: "/3d-gamepad",
    component: GamePadWrapper,
  },
  {
    name: "Credit Card Form",
    subtitle: "UI Challenge",
    link: "/credit-card-form",
    component: CreditCardForm,
  },
  {
    name: "Waves with Canvas",
    subtitle: "UI Challenge",
    link: "/waves-canvas",
    component: WavesCanvas,
  },
];
