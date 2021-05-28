import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
import Header from "./Header/Header";
import HeaderPictures from "./Header/HeaderPictures";
import Section from "./Section/Section";
import Page404 from "./404/404";
import Article1 from "./Articles/Article1";
import Article2 from "./Articles/Article2";
import Article3 from "./Articles/Article3";
import Article6 from "./Articles/Article6";
import Article4 from "./Articles/Article4";
import Article5 from "./Articles/Article5";

function App() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  return (
    <Router>
      <Navbar />
      <NavbarMobile />
      {isIE ? (
        <Page404 />
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Header />
              <HeaderPictures />
              <Quize />

              <Section />
            </Route>
            <Route path="/article1">
              <Article1 />
            </Route>
            <Route path="/article2">
              <Article2 />
            </Route>
            <Route path="/article3">
              <Article3 />
            </Route>
            <Route path="/article4">
              <Article4 />
            </Route>
            <Route path="/article5">
              <Article5 />
            </Route>
            <Route exact path="/article6">
              <Article6 />
            </Route>
          </Switch>
        </Fragment>
      )}
    </Router>
  );
}

export default App;
