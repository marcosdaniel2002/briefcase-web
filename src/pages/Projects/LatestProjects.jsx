import styled from "styled-components";
import { FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaStarHalfStroke } from "react-icons/fa6";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/the-wild-oasis2.png",
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
        name: "styled components",
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
    imgPath:
      "https://bljdqguwducancsihmeo.supabase.co/storage/v1/object/public/briefcase-web/Projects/Fast%20React%20Pizza.png",
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
    ],
    live: "https://fast-react-pizza-three.vercel.app/",
    github: "https://github.com/marcosdaniel2002/fast-react-pizza",
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
];

const StyledLatestProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;

  flex-direction: row;
  flex-wrap: wrap;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-bottom: 2em;

  h2 {
    color: var(--color-brand-600);
    font-weight: 700;
  }

  svg {
    font-size: 1.6em;
    color: var(--color-brand-600);
  }
`;

function LatestProjects() {
  return (
    <>
      <Header>
        <h2>Latest Projects</h2>
        <FaStarHalfStroke />
      </Header>
      <StyledLatestProjects>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            tecnologies={project.tecnologies}
            live={project.live}
            github={project.github}
          />
        ))}
      </StyledLatestProjects>
    </>
  );
}

export default LatestProjects;
