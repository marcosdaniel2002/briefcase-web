import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooterNav = styled.nav`
  & ul {
    display: flex;
    gap: 1em;
    color: var(--color-grey-100);
  }

  & li {
    padding: 0.5em;
  }
`;

function FooterNav() {
  return (
    <StyledFooterNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </StyledFooterNav>
  );
}

export default FooterNav;
