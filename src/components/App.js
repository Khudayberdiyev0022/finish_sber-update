import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Section from "./Section/Section";
import Page404 from "./404/404";

function App() {
  return (
    <Router>
      <Navbar />
      <NavbarMobile />
      <Header />
      <HeaderPictures />
      <Switch>
        <Route path="/">
          <Quize />
        </Route>
      </Switch>
      <Section />
      <Page404 />
    </Router>
  );
}

export default App;
