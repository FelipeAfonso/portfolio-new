import { Project } from "../types";
import Flora1 from "./images/Flora-Mapa.png";
import Flora2 from "./images/Flora-Home.png";
import Flora3 from "./images/Flora-MapaF.png";
import Flora4 from "./images/Flora-Form.png";
import Flora5 from "./images/Flora-Dashboard.png";
import FloraApp1 from "./images/FloraApp-Home.png";
import FloraApp2 from "./images/FloraApp-ZoomedIn.png";
import FloraApp3 from "./images/FloraApp-ListView.png";
import FloraApp4 from "./images/FloraApp-SelectedFarm.png";
import FloraApp5 from "./images/FloraApp-NewMonitoring.png";
import Alura1 from "./images/AluraC-Community.png";
import Alura2 from "./images/AluraC-Editor.png";
import Alura3 from "./images/AluraCMobile-Community.png";
import Alura4 from "./images/AluraCMobile-Editor.png";

export const projects: Record<string, Project> = {
  flora: {
    title: "AG Platform Flora",
    description: `Flora is the internal name of the Santos Lab's main software. It is a web platform for farmers and agronomists to explore data from different origins in their properties. It contemplates complex web maps, dashboard with unique charts, lots of forms and exotic components.
    I've started alone with the MVP in 2019 which laid the foundation for the platform. My team and I delivered the full version of the original features in 2020. And in 2021 in partnership with a major food exporter from Brazil, we created a sustainability module. In all these steps I was the main developer onboard.`,
    link: "https://flora.santoslab.com (No Public Sign Up)",
    images: [Flora1, Flora2, Flora3, Flora4, Flora5],
    workedWith: [
      "React.js",
      "REST APIs",
      "Next.js",
      "GraphQL",
      "ApolloClient",
      "materialUI",
      "Leaflet",
      "TypeScript",
      "Jest",
      "Cypress",
      "Redux Toolkit",
      "JWT",
      "Google Analytics",
      "Sentry.io",
      "React Hook Form",
      "React Router",
      "Axios",
      "Recharts",
      "Husky",
      "Eslint",
      "Prettier",
      "Locize",
      "i18n",
      "FullCalendar",
      "Turf.js",
    ],
  },
  floraMonitoring: {
    title: "Pest and Prague Monitoring App",
    description: `I was the main developer and managed a team of 4 other front end developers for a React Native app for Android and iOS. The app was made to monitor pests and plagues in farms and its fields. It was offline first as the connectivity in these places tend to be limited. And as a map-centric app we had to build extra features on top of Google Maps API. As the company is not opening for public users the app is not published on the stores yet. But it is in use by farmers and agronomists associated with Santos Lab.`,
    images: [FloraApp1, FloraApp2, FloraApp3, FloraApp4, FloraApp5],
    workedWith: [
      "React Native",
      "REST APIs",
      "TypeScript",
      "Redux Toolkit",
      "JWT",
      "Google Maps",
      "Google Analytics",
      "Axios",
      "Husky",
      "Eslint",
      "Prettier",
      "i18n",
      "Turf.js",
    ],
  },
  internalSantosLabServiceOrders: {
    title: "Internal Service Orders Platform",
    description: `This project was meant to be Santos Lab internal system for managing client service orders. I was the sole developer for the front end. The platform was form-centric and needed to be built with urgency. It was used for at least one year before some changes in the company's strategy. No images for this platform as its back end was disabled.`,
    workedWith: [
      "React.js",
      "REST APIs",
      "materialUI",
      "TypeScript",
      "Redux Toolkit",
      "JWT",
    ],
  },
  aluraChallenge: {
    title: "Code Editor and Community",
    description:
      "I've participated in a 4 week challenge with the goal of developing a code editor and community web app. I've used React/NextJS and some technologies I didn't had the chance of using before.",
    images: [Alura1, Alura2, Alura3, Alura4],
    workedWith: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Recoil",
      "Firebase Auth",
      "Firestore",
      "Playwright",
      "materialUI",
      "Eslint",
      "Prettier",
    ],
  },
};
