import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import BGParticles from './BGParticles';
import Background from './images/bg2.png';

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
        const centerElement = {
            position: 'relative',
            width: '100%'
          }
          const navbar = {
              position: 'fixed',
              background: 'white',
              height: '10vh',
              width: '100vw',
              left: '0px',
              top: '0px'
          }
          const logoStyle = {
            borderRadius: '50%',
            width: '7vh'
          }
          const navText = {
            fontSize: '4vh',
            color: '#1D97C2'
          }
          const navItems = {
              paddingTop: '1vh'
          }
          const overlay = {
            position: 'relative',
            background: 'white',
            minHeight: '10vh',
            width: '80%',
            opacity: '0.8',
            left: '10%',
            boxShadow: '1px'
          }
          const mainDiv = {
            minHeight: '100vh',
            width: '100vw',
            textAlign: 'center',
            backgroundImage: "url(" + Background + ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }
          const spacer = {
              height: '16vh'
          }
          const smallSpacer = {
            height: '6vh'
        }
        return (
            <div class="container-fluid">
                <div style={spacer}></div>
                <div style={overlay}>
                        <div class="container-fluid text-center">
                            <h1>B</h1>
                            <h1>L</h1>
                            <h1>O</h1>
                            <h1>G</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                            <h1>Blog Page</h1>
                        </div>
                    </div>
                    <div style={smallSpacer}></div>
            </div>
        )
    }
}

export default Blog;