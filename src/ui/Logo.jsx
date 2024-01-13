import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledLogo = styled.div`
  transition: scale 0.2s;
  & svg {
    width: 2.5em;
    height: 2.5em;
    color: var(--color-grey-800);
    transition: all 0.3s;
  }
  &:hover {
    scale: 1.1;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <a
        href="https://github.com/marcosdaniel2002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </StyledLogo>
  );
}

export default Logo;
