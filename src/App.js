import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Projects from './Projects';
import Home from './Home';
import Banner from './images/banner2.jpg';
import BGParticles from './BGParticles';
import Background from './images/bg2.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
      };
    }
    
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      const navbar = {
        background: 'black',
        opacity: '0.5'
      };
      const bannerStyle = {
        backgroundImage: "url(" + Banner + ")"
      }
      const spacer = {
        height: '100px'
      }
      const mainDiv = {
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundImage: "url(" + Background + ")",
        backgroundSize: '100vw'
      }
      const centerElement = {
        position: 'absolute',
        width: '100%',
        top: '40%',
        transform: 'translate(0, -40%)',
        opacity: '0.8'
      }
      return (
        // <Router>
        //   <div style={mainDiv}>
        //     <div style={bannerStyle}>
        //       <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={navbar}>
        //           <h4 class="pl-3 pr-1 float-right display-4 text-white-50 font-weight-bold">Michael Keohane</h4>
        //                   <ul class="navbar-nav mr-auto">
        //                           <form class="form-inline my-2 my-lg-0 p-2">
        //                                   <h2 class="pl-5 text-white-50"></h2>
        //                                   <Link class="nav-link" to="/"><h2 class="pl-5 text-white-50">Home</h2></Link>
        //                                   <Link class="nav-link" to="/projects"><h2 class="pl-5 text-white-50">My Projects</h2></Link>
        //                                   <a class="nav-link" href="#"><h2 class="pl-5 text-white-50">Weekly Blog</h2></a>
        //                           </form>
        //                   </ul>
        //           </nav>
        //           <div style={spacer}></div>
        //           <Route path="/" exact component={Home} />
        //           <Route path="/Projects" exact component={Projects} />
        //       </div>
        //     </div>
        //   </Router>

        <div style={mainDiv}>
          <div style={centerElement}>
            <h1 class="display-1 font-weight-bold">Michael Keohane</h1>
            <h1>Welcome</h1>
          </div>
          <BGParticles />
        </div>
      );
  }
}