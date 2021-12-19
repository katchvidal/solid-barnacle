import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header/Header";

export default function BasicLayout({ children }) {
  return (
    <>
      <Header />
      <Container className="layout-basic" fuild>
        {children}
      </Container>
    </>
  );
}
