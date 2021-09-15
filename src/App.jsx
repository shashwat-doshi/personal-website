import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";

import Projects from "./components/projects/Projects";

import Home from "./components/intro";

import "./app.scss"
import { useState } from "react";


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuOpen } from "@material-ui/icons";
import ParticlesBg from 'particles-bg';
// import Projects from "./components/projects/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
        <Menu isOpen={menuOpen} setOpen={setMenuOpen} />
        <Switch className="sections">
          <Route path="/" exact component={Home} />
          {/* <Route path="/" exact component={() => <Intro />} /> */}
          {/* <Route path="/portfolio" exact component={() => <Portfolio />} /> */}
          <Route path="/projects" exact component={Projects} />
          <Route path="/works" exact component={() => <Works />} />
          <Route path="/testimonials" exact component={() => <Testimonials />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
      {/* <Footer /> */}

      {/* <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
      <Menu isOpen={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div> */}
    </div>
  );
}

export default App;


// import Topbar from "./components/topbar/Topbar";
// import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio"
// import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
// import Contact from "./components/contact/Contact"
// import "./app.scss"
// import { useState } from "react";
// import Menu from "./components/menu/Menu";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   return (
//     <div className="app">
//       <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
//       <Menu isOpen={menuOpen} isMenuOpen={setMenuOpen} />
//       <div className="sections">
//         <Intro />
//         <Portfolio />
//         <Works />
//         <Testimonials />
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;