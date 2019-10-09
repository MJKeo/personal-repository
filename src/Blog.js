import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import './blog.css'
import SpyGlass from './images/spyGlass.png';
import db from './config.js';
import BlogDisplay from './BlogDisplay.js';

class Blog extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.pushData = this.pushData.bind(this);
        this.state = {
          isOpen: false,
          data: []
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount() {
        const that = this;
        db.ref('Data/value').once('value').then(function(snapshot) {
          that.setState(() => ({
            data: snapshot.val()
          }))
        });
      }

      pushData() {
        var arr = [["Title1", "Date1", "Overview1", "Content1"], ["Title2", "Date2", "Overview2", "Content2"], ["Title3", "Date3", "Overview3", "Content3"]]
        db.ref("Test").update({
          thing: arr
        })
      }

    render() {
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
          const centerly = {
            margin: '0',
            float: 'none',
            listStyleType: 'none'
          }
          const line = {
            width: '20vw',
            marginLeft: '40px',
            height: '0.5px',
            backgroundColor: 'gray'
          }
          const border = {
            border: 'solid'
          }
      
          const spacer = {
              height: '10vh',
          }
          const lineSpacer = {
            height: '15px'
          }
          console.log(this.state.data)

          var posts = null;
          posts = this.state.data.map((element, i) => (
            <BlogDisplay key={i} title={element[0]} date={element[1]} overview={element[2]} content={element[3]} />
          ))
        return (
            <div>
                <div class="mx-auto main-box">
                  <div style={spacer}></div>
                  <div class="title-box mx-auto">
                    <h1 class="title sans-serif">Welcome to My Blog!</h1>
                    <h3>This is where I post my (hopefully) weekly blog going over what's happened in the past week, click any of the posts below to check them out.</h3>
                  </div>
                  <div class="search-box">
                      <img src={SpyGlass} class="spy-icon" />
                      <input class="form-control search-bar" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                  <div style={lineSpacer} />
                  <hr style={line}/>
                  <div>
                    {posts}
                    <div style={spacer} />
                  </div>
                </div>
                    <nav class="navbar-sticky shadow" style={navbar}>
                        <div class="text-center">
                            <ul style={centerly}>
                                <li>
                                  <Link to="/"><button type="button" class="btn item font-weight-bold">Home</button></Link>
                                  <Link to="/"><img class="nav-item" src={Logo} alt=":)" style={smallLogo}/></Link>
                                  <Link to="/AboutMe/"><button type="button" class="btn item font-weight-bold">About Me</button></Link>
                                </li>
                            </ul>
                        </div>
                      </nav>
            </div>
        )
    }
}

export default Blog;