import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  top: 0;
  background-color: white;
`;

const StyledNavLink = styled(NavLink)`
  background-color: yellow;
`;

function ExtendedNav() {
  return (
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
  );
}

export default ExtendedNav;
