import styled from "styled-components";
import { IoMdLink } from "react-icons/io";
import { TiSocialGithub } from "react-icons/ti";
import ButtonLink from "../../ui/ButtonLink";
import IconHover from "../../ui/IconHover";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  max-width: 350px;
  height: 500px;
  border-bottom: 2px solid var(--color-grey-500);
  position: relative;

  & .container-image {
    background-color: var(--color-grey-700);
    overflow: hidden;
    border-radius: 15px;
    height: 200px;
    & img {
      transform: translate(2.3em, 2.3em);
      border-radius: 15px;
      transition: transform 0.6s;
    }

    &:hover {
      img {
        transform: translate(1.8em, 1.8em);
      }
    }
  }

  & .content {
    display: grid;
    gap: 0.5em;
    h4 {
      font-size: 1.2em;
      font-weight: 600;
      margin-bottom: 0.8em;
    }
  }

  & .tecnologies {
    display: flex;
    gap: 1em;
    margin-bottom: 1em;

    svg,
    img {
      width: 2em;
      height: 2em;
    }
  }

  & .buttons {
    display: flex;
    gap: 1em;
  }

  .bottom-content {
    position: absolute;
    bottom: 1.5em;
  }
`;

function ProjectCard({
  imgPath,
  title,
  description,
  tecnologies,
  live,
  github,
}) {
  return (
    <StyledCard>
      <a href={live} target="_blank" rel="noreferrer">
        <div className="container-image">
          <img src={imgPath} alt={title} />
        </div>
      </a>
      <div className="content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="bottom-content">
        <div className="tecnologies">
          {tecnologies.map((x) => (
            <IconHover icon={x.icon} hoverContent={x.name} key={x.name} />
          ))}
        </div>
        <div className="buttons">
          <ButtonLink href={github}>
            Code
            <TiSocialGithub />
          </ButtonLink>
          <ButtonLink href={live}>
            Live
            <IoMdLink />
          </ButtonLink>
        </div>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
