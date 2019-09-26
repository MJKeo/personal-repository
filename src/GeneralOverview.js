import React, { Component } from 'react';

class GeneralOverview extends Component {
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
            boxShadow: '1px'
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
              height: '10vh'
          }
          const smallSpacer = {
            height: '6vh'
        }
        return (
            <div>
                <div style={spacer}></div>
                <div class="shadow-lg img-thumbnail" style={overlay}>
                        <div class="container">
                            <h1 class="display-2 text-black text-center"><u>About Me</u></h1>
                            <h4 class="text-left">My name is Michael Keohane, a 2nd year Computer Science major at the Georgia Institute of Technology, with concentrations in Intelligence and Media.</h4>
                            <h1 class="display-2">This page is a work in progress and will be finished soon</h1>
                        </div>
                    </div>
                    <div style={spacer}></div>
            </div>
        )
    }
}

export default GeneralOverview;