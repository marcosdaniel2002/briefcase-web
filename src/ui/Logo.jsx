import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledLogo = styled.div`
  & svg {
    width: 4rem;
    height: 4rem;
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
