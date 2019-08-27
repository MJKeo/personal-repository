import React, {Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';

class Main extends Component {
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
        const centerElement = {
            position: 'absolute',
            width: '100%',
            top: '45%',
            left: '1%',
            transform: 'translate(0, -40%)',
          }
          const translucent = {
            opacity: '0.8'
          }
          const buttonStyle = {
            position: 'relative',
            fontSize: '4vh',
            color: 'white',
            margin: '5px',
          }
        return (
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
        </Router>
        )
    }
}

export default Home;