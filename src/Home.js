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
        const white = {
            background: 'red',
            height: '100%'
        }
        const child = {
            background: 'green',
            position: 'absolute',
            paddingTop: '10%',
            textAlign: 'center'
        }
        return (
            <div style={white}>
                <div class="container-fluid text-center" style={child}>
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                        <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                        <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
                <div class="container text-center">
                    <h1>Home Page</h1>
                </div>
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