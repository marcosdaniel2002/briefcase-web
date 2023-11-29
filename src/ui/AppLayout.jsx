import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import ExtendedNav from "./ExtendendNav";
import { ExtendNavbarProvider } from "../context/ExtendNavbarContext";
import Footer from "./Footer";

const StyledLayout = styled.div``;

function AppLayout() {
  return (
    <StyledLayout>
      <ExtendNavbarProvider>
        <Header />
        <ExtendedNav />
      </ExtendNavbarProvider>

      <Outlet />
      <Footer />
    </StyledLayout>
  );
}

export default AppLayout;
