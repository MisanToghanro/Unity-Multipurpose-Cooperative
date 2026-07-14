import { HeroSlide } from "../../components/layout/interfaces";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: [
      "Own Land.",
      "Build Wealth.",
      "Together.",
    ],

    description:
      "Unity Multipurpose Cooperative Society helps individuals, families and businesses achieve property ownership through affordable savings, verified land acquisition and cooperative investment opportunities.",

    image: "/images/heroimg1.jpeg",

    primaryBtn: {
      text: "Become a Member",
      href: "/membership",
    },

    secondaryBtn: {
      text: "Explore Properties",
      href: "/properties",
    },

    highlights: [
      "Registered Cooperative",
      "Verified Land Titles",
      "Flexible Payment Plans",
    ],
  },

  {
    id: 2,

    title: [
      "Verified Land.",
      "Secure Investments.",
    ],

    description:
      "Purchase verified plots through flexible installment plans backed by transparency, proper documentation and trusted partnerships.",

    image: "/images/heroimg2.jpeg",

    primaryBtn: {
      text: "View Properties",
      href: "/properties",
    },

    secondaryBtn: {
      text: "Learn More",
      href: "/services",
    },

    highlights: [
      "Government Verified Lands",
      "Secure Documentation",
      "Trusted Property Partners",
    ],
  },

  {
    id: 3,

    title: [
      "Save Today.",
      "Own Tomorrow.",
    ],

    description:
      "Our structured savings plans help members build financial discipline while preparing for land acquisition, housing and long-term investments.",

    image: "/images/heroimg3.jpeg",

    primaryBtn: {
      text: "Join Membership",
      href: "/membership",
    },

    secondaryBtn: {
      text: "Savings Plans",
      href: "/services",
    },

    highlights: [
      "Monthly Savings Plans",
      "Affordable Installments",
      "Financial Discipline",
    ],
  },

  {
    id: 4,

    title: [
      "Invest With",
      "Confidence.",
    ],

    description:
      "From land ownership to housing development and real estate investment, we're committed to helping members create lasting wealth.",

    image: "/images/heroimg4.jpeg",

    primaryBtn: {
      text: "Start Investing",
      href: "/contact",
    },

    secondaryBtn: {
      text: "Contact Us",
      href: "/contact",
    },

    highlights: [
      "Real Estate Investments",
      "Housing Development",
      "Long-Term Wealth Creation",
    ],
  },
];