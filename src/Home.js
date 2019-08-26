import React, {Component } from 'react';

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
        return (
            <div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                        <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}

export default Home;