import { GoArrowUpRight } from "react-icons/go";
import IconHover from "../../ui/IconHover";
import styled from "styled-components";
import { useState } from "react";
import ButtonLink from "../../ui/ButtonLink";
import { TiSocialGithub } from "react-icons/ti";

const StyledCard = styled.div`
  position: relative;
  border: 2px solid var(--color-grey-300);
  border-radius: 1em;
  padding: 1em 2em;
  max-width: 350px;
  a {
    display: flex;
    flex-direction: column;
    gap: 0.6em;
  }
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s, transform 0.3s;
  .title {
    font-weight: 600;
    color: var(--color-grey-700);
  }

  .description {
    color: var(--color-grey-500);
  }
  .tecnologies {
    display: flex;
    gap: 0.7em;
    svg,
    img {
      width: 1.8em;
      height: 1.8em;
    }
  }
  .arrow-up {
    position: absolute;
    right: 1em;
    top: 1em;
    svg {
      width: 1.2em;
      height: 1.2em;
    }
  }
  .buttons {
    display: flex;
  }
  &:hover {
    box-shadow: var(--shadow-sm);
    transform: translateY(-3px);
  }
`;

function ProjectCardV2({ title, description, tecnologies, live, github }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={live} target="_blank" rel="noreferrer">
        <span className="title">{title}</span>
        <p className="description">{description}</p>
        <div className="tecnologies">
          {tecnologies.map((x) => (
            <IconHover icon={x.icon} hoverContent={x.name} key={x.name} />
          ))}
        </div>
        <div className={`arrow-up ${isHover ? "" : "hidden"}`}>
          <GoArrowUpRight />
        </div>
        <div className="buttons">
          <ButtonLink href={github}>
            <TiSocialGithub />
          </ButtonLink>
        </div>
      </a>
    </StyledCard>
  );
}

export default ProjectCardV2;
