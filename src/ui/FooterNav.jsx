import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "../utils/helpers";

const StyledFooterNav = styled.nav`
  & ul {
    display: flex;
    gap: 1em;
    color: var(--color-grey-100);
  }

  & li {
    padding: 0.5em;
  }

  & a {
    cursor: pointer;
  }
`;

function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigation(route) {
    if (location.pathname !== route) navigate(route);
    else scrollToTop();
  }

  return (
    <StyledFooterNav>
      <ul>
        <li>
          <a onClick={() => handleNavigation("/")}>Home</a>
        </li>
        <li>
          <a onClick={() => handleNavigation("/about")}>About me</a>
        </li>
        <li>
          <a onClick={() => handleNavigation("/contact")}>Contact</a>
        </li>
        <li>
          <a onClick={() => handleNavigation("/projects")}>Projects</a>
        </li>
      </ul>
    </StyledFooterNav>
  );
}

export default FooterNav;
