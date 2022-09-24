import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Pages>{children}</Pages>
    </Container>
  );
};

const Container = styled.div``;
const Pages = styled.div``;

export default Layout;
