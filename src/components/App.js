import React from "react";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
import Section from "./Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <Header />
      <HeaderPictures />
      <Quize />
      <Section />
    </div>
  );
}

export default App;
