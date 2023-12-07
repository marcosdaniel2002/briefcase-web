import styled from "styled-components";

const StyledIconHover = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  & span {
    opacity: 0;
    position: absolute;
    padding: 0.2em;
    /* top: -30%;
    left: 50%;
    transform: translate(-50%, -50%); */
    font-size: 0.8em;
    width: max-content;
    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    transition: transform 0.3s, opacity 0.3s;
  }

  &:hover {
    span {
      transform: translateY(-2em);
      opacity: 1;
    }
  }
`;

function IconHover({ icon, hoverContent }) {
  return (
    <StyledIconHover>
      <span>{hoverContent}</span>
      {icon}
    </StyledIconHover>
  );
}

export default IconHover;
