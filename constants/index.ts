import { BlogsInterface, FeedbacksInterface, NavbarLinks as NavbarLinksInterface, OurServicesInterface, TeamInterface, WhyChooseUsInterface, partners as partnersInterface } from "@/interface";
import { Blog1, Blog2, Blog3, OSI1, OSI2, OSI3, OSI4, OSI5, OSI6, airbnb, airbnb_base, driveway, driveway_base, envato, envato_base, github, github_base, node, node_base, rails, rails_base, slack, slack_base, team1, team2, team3, team4, team5, whyC1, whyC2, whyC3 } from "./exports";
import { ServicesIcon1, ServicesIcon2, ServicesIcon3, ServicesIcon4, ServicesIcon5, ServicesIcon6 } from "@/utils";





export const NavbarLinks: NavbarLinksInterface[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about-us",
  },
  {
    title: "Pages",
    url: "/pages",
    subLinks: [
      {
        subLinksTitle: "Features",
      },
      {
        subLinksTitle: "Services",
      },
      {
        subLinksTitle: "Feadback",
      },
      {
        subLinksTitle: "Projects",
      },
      {
        subLinksTitle: "Team",
      },
      {
        subLinksTitle: "Pricing",
      },
      {
        subLinksTitle: "User",
      },
      {
        subLinksTitle: "FAQ`S",
      },
      {
        subLinksTitle: "Coming Soon",
      },
      {
        subLinksTitle: "404 Error page",
      },
    ],
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];



export const partners: partnersInterface[] = [
  {
    baseImage: airbnb_base,
    image: airbnb,
    title: "airbnb",
  },
  {
    baseImage: slack_base,
    image: slack,
    title: "slack",
  },
  {
    baseImage: envato_base,
    image: envato,
    title: "envato",
  },
  {
    baseImage: driveway_base,
    image: driveway,
    title: "driveway",
  },
  {
    baseImage: github_base,
    image: github,
    title: "github",
  },
  {
    baseImage: node_base,
    image: node,
    title: "node",
  },
  {
    baseImage: rails_base,
    image: rails,
    title: "rails",
  },
];

export const ourTeams: TeamInterface[] = [
  {
    image: team1,
    name: "Josh Buttler",
  },
  {
    image: team2,
    name: "Alex Maxwel",
  },
  {
    image: team3,
    name: "Janny Cotller",
  },
  {
    image: team4,
    name: "Jason Statham",
  },
];

export const OurFeedbacks: FeedbacksInterface[] = [
  {
    image: team1,
    name: "David Gale",
    department: "Web Developer",
  },
  {
    image: team2,
    name: "Matt Damon",
    department: "Software Engineer",
  },
  {
    image: team5,
    name: "Nicky Parsons",
    department: "Fictional Character",
  },
  {
    image: team3,
    name: "Jason Mamoa",
    department: "American Actor",
  },
  {
    image: team4,
    name: "Gennady Korotkevich",
    department: "Sport Programmer",
  },
  {
    image: team1,
    name: "David Gale",
    department: "Web Developer",
  },
  {
    image: team5,
    name: "Petr Mitrichev",
    department: "Russian Programmer",
  },
  {
    image: team2,
    name: "Reid W. Barton",
    department: "Mathematics",
  },
  {
    image: team3,
    name: "Lisa Sauermann last",
    department: "Mathematician",
  },
];

export const Why_ChooseUs: WhyChooseUsInterface[] = [
  {
    image: whyC1,
    department: "Digital Technology",
    text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
  },
  {
    image: whyC2,
    department: "Business Protection",
    text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
  },
  {
    image: whyC3,
    department: "Data Analysis",
    text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
  },
];

export const Blogs: BlogsInterface[] = [
  {
    coverImage: Blog1,
    date: "March 15,2023",
    author: "Admin",
    title: "The Security Risks Of Changing Package Owners",
    blogDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
  {
    coverImage: Blog2,
    date: "March 10,2023",
    author: "Smith",
    title: "Tips To Protecting Your Buissness And Family",
    blogDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
  {
    coverImage: Blog3,
    date: "March 19,2023",
    author: "John",
    title: "Protect Your Workplace From Cyber Attacks",
    blogDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
  },
];

export const Services: OurServicesInterface[] = [
  {
    Image: OSI4,
    title: "Automative IoT Solutions",
    Icon: ServicesIcon4,
  },
  {
    Image: OSI5,
    title: "Industrial IoT Solutions",
    Icon: ServicesIcon5,
  },
  {
    Image: OSI1,
    title: "Software IoT Solutions",
    Icon: ServicesIcon1,
  },
  {
    Image: OSI3,
    title: "Smart City IoT Solutions",
    Icon: ServicesIcon3,
  },
  {
    Image: OSI6,
    title: "System on Chip IoT Solutions",
    Icon: ServicesIcon6,
  },
  {
    Image: OSI2,
    title: "Office IoT Solutions",
    Icon: ServicesIcon2,
  },
];