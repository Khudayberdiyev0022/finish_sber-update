import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Section from "./Section/Section";
import Page404 from "./404/404";

function App() {
  {
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  }
  return (
    <Router>
      <Navbar />
      <NavbarMobile />
      {isIE ? (
        <Page404 />
      ) : (
        <Fragment>
          <Header />
          <HeaderPictures />
          <Switch>
            <Route path="/">
              <Quize />
            </Route>
          </Switch>
          <Section />
        </Fragment>
      )}
    </Router>
  );
}

export default App;
