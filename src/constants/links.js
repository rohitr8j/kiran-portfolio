import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

// Navbar links
const navbar_links = [
  "home",
  "about",
  "work",
  "skills",
  "testimonial",
  "contact",
];

// Contact links
const contact_links = {
  email: "kiranmeena@gmail.com",
  phone: "+91 XXXXXXXXXX",
};

// Social links
const social_links = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/kiran-meena",
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    url: "https://www.behance.net/kiran-meena",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    url: "https://github.com/kiran-meena",
  },
];

// Source code
const source_code = "https://github.com/sanidhyy/portfolio-react";

// links
const links = {
  navbar_links,
  contact_links,
  social_links,
  source_code,
};

export default links;
