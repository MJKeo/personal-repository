import React from 'react';
import './App.css';
import Banner from './images/banner2.jpg';
import BGParticles from './BGParticles';
import Background from './images/bg2.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Logo from './images/logo.jpg';
import Route from 'react-router-dom/Route';
import Home from './Home';
import Projects from './Projects'
import AboutMe from './AboutMe'
import Blog from './Blog'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false,
        page: 0
      };
    }
    
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    updateState(num) {
      this.setState(prevState => ({
        page: num
      }))
      console.log('I was triggered during componentDidMount')
    }

    render() {
      const mainDiv = {
        minHeight: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
      const centerElement = {
        position: 'absolute',
        width: '100%',
        top: '45%',
        left: '0%',
        transform: 'translate(0, -40%)',
      }
      const translucent = {
        opacity: '0.8'
      }
      const optionStyle = {
        position: 'relative',
        fontSize: '7vh',
        color: 'white',
        margin: '5px',
        opacity: '0.75'
      }
      const logoStyle = {
        borderRadius: '50%',
        width: '30vh'
      }
      const navbar = {
        position: 'fixed',
        background: 'white',
        height: '10vh',
        width: '100vw',
        left: '0px',
        top: '0px'
    }
    const logoStyle2 = {
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

      let page;
      let navigation;

      if (this.state.page == 0) {
        navigation = (<div>
                <div style={centerElement}>
                  <img class="nav-item" src={Logo} alt=":)" style={logoStyle}/>
                  <h1 class="display-1 font-weight-bolder" style={translucent}>Welcome to My Personal Website!</h1>
                  <div>
                      <button type="button" class="btn" style={optionStyle} onClick={() => this.updateState(1)}>About Me</button>
                      <button type="button" class="btn" style={optionStyle} onClick={() => this.updateState(2)}>Projects</button>
                      <button type="button" class="btn" style={optionStyle} onClick={() => this.updateState(3)}>Blog</button>
                  </div>
                </div>
        </div>   )
      } else if (this.state.page > 0) {
        navigation = (<nav class="navbar-sticky" style={navbar}>
                        <div class="mr-auto">
                          <form class="form-inline pl-2" style={navItems}>
                              <img class="nav-item" class="pl-1" src={Logo} alt=":)" style={logoStyle2}/>
                              <button type="button" class="pl-5 btn font-weight-bold" style={navText} onClick={() => this.updateState(0)}>Home</button>
                              <button type="button" class="pl-5 btn font-weight-bold" style={navText} onClick={() => this.updateState(1)}>About Me</button>
                              <button type="button" class="pl-5 btn font-weight-bold" style={navText} onClick={() => this.updateState(2)}>Projects</button>
                              <button type="button" class="pl-5 btn font-weight-bold" style={navText} onClick={() => this.updateState(3)}>Blog</button>
                          </form>
                        </div>
                      </nav>)
      }

      if (this.state.page == 0) {
        page = (<div></div>)
      } else if (this.state.page == 1) {
        page = <AboutMe />
      } else if (this.state.page == 2) {
        page = <Projects />
      } else if (this.state.page == 3) {
        page = <Blog />
      }
      return (

        <div style={mainDiv}>
          <div>
          <Router>
            <BGParticles />
            {navigation}
            {page}
            {/* <Route path="/" exact component={Home} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/AboutMe" exact component={AboutMe} />
            <Route path="/Blog" exact component={Blog} /> */}
          </Router>
          </div>
        </div>
      );
  }
}