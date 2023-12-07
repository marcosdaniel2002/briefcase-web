import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";

import MainNav from "./MainNav";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer";

const StyledHeader = styled.header`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 70px;
  justify-content: space-between;
  background-color: var(--color-grey-100);
  position: relative;
  z-index: 500;

  @media (min-width: ${breakpoints.sm}) {
    padding: 3em 2em;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.3em;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
      <Hamburguer />
    </StyledHeader>
  );
}

export default Header;
