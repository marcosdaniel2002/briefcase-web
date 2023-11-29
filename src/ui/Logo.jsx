import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledLogo = styled.div`
  & svg {
    width: 2.5em;
    height: 2.5em;
    color: var(--color-grey-800);
    transition: all 0.3s;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <FaGithub />
    </StyledLogo>
  );
}

export default Logo;
