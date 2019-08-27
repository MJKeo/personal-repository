import React, {Component } from 'react';
import Banner from './images/banner5.png';

class Projects extends Component {
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
        const white = {
            backgroundImage: "url(" + Banner + ")",
            height: '100vh'
        }
        return (
            <div class="container-fluid text-center" style={white}>
                <h1>Projects Page</h1>
            </div>
        )
    }
}

export default Projects;