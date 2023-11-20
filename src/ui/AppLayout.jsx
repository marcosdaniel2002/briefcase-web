import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 1.5rem 1.5rem;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
}

export default AppLayout;
