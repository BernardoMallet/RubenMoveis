import FooterSite from "components/Footer";
import HeaderLogo from "components/Header";
import HeaderTop from "components/HeaderTop";
import WhatsAppPopup from "components/WhatsAppContact";
import NavBar from "containers/NavBar";
import AccordionProducts from "containers/Products/Accordion";
import { NextPage } from "next";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderLogo />
      <NavBar />
      <WhatsAppPopup/>
      <AccordionProducts />
      <FooterSite />
    </>
  );
};

export default Index;
