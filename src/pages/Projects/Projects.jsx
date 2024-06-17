import styled from "styled-components";
import MoreProjects from "./MoreProjects";
import LatestProjects from "./LatestProjects";

import { FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const projects = [
  {
    imgPath: "./Projects images/Reddit-clone.png",
    title: "Reddit Clone",
    description:
      "Just trying to replicate reddit web page. user: marcosdanny14@gmail.com password: test1234",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "Node JS",
        icon: <FaNodeJs color="#70A36B" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb color="#70A36B" />,
      },
      {
        name: "Express",
        icon: <img src="./Expressjs.png" alt="Express js png" />,
      },
    ],
    live: "https://reddit-frontend.vercel.app/",
    github: "https://github.com/marcosdaniel2002/reddit-frontend",
  },
  {
    imgPath: "./Projects images/Natours.png",
    title: "Natours",
    description:
      "What are you waiting for? user: marcosdanny14@gmail.com password: test1234",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "Node JS",
        icon: <FaNodeJs color="#70A36B" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb color="#70A36B" />,
      },
      {
        name: "Express",
        icon: <img src="./Expressjs.png" alt="Express js png" />,
      },
    ],
    live: "https://natours-k5xw.onrender.com/",
    github: "https://github.com/marcosdaniel2002/natours",
  },
  {
    imgPath: "./Projects images/O soundz.png",
    title: "O Soundz",
    description: "Now can you find your favorite songs on Spotify API!",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "React JS",
        icon: <FaReact color="#76e2f8" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#16BECB" />,
      },
      {
        name: "React router",
        icon: <img src="./react-router.svg" alt="react router svg" />,
      },
    ],
    live: "https://o-soundz.vercel.app/",
    github: "https://github.com/marcosdaniel2002/O-soundz",
  },
  {
    imgPath: "./Projects images/the-wild-oasis2.png",
    title: "The Wild Oasis",
    description:
      "Manage rent of cabins, create account, and more.\nemail: mteranc@unemi.edu.ec password: 123456789",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "React JS",
        icon: <FaReact color="#76e2f8" />,
      },
      {
        name: "Styled components",
        icon: <SiStyledcomponents />,
      },
      {
        name: "React router",
        icon: <img src="./react-router.svg" alt="react router svg" />,
      },
      {
        name: "Supabase",
        icon: <RiSupabaseFill color="#3ECF8E" />,
      },
    ],
    live: "https://the-wild-oasis-hwbjugv4r-marcos-daniels-projects.vercel.app",
    github: "https://github.com/marcosdaniel2002/the-wild-oasis",
  },
  {
    imgPath: "./Projects images/Fast React Pizza.png",
    title: "Fast React Pizza",
    description: "Order a pizza and we gonna prepare it!",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "React JS",
        icon: <FaReact color="#76e2f8" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#16BECB" />,
      },
      {
        name: "React router",
        icon: <img src="./react-router.svg" alt="react router svg" />,
      },
      {
        name: "Redux",
        icon: <img src="./Redux-icon.png" alt="react redux svg" />,
      },
    ],
    live: "https://fast-react-pizza-three.vercel.app/",
    github: "https://github.com/marcosdaniel2002/fast-react-pizza",
  },
  {
    imgPath: "./Projects images/use-Popcorn.png",
    title: "usePopCorn",
    description: "Find your favorite movies on this api!",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "React JS",
        icon: <FaReact color="#76e2f8" />,
      },
      {
        name: "Sass",
        icon: <FaSass color="#CF6C9C" />,
      },
    ],
    live: "https://use-popcorn-1o8w85fuc-marcos-daniels-projects.vercel.app",
    github: "https://github.com/marcosdaniel2002/usePopcorn",
  },
  {
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/PokeAPI.png",
    title: "Poke API",
    description: "Show pokemons filtered by generations, and them evolutions.",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "Sass",
        icon: <FaSass color="#CF6C9C" />,
      },
    ],
    live: "https://marcosdanielpokeapi.netlify.app/",
    github: "https://github.com/marcosdaniel2002/pokeapi",
  },
  {
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/Forkify.png",
    title: "Forkify",
    description:
      "An menu of pizzas, you can search your favorite pizza and prepare it!",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "Sass",
        icon: <FaSass color="#CF6C9C" />,
      },
    ],
    live: "https://cool-sprite-a05710.netlify.app/",
    github: "https://github.com/marcosdaniel2002/forkify-course",
  },
  {
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/Bankist.png",
    title: "Bankist App",
    description: "A simpler banking experience for a simpler life.",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt color="#329DD2" />,
      },
    ],
    live: "https://bankist-puce.vercel.app/",
    github: "https://github.com/marcosdaniel2002/Bankist",
  },
  {
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/world-wise.png",
    title: "World Wise",
    description: "How many countries have you traveled 👀?",
    tecnologies: [
      {
        name: "Javascript",
        icon: <IoLogoJavascript color="#F7E025" />,
      },
      {
        name: "React JS",
        icon: <FaReact color="#76e2f8" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt color="#329DD2" />,
      },
      {
        name: "React router",
        icon: <img src="./react-router.svg" alt="react router svg" />,
      },
    ],
    live: "https://world-wise-mu.vercel.app/",
    github: "https://github.com/marcosdaniel2002/world-wise",
  },
];

const NUMBER_LATEST_PROJECTS = 4;

const StyledProjects = styled.div`
  padding: 2em 7%;
`;

function Projects() {
  return (
    <StyledProjects>
      <LatestProjects projects={projects.slice(0, NUMBER_LATEST_PROJECTS)} />
      <MoreProjects projects={projects.slice(NUMBER_LATEST_PROJECTS)} />
    </StyledProjects>
  );
}

export default Projects;
