import FooterSite from "components/Footer";
import HeaderLogo from "components/Header";
import HeaderTop from "components/HeaderTop";
import WhatsAppPopup from "components/WhatsAppContact";
import AboutUs from "containers/AboutUs";
import NavBar from "containers/NavBar";
import { Avatar } from "material-ui";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderLogo />
      <NavBar />
      <WhatsAppPopup/>
      <AboutUs />
      <FooterSite />
    </>
  );
};

export default Index;
