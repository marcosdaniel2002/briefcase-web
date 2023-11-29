import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";

const StyledCard = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13em;
  height: 13em;

  & .num {
    width: 3em;

    text-align: center;
    font-weight: 700;
    border-bottom: 3px solid var(--color-grey-900);
  }

  & img {
    height: 6em;
    width: 6em;
    object-fit: contain;
    margin: 1em 0;
  }

  & .skill {
    font-weight: 700;
    font-size: 1.1em;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

function SkillCard({ num, src, skill, use }) {
  return (
    <StyledCard>
      <span className="num">{num.toString().padStart(2, "0")}</span>
      <img src={src} />
      <span className="skill">{skill}</span>
      <span className="use">{use}</span>
    </StyledCard>
  );
}

export default SkillCard;
