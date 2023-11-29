import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { useExtendNavbar } from "../context/ExtendNavbarContext";
import ButtonTheme from "./ButtonTheme";

const Nav = styled.nav`
  position: fixed;
  z-index: 400;
  background-color: var(--color-grey-100);
  height: calc(100vh - 70px);
  width: 100%;
  transition: background-color 0.3s, border 0.3s, top 0.5s;
  left: 0;
  top: -700px;

  &.active {
    top: 70px;
  }

  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & li {
    padding: 2rem;
    border-top: var(--color-grey-200) solid 1px;
  }
`;

const StyledNavLink = styled(NavLink)``;

function ExtendedNav() {
  const { isExtend } = useExtendNavbar();

  return (
    <Nav className={isExtend ? "active" : ""}>
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
          <StyledNavLink to="/projects">Project</StyledNavLink>
        </li>
        <li>
          <ButtonTheme>Switch to</ButtonTheme>
        </li>
      </NavList>
    </Nav>
  );
}

export default ExtendedNav;
