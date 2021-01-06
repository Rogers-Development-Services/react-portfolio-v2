import React from 'react';
import './App.css';
import "materialize-css";
import "devicon"
// import myNavbar from "./components/SideNavBar"
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, NavItem, Icon, Footer } from 'react-materialize';

function App() {
  return (
    <Router
      basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="/">
            <img
              id="navbar-img"
              className="responsive-img"
              src="https://user-images.githubusercontent.com/38272211/99867457-77214c80-2b6e-11eb-8c5b-4ba73f7c4c8a.png" 
              alt="Rogers-Development-Services-Logo"
            >
            </img>
          </a>}

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
          <NavItem><Link to="/">About Us</Link></NavItem>
          <NavItem><Link to="/Portfolio">Portfolio</Link></NavItem>
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}
          <NavItem><Link to="/Contact">Contact</Link></NavItem>
        </Navbar>

        {/* What is the difference between exact path and switch/Router and just Router? */}

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
