import React, { Component } from 'react';
import Logo from '../images/AppSupportLogo.png';
import How from './HowItWorksPhone.js'
import Contact from './ContactPhone.js';
import './PhoneStyles.css';

class AppSupportPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
        // variables
        this.status = 0;
        // methods
        this.switchToWorks = this.switchToWorks.bind(this);
        this.switchToBreakdown = this.switchToBreakdown.bind(this);
      }

    switchToWorks() {
          this.refs.howAppWorksBtn.classList.add("button-selected");
          this.refs.breakdownBtn.classList.remove("button-selected");
          this.status = 0;

          this.setState({}) // force refresh
    }

    switchToBreakdown() {
        this.refs.howAppWorksBtn.classList.remove("button-selected");
        this.refs.breakdownBtn.classList.add("button-selected");
        this.status = 1;

        this.setState({}) // force refresh
  }

    render() {
        var toRender = <How />
        if (this.status == 1) {
            toRender = <h1>Two</h1>
        }

        return (
            <div>
                <div class="main-bg">
                {/* LOGO HERE */}
                <img class="logo" src={Logo} alt="Logo"></img>
                <div class="small-spacer"></div>
                {/* Put title here? */}
                <h1 class="main-title">ORM: Strength Progress Tracker Support Page</h1>
                <div class="spacer"></div>
                {/* Here's where we put the navigation buttons */}
                <div class="flex-row flex-even">
                    <h1 ref="howAppWorksBtn" class="button button-selected" onClick={this.switchToWorks}>How the App Works</h1>
                    <h1 ref="breakdownBtn" class="button" onClick={this.switchToBreakdown}>Individual Screen Breakdown</h1>
                </div>
                {/* Main Content */}
                {toRender}
                <div class="spacer"></div>
                <div class="spacer"></div>
                </div> 
                {/* Put Contact info here */}
                <Contact />
            </div>
        )
    }
}

export default AppSupportPhone;