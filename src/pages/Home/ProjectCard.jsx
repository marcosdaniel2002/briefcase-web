import { useState } from "react";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 1em;
  cursor: pointer;
  img {
    object-fit: cover;
    border-radius: inherit;
  }
  .overlay {
    position: absolute;
    top: 0;
    background-color: black;
    height: 100%;
    border-radius: inherit;
    color: white;
    display: grid;
    place-items: center;
    opacity: 0.8;
    transition: opacity 0.4s;
  }
`;

function ProjectCard({ path }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledProjectCard
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={path} alt="forkify" />
      <div className={`overlay ${isHover ? "" : "hidden"}`}>
        Manage rent of cabins, create account, and more.
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
