import React from "react";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <Header />
      <HeaderPictures />
      <Quize />
    </div>
  );
}

export default App;
