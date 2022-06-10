import React from "react";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Home_page from "./Home_page";
import Contact_page from "./Contact_page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Portfolio_page() {
  return (
    <div className="Portfolio_page">
      <Router>
        <Nav>
          <Switch>
            <Route path="/portfolio" exact component={Portfolio_page} />
            <Route path="/" exact component={Home_page} />
            <Route path="/contact" exact component={Contact_page} />
          </Switch>
        </Nav>
        <Portfolio />
        <Footer />
      </Router>
    </div>
  );
}

export default Portfolio_page;
