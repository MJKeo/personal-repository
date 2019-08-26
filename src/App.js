import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Projects from './Projects';
import Home from './Home';
import Banner from './images/banner2.jpg';

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
        opacity: '0.7'
      };
      const bannerStyle = {
        backgroundImage: "url(" + Banner + ")",
        height: '200px'
      }
      return (
        <Router>
          <div>
            <div style={bannerStyle}>
              <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={navbar}>
                  <h4 class="pl-3 pr-1 float-right display-4 text-white-50 font-weight-bold">Michael Keohane</h4>
                          <ul class="navbar-nav mr-auto">
                                  <form class="form-inline my-2 my-lg-0 p-2">
                                          <h2 class="pl-5 text-white-50"></h2>
                                          <Link class="nav-link" to="/"><h2 class="pl-5 text-white-50">Home</h2></Link>
                                          <Link class="nav-link" to="/projects"><h2 class="pl-5 text-white-50">My Projects</h2></Link>
                                          <a class="nav-link" href="#"><h2 class="pl-5 text-white-50">Weekly Blog</h2></a>
                                  </form>
                          </ul>
                  </nav>
                  <Route path="/" exact component={Home} />
                  <Route path="/Projects" exact component={Projects} />
              </div>
            </div>
          </Router>
      );
  }
}