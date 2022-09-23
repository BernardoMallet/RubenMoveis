import HeaderLogo from "components/Header";
import HeaderTop from "components/HeaderTop";
import NavBar from "containers/NavBar";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderLogo />
      <NavBar />
      <h1>Contato</h1>
    </>
  );
};

export default Index;
