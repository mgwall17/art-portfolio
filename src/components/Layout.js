
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "@mui/material"; 

const Layout = (props) => {
  return (
    <React.Fragment>
      <Nav />
      <Container>{props.children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
