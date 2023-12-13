import styled from "styled-components";

import { FaStarHalfStroke } from "react-icons/fa6";

import ProjectCard from "./ProjectCard";

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

function LatestProjects({ projects }) {
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
