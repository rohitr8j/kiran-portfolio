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
  email: "km.uiuxdesignz@gmail.com",
  phone: "+91 XXXXXXXXXX",
};

// Social links
const social_links = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/kiran-meena-bb3528328",
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    url: "https://www.behance.net/kiranmeena8",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    url: "https://github.com/rohitr8j/kiran-portfolio",
  },
];

// Source code
const source_code = "https://github.com/rohitr8j/kiran-portfolio";

// links
const links = {
  navbar_links,
  contact_links,
  social_links,
  source_code,
};

export default links;
