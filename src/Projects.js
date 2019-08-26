import React, {Component } from 'react';

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
        return (
            <div class="container text-center">
                <h1>Projects Page</h1>
            </div>
        )
    }
}

export default Projects;