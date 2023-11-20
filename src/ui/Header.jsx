import styled from "styled-components";
import MainNav from "./MainNav";

import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: red;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
