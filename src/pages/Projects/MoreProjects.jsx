import styled from "styled-components";
import ProjectCardV2 from "./ProjectCardV2";

const StyledMoreProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 3em 0;
  margin-top: 10em;
  section {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
`;

const Header = styled.header`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 2em;

  h2 {
    color: var(--color-brand-600);
  }
  span {
    border-bottom: 2px solid var(--color-brand-600);
    flex-grow: 1;
  }
`;

function MoreProjects({ projects }) {
  return (
    <>
      <StyledMoreProjects>
        <Header>
          <h2>More projects</h2>
          <span></span>
        </Header>
        <section>
          {projects.map((project, i) => (
            <ProjectCardV2
              key={i}
              title={project.title}
              description={project.description}
              tecnologies={project.tecnologies}
              live={project.live}
              github={project.github}
            />
          ))}
        </section>
      </StyledMoreProjects>
    </>
  );
}

export default MoreProjects;
