import React from 'react';
import './App.css';
import "materialize-css";
import "devicon"
// import myNavbar from "./components/SideNavBar"
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Icon, Footer } from 'react-materialize';

function App() {
  return (
    <Router
      basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar
          style={{ backgroundColor: "#21272c" }}
          alignLinks="right"
          brand={<a className="brand-logo" href="/">
            RDS
          </a>}
          centerChildren
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <Link to="/">About Us</Link>
          <Link to="/Portfolio">Portfolio</Link>
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}
          <Link to="/Contact">Contact</Link>
        </Navbar>

        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>

        <Footer
          copyrights="© 2020 Rogers Development Services"
        >
        </Footer>

      </div>
    </Router>
  );
}

export default App;
