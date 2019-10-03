import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';

class Blog extends Component {
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
          const overlay = {
            position: 'relative',
            background: 'white',
            width: '80%',
            opacity: '0.8',
            left: '10%',
            boxShadow: '1px',
            height: '80vh'
          }
          const navbar = {
            position: 'fixed',
            background: 'white',
            width: '100%',
            left: '0px',
            top: '0px'
        }
          const smallLogo = {
            borderRadius: '50%',
            width: '5.5vh',
          }
          const navText = {
            fontSize: '4vh',
            color: '#1D97C2',
            paddingLeft: '4vw',
            paddingRight: '4vw'
          }
          const centerly = {
            margin: '0',
            float: 'none',
            listStyleType: 'none'
          }
      
          const spacer = {
              height: '16vh'
          }
          const halfway = {
            height: '35vh'
          }
          const smallSpacer = {
            height: '6vh'
          }
        return (
            <div>
                <div style={spacer}></div>
                <div class="shadow-lg img-thumbnail" style={overlay}>
                        <div class="container text-center">
                        <div style={halfway} />
                        <h1>Uh oh, looks like I haven't made my first post yet. I'll begin posting here Sunday October 6th so be sure to check back here then!</h1>
                        </div>
                    </div>
                    <div style={smallSpacer}></div>
                    <nav class="navbar-sticky" style={navbar}>
                        <div class="text-center">
                            <ul style={centerly}>
                                <li>
                                  <Link to="/"><button type="button" class="btn font-weight-bold" style={navText}>Home</button></Link>
                                  <Link to="/"><img class="nav-item" src={Logo} alt=":)" style={smallLogo}/></Link>
                                  <Link to="/AboutMe/"><button type="button" class="btn font-weight-bold" style={navText}>About Me</button></Link>
                                </li>
                            </ul>
                        </div>
                      </nav>
            </div>
        )
    }
}

export default Blog;