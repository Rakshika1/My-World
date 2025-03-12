import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Frontend Developer (React, Tailwind)",
    icon: web, 
  },
  {
    title: "Backend Developer (Django, Express)",
    icon: backend,
  },
  {
    title: "Database Management (SQL, MongoDB)",
    icon: creator, 
  },
  {
    title: "Machine Learning & Computer Vision",
    icon: mobile,
  }
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const projects = [
  {
    name: "Aircraft Navigation System",
    description:
      "Full-stack web application designed to manage aircraft, flight routes, and airport data efficiently. It features real-time navigation tracking with altitude and speed monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "apis",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit, 
    source_code_link: "https://github.com/", 
  },
  {
    name: "Automated Hackathon Management System (Ongoing)",
    description:
      "A digital platform for college event management, including hostel allotment, student stay tracking, and real-time event updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: carrent, // Add an actual image reference
    source_code_link: "https://github.com/", // Update with actual link
  },
];


export { services, technologies,  projects };
