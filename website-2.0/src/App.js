// import React
import React from 'react';
// import router
import { HashRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';
// import pages
import DesktopHome from "./Desktop/pages/Home";
import DesktopAboutMe from "./Desktop/pages/AboutMe";
import DesktopProjects from "./Desktop/pages/Projects";
import DesktopExperience from "./Desktop/pages/Experience";
import DesktopGames from "./Desktop/pages/Games";
// import projects
import Tyes from "./Desktop/projects/Tyes.js";
import ApeUnit from "./Desktop/projects/ApeUnit.js";
import ORM from "./Desktop/projects/ORM.js";
import VIP from "./Desktop/projects/VIP.js";
import THDHackathon from "./Desktop/projects/THDHackathon.js";
import ChaosColleagues from "./Desktop/projects/ChaosColleagues.js";
import ProjectShatter from "./Desktop/projects/ProjectShatter.js";
import SpaceTrader from "./Desktop/projects/SpaceTrader.js";
// import experiences
import HomeDepot from "./Desktop/experiences/HomeDepot.js";
import MealMe from "./Desktop/experiences/MealMe.js";
import DCU from "./Desktop/experiences/DCU.js";
import Cisco from "./Desktop/experiences/Cisco.js";
import LetsGetReady from "./Desktop/experiences/LetsGetReady.js";
import ParksAndRec from "./Desktop/experiences/ParksAndRec.js";
// import stylesheets
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={DesktopHome} />
          <Route path="/AboutMe" exact component={DesktopAboutMe} />
          <Route path="/Projects" exact component={DesktopProjects} />
          <Route path="/Experience" exact component={DesktopExperience} />
          <Route path="/Games" exact component={DesktopGames} />
          {/* Project Pages */}
          <Route path="/Projects/Tyes" exact component={Tyes} />
          <Route path="/Projects/Ape-Unit" exact component={ApeUnit} />
          <Route path="/Projects/Strength-Progress-Tracker" exact component={ORM} />
          <Route path="/Projects/Intelligent-Tutoring-System" exact component={VIP} />
          <Route path="/Projects/Home-Depot-RL-Hackathon" exact component={THDHackathon} />
          <Route path="/Projects/Chaos-Colleagues" exact component={ChaosColleagues} />
          <Route path="/Projects/Project-Shatter" exact component={ProjectShatter} />
          <Route path="/Projects/Space-Trader" exact component={SpaceTrader} />
          {/* Experiences */}
          <Route path="/Experience/Home-Depot" exact component={HomeDepot} />
          <Route path="/Experience/MealMe" exact component={MealMe} />
          <Route path="/Experience/DCU" exact component={DCU} />
          <Route path="/Experience/Cisco-Systems" exact component={Cisco} />
          <Route path="/Experience/Lets-Get-Ready" exact component={LetsGetReady} />
          <Route path="/Experience/Shrewsbury-Parks-And-Rec" exact component={ParksAndRec} />
        </Router>
    </div>
  );
}

export default App;
