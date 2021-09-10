import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import Intro from "./Intro";

import "./introduction.css";

const Home = () => {
  return (
    <React.Fragment>
      <Particles />
      <Intro />
    </React.Fragment>
  );
};

export default Home;
