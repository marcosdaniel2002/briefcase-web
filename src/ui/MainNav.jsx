import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";

import ButtonTheme from "./ButtonTheme";

const Nav = styled.nav`
  display: none;
  font-size: 1.3rem;

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.4rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  font-weight: 600;
  gap: 1em;
  @media (min-width: ${breakpoints.md}) {
    gap: 2em;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 0 1em;

  &.active {
    color: var(--color-grey-900);
    border-bottom: solid 2px var(--color-grey-900);
  }
  &:not(.active) {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      border-bottom: solid 2px var(--color-grey-900);
    }
    &:hover:before {
      animation: border_anim 0.2s linear forwards;
    }

    &:hover {
      color: var(--color-grey-900);
    }

    @keyframes border_anim {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
`;

function MainNav() {
  return (
    <>
      <Nav>
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
        <ButtonTheme size="small" />
      </Nav>
    </>
  );
}

export default MainNav;
