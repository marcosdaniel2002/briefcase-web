import styled from "styled-components";

const StyledButtonLink = styled.a`
  border-radius: 10px;
  padding: 0.8em 1.5em;
  display: flex;
  gap: 0.5em;
  align-items: center;
  background-color: var(--color-silver-700);
  color: var(--color-grey-100);
  transition: background-color 0.3s, border 0.3s, gap 0.3s;
  cursor: pointer;
  & svg {
    font-size: 1.7em;
    transition: background-color 0.3s, border 0.3s, rotate 0.3s;
  }

  &:hover {
    gap: 2em;
    svg {
      rotate: 50deg;
    }
  }
`;

function ButtonLink({ children, href }) {
  return (
    <StyledButtonLink href={href} target="_blank" onClick>
      {children}
    </StyledButtonLink>
  );
}

export default ButtonLink;
