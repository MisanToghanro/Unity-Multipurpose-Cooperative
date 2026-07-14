import { HeroSlide } from "../../components/layout/interfaces";

export const heroSlides: HeroSlide[] = [
{
  id: 1,

  title: [
    "Save Together.",
    "Invest Wisely.",
    "Build Lasting Wealth.",
  ],

  description:
    "Unity Multipurpose Cooperative Society empowers individuals, families and businesses through disciplined savings, affordable financing, property ownership and investment opportunities designed for long-term financial growth.",

  image: "/images/heroimg1.jpeg",

  primaryBtn: {
    text: "Become a Member",
    href: "/membership",
  },

  secondaryBtn: {
    text: "Learn About Us",
    href: "/about",
  },

  highlights: [
    "Registered Cooperative Society",
    "Transparent Governance",
    "Member-Owned & Member-Focused",
  ],
},

{
  id: 2,

  title: [
    "Own Property.",
    "Secure Your Future.",
  ],

  description:
    "Access verified land, housing opportunities and flexible property financing through trusted partnerships that make ownership more accessible and secure.",

  image: "/images/heroimg2.jpeg",

  primaryBtn: {
    text: "Explore Properties",
    href: "/properties",
  },

  secondaryBtn: {
    text: "Our Services",
    href: "/services",
  },

  highlights: [
    "Verified Property Listings",
    "Secure Documentation",
    "Flexible Payment Plans",
  ],
},
{
  id: 3,

  title: [
    "Save Today.",
    "Grow Tomorrow.",
  ],

  description:
    "Build financial discipline through structured savings plans while gaining access to cooperative loans, investment opportunities and future wealth creation.",

  image: "/images/heroimg3.jpeg",

  primaryBtn: {
    text: "Join Membership",
    href: "/membership",
  },

  secondaryBtn: {
    text: "View Services",
    href: "/services",
  },

  highlights: [
    "Flexible Savings Plans",
    "Affordable Cooperative Loans",
    "Financial Growth Opportunities",
  ],
},
{
  id: 4,

  title: [
    "Invest With",
    "Confidence.",
  ],

  description:
    "From real estate and agricultural investments to business support and wealth creation, we provide members with opportunities to build lasting financial security.",

  image: "/images/heroimg4.jpeg",

  primaryBtn: {
    text: "Explore Opportunities",
    href: "/services",
  },

  secondaryBtn: {
    text: "Contact Us",
    href: "/contact",
  },

  highlights: [
    "Property Investments",
    "Agricultural Opportunities",
    "Business & Wealth Support",
  ],
}
];