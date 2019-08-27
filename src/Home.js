import React, {Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Logo from './images/logo.jpg';

class Home extends Component {
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
            left: '0%',
            transform: 'translate(0, -40%)',
          }
          const translucent = {
            opacity: '0.8'
          }
          const optionStyle = {
            position: 'relative',
            fontSize: '7vh',
            color: 'white',
            margin: '5px',
            opacity: '0.75'
          }
          const logoStyle = {
            borderRadius: '50%',
            width: '30vh'
          }
        return (
          <div>
            <div style={centerElement}>
              <img class="nav-item" src={Logo} alt=":)" style={logoStyle}/>
              <h1 class="display-1 font-weight-bolder" style={translucent}>Welcome to My Personal Website!</h1>
              <div>
                  <Link to="/AboutMe"><button type="button" class="btn" style={optionStyle}>About Me</button></Link>
                  <Link to="/Projects"><button type="button" class="btn" style={optionStyle}>Projects</button></Link>
                  <Link to="/Blog"><button type="button" class="btn" style={optionStyle}>Blog</button></Link>
              </div>
            </div>
          </div>   
        )
    }
}

export default Home;