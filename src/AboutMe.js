import React, {Component } from 'react';

class AboutMe extends Component {
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
        return (
            <div class="container-fluid text-center" style={centerElement}>
                <h1>About Me Page</h1>
            </div>
        )
    }
}

export default AboutMe;