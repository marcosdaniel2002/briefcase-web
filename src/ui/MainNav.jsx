import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import Hamburguer from "./Hamburguer";
import ExtendedNav from "./ExtendendNav";

const NavList = styled.ul`
  display: none;
  gap: 0.8rem;
  background-color: white;

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  background-color: yellow;
`;

function MainNav() {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About me</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </li>
        </NavList>
      </nav>
      <Hamburguer />
      <ExtendedNav />
    </>
  );
}

export default MainNav;
