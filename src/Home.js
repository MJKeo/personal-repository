import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };

        this.checkInterval = this.checkInterval.bind(this);
        this.checkInterval2 = this.checkInterval2.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      checkInterval() {
        var thing = this.refs.option1;
        thing.classList.remove("static-option-style");
        thing.classList.add("option-style");
      }

      checkInterval2() {
        var thing = this.refs.option2;
        thing.classList.remove("static-option-style");
        thing.classList.add("option-style")
      }
    render() {
          const centerElement = {
            position: 'absolute',
            width: '80%',
            top: '45%',
            left: '10%',
            transform: 'translate(0, -40%)'
          }
          const welcomeText = {
            opacity: '0.8',
            fontSize: '8vh'
          }
          const optionStyle = {
            fontSize: '6vh',
            color: 'white',
            opacity: '0.75'
          }
          const logoStyle = {
            borderRadius: '50%',
            width: '30vh'
          }
        const welcomeSpacer = {
          width: '5vw'
        }
        return (
          <div>
                <div style={centerElement}>
                <img class="nav-item img-thumbnail shadow-lg" src={Logo} alt=":)" style={logoStyle}/>
                  <h1 class="display-1 font-weight-bolder" style={welcomeText}>Welcome to My Personal Website!</h1>
                  <div>
                      <Link to="/AboutMe"><button ref="option1" type="button" class="static-option-style btn" onMouseOver={() => this.checkInterval()}>About Me</button></Link>
                      <Link to="/Blog"><button ref="option2" type="button" class="btn static-option-style" onMouseOver={() => this.checkInterval2()}>Blog</button></Link>
                  </div>
                </div>
        </div> 
        )
    }
}

export default Home;