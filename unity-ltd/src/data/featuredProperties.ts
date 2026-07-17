import { Property } from "../../components/layout/interfaces";

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Unity Gardens Estate",
    location: "Warri, Delta State",
    image: "/images/property1.jpg",

    type: "Residential",

    verified: true,
    installment: true,

    status: "coming-soon",

    href: "/properties",
  },

  {
    id: 2,
    title: "Unity Business Hub",
    location: "Effurun, Delta State",
    image: "/images/property2.jpg",

    type: "Commercial",

    verified: true,
    installment: false,

    status: "coming-soon",

    href: "/properties",
  },

  {
    id: 3,
    title: "Future Housing Estate",
    location: "Delta State",
    image: "/images/property3.jpg",

    type: "Mixed Development",

    verified: true,
    installment: true,

    status: "coming-soon",

    href: "/properties",
  },
];