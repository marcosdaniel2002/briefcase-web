import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ExtendNavbarProvider } from "../context/ExtendNavbarContext";

import Header from "./Header";
import ExtendedNav from "./ExtendendNav";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";

const StyledLayout = styled.div``;

function AppLayout() {
  return (
    <StyledLayout>
      <ScrollToTop />
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
