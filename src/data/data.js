import React from "react";
import { FaDatabase } from "react-icons/fa";

import kababa from "../assets/portfolio/kababa.jpg";
import animatedPage from "../assets/portfolio/animated-page.jpg";
import bloggerSite from "../assets/portfolio/blogger-site.jpg";
import covidTracker from "../assets/portfolio/covid-tracker.jpg";
import devconnector from "../assets/portfolio/devconnector.jpg";
import linked from "../assets/portfolio/linked-in.jpg";
import linkedApi from "../assets/portfolio/linkedApi.jpg";
import luxuryAPIs from "../assets/portfolio/luxury-apis.jpg";
import porfolioV1 from "../assets/portfolio/portfolio-v1.jpg";
import porfolioV2 from "../assets/portfolio/porfolio-v2.jpg";
import resort from "../assets/portfolio/beach-resort.jpg";
import appilicious from "../assets/portfolio/appilicious.jpg";
import contacts from "../assets/portfolio/contacts.jpg";
import contactsApi from "../assets/portfolio/contacts-api.jpg";
import discovery from "../assets/portfolio/discovery.jpg";
import loruki from "../assets/portfolio/loruki.jpg";
import netflix from "../assets/portfolio/netflix.jpg";
import acme from "../assets/portfolio/acme.jpg";

import code from "../assets/icons/programming.svg";
import design from "../assets/icons/vector-design.svg";

import user from "../assets/imgs/user.jpg";

export const aboutData = {
  aboutOne: `Hello! I'm Maurice, a self taught developer(Fullstack) based in
  Nairobi, Kenya.`,
  aboutTwo: `I enjoy creating things that live on the internet, websites,
  applications or anything in between. My main goal is to always
  build products that provide pixel-perfect, perfomant
  experiences.`,
  img: user,
  skills: [
    {
      name: "React Frontend",
      percent: 90,
    },
    {
      name: "UX/UI Design",
      percent: 50,
    },
    {
      name: "Django Backend",
      percent: 75,
    },
    {
      name: "Django RestFramework",
      percent: 85,
    },
  ],
};

export const servicesData = [
  {
    icon: (
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0wLDE1Ljg0NXY0MjAuMjU5aDE2NC4zMzJ2MzAuMDQ5aC0zMC4wMzZ2MzAuMDAxaDI0My40MDd2LTMwLjAwMWgtMzAuMDM2di0zMC4wNDlINTEyVjE1Ljg0NUgweiBNMzE3LjY2NSw0NjYuMTUzDQoJCQlIMTk0LjMzNHYtMzAuMDQ5aDEyMy4zMzJWNDY2LjE1M3ogTTQ4MS45OTksNDA2LjEwM0gzMC4wMDF2LTYwLjA3NWg0NTEuOTk3VjQwNi4xMDN6IE00ODEuOTk5LDMxNi4wMjdIMzAuMDAxVjQ1Ljg0N2g0NTEuOTk3DQoJCQlWMzE2LjAyN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIyMDMuOTQzLDEyNi43MTIgMTgyLjcyOSwxMDUuNDk4IDEwNy4yOSwxODAuOTM3IDE4Mi43MjksMjU2LjM3NSAyMDMuOTQzLDIzNS4xNjEgMTQ5LjcxOCwxODAuOTM3IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMzI5LjI3MSwxMDUuNDk4IDMwOC4wNTcsMTI2LjcxMiAzNjIuMjgyLDE4MC45MzcgMzA4LjA1NywyMzUuMTYxIDMyOS4yNzEsMjU2LjM3NSA0MDQuNzA5LDE4MC45MzcgCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJDQoJCQk8cmVjdCB4PSIxNjYuNzQyIiB5PSIxNjUuOTQ3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjE5NTEgLTAuOTgwOCAwLjk4MDggMC4xOTUxIDI4LjU4MTUgMzk2LjcyMzcpIiB3aWR0aD0iMTc4LjUxMSIgaGVpZ2h0PSIzMC4wMDIiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
    ),
    title: "frontend",
    desc: `I am a frontend developer with skills in React.js, Redux and Context, Animations, HTML, CSS/SASS, JavaScript and TypeScript.`,
  },
  {
    icon: (
      <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ4MiA0ODJ2LTM4Ljc4N2wzMC0zMHYtMzUzLjIxM2gtMzB2LTMwaC0zMHYzMGgtMzB2MzUzLjIxM2wzMCAzMHYzOC43ODd6bS0xNS02Ni4yMTMtMTUtMTV2LTIxOS43ODdoMzB2MjE5Ljc4N3ptMTUtMzI1Ljc4N3Y2MWgtMzB2LTYxeiIvPjxwYXRoIGQ9Im00NSA1MTJoMzQ3di00NTJoLTMwdi0zMGgzMHYtMzBjLTI5LjcxMSAwLTMzNi4yNTcgMC0zNDcgMC0yNC44MTMgMC00NSAyMC4xODctNDUgNDV2NDIyYzAgMjQuODEzIDIwLjE4NyA0NSA0NSA0NXptLTE1LTQ1di0zNzkuNThjNC42OTUgMS42NjUgOS43NDIgMi41OCAxNSAyLjU4aDE1djM5MmgtMTVjLTguMjcxIDAtMTUtNi43MjktMTUtMTV6bTMzMiAxNWgtMjcydi0zOTJoMjcyem0tMzE3LTQ1MmgyODd2MzBoLTI4N2MtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNXoiLz48cGF0aCBkPSJtMTIwIDI3MWgyMTJ2LTEyMGgtMjEyem0zMC05MGgxNTJ2NjBoLTE1MnoiLz48cGF0aCBkPSJtMTIwIDMwMWgyMTJ2MzBoLTIxMnoiLz48cGF0aCBkPSJtMTUwIDM2MWgxNTJ2MzBoLTE1MnoiLz48L2c+PC9zdmc+" />
    ),
    title: "backend",
    desc: `I am a backend developer with skills i Restful APIs, Django, Django RestFramework and Laravel`,
  },
  {
    icon: <FaDatabase />,
    title: "database",
    desc: `When it comes to data and storage, i am proficient in working with PostgreSQL, MySQL and SQLite.`,
  },
  {
    icon: <img src={design} />,
    title: "design",
    desc: `I have alot of interest when it comes to desiging websites with the latest and high-quality UX/UI designs.`,
  },
  {
    icon: (
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDk2IDQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2IDQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNTIsNDY0aDEyMy4wOTZsLTMxLjYtOTQuODA4Yy04LjI2NC0yNC43OTItMjkuMzUyLTQzLjE3Ni01NS4wNC00Ny45OTJMMzA0LDMwNS4zNnYtMTkuNTQ0DQoJCQljMjAuMjMyLTE0LjYsMzQuNTEyLTM2Ljg0LDM4LjY1Ni02Mi40ODhDMzYxLjUzNiwyMjAuMTM2LDM3NiwyMDMuNzc2LDM3NiwxODR2LTU2QzM3Niw1Ny40MjQsMzE4LjU3NiwwLDI0OCwwUzEyMCw1Ny40MjQsMTIwLDEyOA0KCQkJdjU2YzAsMTkuNzUyLDE0LjM5MiwzNi4yMDgsMzMuMjQsMzkuNDMyYzQuMTYsMjUuNjQ4LDE4LjUyLDQ3LjkxMiwzOC43Niw2Mi41MDR2MTkuNDMybC04NC40NjQsMTUuODQNCgkJCWMtMjUuNjgsNC44MTYtNDYuNzc2LDIzLjItNTUuMDQsNDcuOTkyTDIwLjkwNCw0NjRIMTQ0di0xNmgtMjEuNzUybDEzLjUxMi01NC4wNjRsLTE1LjUyLTMuODcyTDEwNS43NTIsNDQ4SDQzLjA5NmwyNC41ODQtNzMuNzQ0DQoJCQljNi40MjQtMTkuMjgsMjIuODMyLTMzLjU4NCw0Mi44MDgtMzcuMzM2bDUwLjk2LTkuNTUybDEzLjAzMiw1OC42MjRDMTY1Ljk2OCwzODkuNjg4LDE2MCwzOTguMTUyLDE2MCw0MDh2NjQNCgkJCWMwLDEzLjIzMiwxMC43NjgsMjQsMjQsMjRoMTI4YzEzLjIzMiwwLDI0LTEwLjc2OCwyNC0yNHYtNjRjMC05Ljg0OC01Ljk2OC0xOC4zMTItMTQuNDcyLTIyLjAwOGwxMy4wMzItNTguNjI0bDUwLjk2LDkuNTUyDQoJCQljMTkuOTc2LDMuNzUyLDM2LjM3NiwxOC4wNTYsNDIuODA4LDM3LjMzNkw0NTIuOTA0LDQ0OGgtNjIuNjU2bC0xNC40ODgtNTcuOTM2bC0xNS41MiwzLjg3MkwzNzMuNzUyLDQ0OEgzNTJWNDY0eg0KCQkJIE0zMTguODI0LDMyNC40MTZsLTExLjA0OCw0OS43MTJMMzAyLjI0OCwzNTJoLTM0LjkzNmwzMS4zNi0zMS4zNkwzMTguODI0LDMyNC40MTZ6IE0yOTMuNzUyLDM4NGgtOTEuNTA0bDQtMTZoODMuNTA0DQoJCQlMMjkzLjc1MiwzODR6IE0yNDgsMzQ4LjY4OGwtNDAtNDBWMjk1LjJjMTIuMTkyLDUuNjE2LDI1LjcyLDguOCw0MCw4LjhjMTQuMjg4LDAsMjcuODA4LTMuMjI0LDQwLTguODR2MTMuNTI4TDI0OCwzNDguNjg4eg0KCQkJIE0zNDQsMjA2LjUyOFYxNjEuNDhjOS4yODgsMy4zMTIsMTYsMTIuMTEyLDE2LDIyLjUyOFMzNTMuMjg4LDIwMy4yMTYsMzQ0LDIwNi41Mjh6IE0xNTIsMjA2LjYzMmMtOS4zMTItMy4zMDQtMTYtMTIuMi0xNi0yMi42MzINCgkJCXM2LjY4OC0xOS4zMjgsMTYtMjIuNjMyVjIwNi42MzJ6IE0xMzYsMTUyLjIwOFYxMjhjMC02MS43Niw1MC4yNC0xMTIsMTEyLTExMnMxMTIsNTAuMjQsMTEyLDExMnYyNC4yMDgNCgkJCWMtNC43MzYtMy41ODQtMTAuMjA4LTYuMjMyLTE2LjI1Ni03LjQyNGMtMS4yNTYtOS40NDgtOS4yNzItMTYuNzg0LTE5LjA1Ni0xNi43ODRjLTUuMDgsMC0xMC4wNTYsMi4wNjQtMTQuMDU2LDYuMDY0DQoJCQljLTEzLjUxMiwxMy41MTItMzAuNjMyLDIyLjEyOC00OS4xNzYsMjQuOTI4bDAuNTEyLTEuMDI0YzEuMzI4LTIuNjcyLDIuMDMyLTUuNjU2LDIuMDMyLTguNjR2LTIuMDE2DQoJCQljMC0xMC42NDgtOC42NjQtMTkuMzEyLTE5LjMxMi0xOS4zMTJjLTUuMDgsMC0xMC4wNTYsMi4wNjQtMTMuNjU2LDUuNjU2QzIxNC4xNzYsMTUwLjUwNCwxOTEuODE2LDE1OS44NDgsMTY4LDE2MHYtMTZoLTgNCgkJCUMxNTAuOTYsMTQ0LDE0Mi43MDQsMTQ3LjEyOCwxMzYsMTUyLjIwOHogTTE2OCwyMDh2LTMyYzI4LjA4OC0wLjE1Miw1NC40NzItMTEuMTYsNzQuMzM2LTMxLjAyNA0KCQkJYzEuOTI4LTEuOTM2LDUuNjY0LTAuMzYsNS42NjQsMi4zMzZ2Mi4wMTZjMCwwLjUxMi0wLjEyLDEuMDI0LTAuMzUyLDEuNDg4TDIzNS4wNTYsMTc2SDI0OGMyNy45MzYsMCw1NC4xOTItMTAuODcyLDc0LjMzNi0zMS4wMjQNCgkJCWMxLjkzNi0xLjkzNiw1LjY2NC0wLjM2LDUuNjY0LDIuMzM2VjIwOGMwLDQ0LjExMi0zNS44ODgsODAtODAsODBTMTY4LDI1Mi4xMTIsMTY4LDIwOHogTTE5Ny4zMjgsMzIwLjY0bDMxLjM2LDMxLjM2aC0zNC45MzYNCgkJCWwtNS41MjgsMjIuMTI4bC0xMS4wNDgtNDkuNzEyTDE5Ny4zMjgsMzIwLjY0eiBNMTg0LDQ4MGMtNC40MDgsMC04LTMuNTg0LTgtOHYtNjRjMC00LjQxNiwzLjU5Mi04LDgtOGgyNC44ODgNCgkJCUMxOTguNDgsNDEwLjE3NiwxOTIsNDI0LjMzNiwxOTIsNDQwczYuNDgsMjkuODI0LDE2Ljg4OCw0MEgxODR6IE0yNDgsNDgwYy0yMi4wNTYsMC00MC0xNy45NDQtNDAtNDBjMC0yMi4wNTYsMTcuOTQ0LTQwLDQwLTQwDQoJCQljMjIuMDU2LDAsNDAsMTcuOTQ0LDQwLDQwQzI4OCw0NjIuMDU2LDI3MC4wNTYsNDgwLDI0OCw0ODB6IE0zMjAsNDcyYzAsNC40MTYtMy41OTIsOC04LDhoLTI0Ljg4OA0KCQkJQzI5Ny41Miw0NjkuODI0LDMwNCw0NTUuNjY0LDMwNCw0NDBzLTYuNDgtMjkuODI0LTE2Ljg4OC00MEgzMTJjNC40MDgsMCw4LDMuNTg0LDgsOFY0NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNDgsNDE2Yy0xMy4yMzIsMC0yNCwxMC43NjgtMjQsMjRzMTAuNzY4LDI0LDI0LDI0czI0LTEwLjc2OCwyNC0yNFMyNjEuMjMyLDQxNiwyNDgsNDE2eiBNMjQ4LDQ0OGMtNC40MDgsMC04LTMuNTg0LTgtOA0KCQkJYzAtNC40MTYsMy41OTItOCw4LThzOCwzLjU4NCw4LDhDMjU2LDQ0NC40MTYsMjUyLjQwOCw0NDgsMjQ4LDQ0OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
    ),
    title: "photographer",
    desc: `I have great skills when it comes to photography, photoediting and optimizing images.`,
  },
];

export const myProjects = [
  {
    id: 54,
    date: "2021-05-01",
    title: "Resort Beach",
    category: "Hotel",
    tools: ["React Js, Context API"],
    github: "https://github.com/blvck-code/resort-beach",
    link: "https://oluoch-resort-beach.netlify.app/",
    image: resort,
    desc: `
      Resort beach is a hotel website that enables one to filter rooms with desired room conitions and price.`,
    latest: true,
  },
  {
    id: 53,
    date: "2020-04-19",
    title: "Luxury Silk Backend APIs",
    category: "Backend",
    tools: ["Django, Django RestFramework"],
    github: "https://github.com/blvck-code/luxury-silk",
    link: "http://oluoch.pythonanywhere.com/",
    image: luxuryAPIs,
    desc:
      "This is backend APIs to upcoming Luxury Silk Ecommerce that is still under development. THIS PROJECT'S FRONTEND IS STILL UNDER DEVELOPMENT WITH REACT JS TECHNOLOGY.",
    latest: true,
  },
  {
    id: 52,
    date: "2020-12-31",
    title: "Kababa Resort",
    category: "Hotel",
    tools: ["React Js, Redux, CSS"],
    github: "https://github.com/blvck-code/kababa",
    link: "https://kababa.netlify.app/",
    image: kababa,
    desc:
      "Kababa Resort is a hotel within my hometown(Siaya), I decided to support the community with my skills. THIS PROJECT IS STILL UNDER DEVELOPMENT.",
    latest: true,
  },
  {
    id: 50,
    date: "2021-01-05",
    title: "Porfolio V2",
    category: "Portfolio",
    tools: ["React Js, Redux, React Framer"],
    github: "",
    link: "http://oluochbrian.netlify.app/",
    image: porfolioV2,
    desc: `
      This is my personal portfolio-v2 designed with unique UX/UI designs and animations.`,
    latest: true,
  },
  {
    id: 1,
    date: "2020-09-02",
    title: "Portfolio",
    category: "Portfolio",
    tools: ["React Hook, Django, SCSS, Redux, API"],
    github: "https://github.com/blvck-code/portfolio-frontend-v1--",
    link: "https://brianoluoch.netlify.app/",
    image: porfolioV1,
    desc:
      "This is my personal portfolio that i built from scratch and customized the UI without any CSS framework. This is is built using both react and django, the frontend fetchs data(projects) from backend which is hosted in heroku.",
    latest: false,
  },
  {
    id: 51,
    date: "2020-11-03",
    title: "Loruki | Cloud Hosting Website",
    category: "Clone",
    tools: ["HTML, CSS"],
    github: "https://github.com/blvck-code/loruki-website",
    link: "https://oluoch-loruki.netlify.app/",
    image: loruki,
    desc:
      "Loruki Cloud Hosting Website is a clone of Heroku UI with a different name and Interface.",
    latest: false,
  },
  {
    id: 48,
    date: "2020-10-26",
    title: "Covid Tracker",
    category: "Service",
    tools: ["React, API"],
    github: "https://github.com/blvck-code/covid-tracker",
    link: "https://oluoch-covid-tracker.netlify.app/",
    image: covidTracker,
    desc:
      "Covid Tracker is a website that tracks the latest covid cases world wide. This website fetch external API and designs the data to a form that user can understand.",
    latest: false,
  },
  {
    id: 49,
    date: "2020-10-24",
    title: "Applicious",
    category: "Personal",
    tools: ["HTML, SCSS"],
    github: "https://github.com/blvck-code/responsive-site",
    link: "https://oluoch-applicious.netlify.app",
    image: appilicious,
    desc:
      "Applicious is a responsive website i was trying to come up with to help me advance my skills in CSS and responsive.",
    latest: false,
  },
  {
    id: 15,
    date: "2020-10-23",
    title: "Linked In Full stack",
    category: "Fullstack",
    tools: ["React Hook, Scss, API, Django"],
    github: "https://github.com/blvck-code/linkedin-clone",
    link: "https://linked-in.netlify.app",
    image: linked,
    desc:
      "This is a clone of linked in that allows user to create a post, create profile, add experience and education background. This project is still under production.",
    latest: false,
  },
  {
    id: 50,
    date: "2020-10-19",
    title: "Blogger Website",
    category: "Personal",
    tools: ["HTML, CSS, JavaScript"],
    github: "https://github.com/blvck-code/BloggerWebsite",
    link: "https://oluoch-blogger-website.netlify.app/",
    image: bloggerSite,
    desc:
      "Blogger Website is a demo for how most blog website looks like. This is a single page website with designs and tone for most modern websites.",
    latest: false,
  },
  {
    id: 14,
    date: "2020-10-06",
    title: "Contacts API Fullstack",
    category: "Fullstack",
    tools: ["React Hook, Redux, SCSS, Redux, API"],
    github: "https://github.com/blvck-code/Contacts-API-frontend",
    link: "https://thecontacts.netlify.app/",
    image: contacts,
    desc:
      "This is contact book project where users can add contacts, delete & update.",
    latest: false,
  },
  {
    id: 6,
    date: "2020-10-04",
    title: "Contacts API Backend",
    category: "Backend",
    tools: ["Django,  API, Django RestFramework"],
    github: "https://github.com/blvck-code/Contacts-API-backend",
    link: "https://contacts-api-backend.herokuapp.com/",
    image: contactsApi,
    desc:
      "This is the backend APIs to my ongoing project. The backend holds the APIs that the frontend will fetch data from. This project is hosted on heroku.",
    latest: false,
  },
  {
    id: 9,
    date: "2020-10-03",
    title: "Animated page",
    category: "Personal",
    tools: ["HTML, SCSS"],
    github: "https://github.com/blvck-code/animation-design",
    link: "https://relaxed-liskov-9c0fc0.netlify.app/",
    image: animatedPage,
    desc:
      "What i love most about web development is designing and this is a single page designed with floating bubbles. The page is not responsive.",
    latest: false,
  },
  {
    id: 12,
    date: "2020-10-03",
    title: "Discovery Channel Homepage",
    category: "Personal",
    tools: ["HTML, SCSS"],
    github: "https://github.com/blvck-code/Discovery-Channel-Homepage",
    link: "https://discovery-channel.netlify.app/",
    image: discovery,
    desc:
      "This is a UX/UI Design for the Discovery Channel Homepage. The page is made with HTM & CSS only.",
    latest: false,
  },
  {
    id: 11,
    date: "2020-10-01",
    title: "Coffee Junkie",
    category: "Service",
    tools: ["HTML, SCSS, Bootstrap"],
    github: "https://github.com/blvck-code/Coffee-Junkie",
    link: "https://coffee-junkiee.netlify.app/",
    image: null,
    desc:
      "This is a design to a coffee shop website. The project is built with bootstrap and the design is great.",
    latest: false,
  },
  {
    id: 4,
    date: "2020-10-01",
    title: "Linked In Clone Backend",
    category: "Backend",
    tools: ["Django,  API, Django RestFramework"],
    github: "https://github.com/blvck-code/linked-in-backend",
    link: "https://oluoch-linkedin.herokuapp.com/",
    image: linkedApi,
    desc:
      "Backend APIs to linked in clone. This backend project is hosted on heroku platform.",
    latest: false,
  },
  {
    id: 10,
    date: "2020-08-25",
    title: "Netflix Clone",
    category: "Clone",
    tools: ["HTML, SCSS, JavaScript"],
    github: "https://github.com/blvck-code/Netflix-Clone",
    link: "https://netflix-clonee.netlify.app/",
    image: netflix,
    desc:
      "This is a clone to Netflix homepage. I also love their simple designs and always want to try clone it.",
    latest: false,
  },
  {
    id: 13,
    date: "2020-08-04",
    title: "Acme Web Design",
    category: "Service",
    tools: ["HTML, SCSS, Bootstrap"],
    github: "https://github.com/blvck-code/Acme-Web-Design",
    link: "https://acmee.netlify.app/",
    image: acme,
    desc:
      "This is a website built during course study with Traversy Media. This site helped to equip me with botstrap skills.",
    latest: false,
  },
  {
    id: 3,
    date: "2020-07-22",
    title: "Developer Connector",
    category: "Service",
    tools: ["HTML, SCSS"],
    github: "https://github.com/blvck-code/devsconnector",
    link: "https://devsconnector.netlify.app/",
    image: devconnector,
    desc:
      "This is an overview to Linked In Clone with no backend. The idea is to come up with a fullstack of this demo.",
    latest: false,
  },
];

export const categories = [
  {
    category: "all sites",
    id: "all",
    style: "active",
  },
  {
    category: "backend",
    id: "backend",
    style: "",
  },
  {
    category: "fullstack",
    id: "fullstack",
    style: "",
  },
  {
    category: "clone",
    id: "clone",
    style: "",
  },
  {
    category: "ecommerce",
    id: "ecommerce",
    style: "",
  },
  {
    category: "blog",
    id: "blog",
    style: "",
  },
  {
    category: "hotel",
    id: "hotel",
    style: "",
  },
  {
    category: "personal",
    id: "personal",
    style: "",
  },
  {
    category: "portfolio",
    id: "portfolio",
    style: "",
  },
  {
    category: "service",
    id: "service",
    style: "",
  },
];
