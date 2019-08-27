import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';

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
            position: 'absolute',
            width: '100%',
            top: '45%',
            left: '1%',
            transform: 'translate(0, -40%)',
          }
          const navbar = {
              position: 'absolute',
              background: 'white',
              height: '10vh',
              width: '100vw',
              left: '0px'
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
            position: 'absolute',
            background: 'white',
            height: '100%',
            width: '90%',
            opacity: '0.8',
            left: '5%'
          }
        return (
            <div class="container-fluid">
                <div style={overlay}>
                        <div class="container-fluid text-center" style={centerElement}>
                            <h1>Blog Page</h1>
                        </div>
                    </div>
                <nav class="navbar-sticky" style={navbar}>
                    <div class="mr-auto">
                        <form class="form-inline pl-2" style={navItems}>
                            <Link class="nav-link" to="/"><img class="nav-item" src={Logo} alt=":)" style={logoStyle}/></Link>
                            <Link class="nav-link" to="/"><h2 class="pl-5" style={navText}>Home</h2></Link>
                            <Link class="nav-link" to="/About Me"><h2 class="pl-5" style={navText}>About Me</h2></Link>
                            <Link class="nav-link" to="/Projects"><h2 class="pl-5" style={navText}>Projects</h2></Link>
                            <a class="nav-link" href="#"><h2 class="pl-5" style={navText}>Blog</h2></a>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Blog;