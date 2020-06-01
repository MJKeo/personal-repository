import React, { Component } from 'react';
import Logo from '../images/AppSupportLogo.png';
import How from "./HowItWorks.js";
import Breakdown from "./PageBreakdown.js";
import Contact from './Contact.js';
import './AppSupportStyles.css';

class AppSupportDesktop extends Component {
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
          this.refs.howAppWorksBtn.classList.add("button-selectedd");
          this.refs.breakdownBtn.classList.remove("button-selectedd");
          this.status = 0;

          this.setState({}) // force refresh
    }

    switchToBreakdown() {
        this.refs.howAppWorksBtn.classList.remove("button-selectedd");
        this.refs.breakdownBtn.classList.add("button-selectedd");
        this.status = 1;

        this.setState({}) // force refresh
  }

    render() {
        var toRender = <How />
        if (this.status == 1) {
            toRender = <Breakdown />
        }

        return (
            <div>
                <div class="main-bgd">
                {/* LOGO HERE */}
                <img class="logod" src={Logo} alt="Logo"></img>
                <div class="small-spacerd"></div>
                {/* Put title here? */}
                <h1 class="main-titled">ORM: Strength Progress Tracker Support Page</h1>
                <div class="spacerd"></div>
                {/* Here's where we put the navigation buttons */}
                    <div class="flex-rowd flex-evend">
                        <h1 ref="howAppWorksBtn" class="buttond button-selectedd" onClick={this.switchToWorks}>How the App Works</h1>
                        <h1 ref="breakdownBtn" class="buttond" onClick={this.switchToBreakdown}>Individual Screen Breakdown</h1>
                    </div>
                {/* Main Content */}
                {toRender}
                <div class="spacerd"></div>
                <div class="spacerd"></div>
                </div> 
                {/* Put Contact info here */}
                <Contact />
            </div>
        )
    }
}

export default AppSupportDesktop;