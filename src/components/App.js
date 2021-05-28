import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Section from "./Section/Section";
import Page404 from "./404/404";

function App() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  return (
    <Fragment>
      <Navbar />
      <NavbarMobile />
      {isIE ? (
        <Page404 />
      ) : (
        <Fragment>
          <Header />
          <HeaderPictures />
          <Quize />
          <Section />
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
