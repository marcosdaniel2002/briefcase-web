import styled from "styled-components";
import MoreProjects from "./MoreProjects";
import LatestProjects from "./LatestProjects";

const StyledProjects = styled.div`
  padding: 2em 7%;
`;

function Projects() {
  return (
    <StyledProjects>
      <LatestProjects />
      <MoreProjects />
    </StyledProjects>
  );
}

export default Projects;
