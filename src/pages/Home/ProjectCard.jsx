import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";

const StyledProjectCard = styled.div`
  position: relative;
  cursor: pointer;
  width: 300px;
  height: 150px;
  a {
    border-radius: 0.5em;
  }
  img {
    object-fit: cover;
    border-radius: inherit;
    width: 300px;
    height: 150px;
  }
  .overlay {
    position: absolute;
    top: 0;
    background-color: black;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    color: white;
    display: grid;
    place-items: center;
    opacity: 0.8;
    transition: opacity 0.4s;
  }

  @media (min-width: ${breakpoints.lg}) {
    height: 300px;
    img {
      height: 300px;
    }
  }
`;

function ProjectCard({ path, description, live }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledProjectCard
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={live} target="_blank" rel="noreferrer">
        <img src={path} alt="forkify" />
        <div className={`overlay ${isHover ? "" : "hidden"}`}>
          {description}
        </div>
      </a>
    </StyledProjectCard>
  );
}

export default ProjectCard;
