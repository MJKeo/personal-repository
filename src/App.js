import React from 'react';
import './App.css';
import BGParticles from './BGParticles';
import Background from './images/bg2.png';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
import AboutMe from './AboutMe'
import Blog from './Blog'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false,
        page: 0
      };
    }
    
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const mainDiv = {
        minHeight: '100vh',
        width: '100%',
        textAlign: 'center',
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
      return (

        <div style={mainDiv}>
          <div>
          <Router>
            <BGParticles />
            <Route path="/" exact component={Home} />
            <Route path="/AboutMe" exact component={AboutMe} />
            <Route path="/Blog" exact component={Blog} />
          </Router>
          </div>
        </div>
      );
  }
}