import { useState } from "react";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  cursor: pointer;
  a {
    border-radius: 0.5em;
  }
  img {
    object-fit: cover;
    border-radius: inherit;
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
