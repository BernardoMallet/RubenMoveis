import FooterSite from "components/Footer";
import HeaderLogo from "components/Header";
import HeaderTop from "components/HeaderTop";
import ContactContent from "containers/Contact";
import NavBar from "containers/NavBar";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderLogo />
      <NavBar />
      <ContactContent />
      <FooterSite />
    </>
  );
};

export default Index;
