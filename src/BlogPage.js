import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import Arrow from './images/backArrow.png';
import db from './config';
import './blog.css'

class BlogDisplay extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.refreshContent = this.refreshContent.bind(this);

        this.state = {
            isOpen: false,
            data: [],
            interval: null,
            counter: 0
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    componentWillMount() {
        const that = this
        db.ref('Current/val').once("value").then(function(snapshot) {
            that.setState(() => ({
                data: snapshot.val()
            }))
        })
        //this.refs.content.innerHTML = this.state.data[2]
        console.log(this.refs)
        this.setState({ 
            interval: setInterval(this.refreshContent, 100)
        })
    }

    refreshContent() {
        this.setState({
            counter: this.state.counter + 1
        })
        if (this.state.data[2] != undefined) {
            this.refs.content.innerHTML = this.state.data[2]
            clearInterval(this.state.interval)
        } else {
            this.refs.content.innerHTML = "loading"
        }
    }
  render() {
    const bg = {
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, #ffffff, #f0eff8, #e0e0f1, #E0E1E3, #E0E1E3)'
      }
      const mainDiv = {
          minHeight: '100vh',
          width: '90vw',
          marginLeft: '5vw',
          background: 'white',
          paddingLeft: '2vw',
          paddingRight: '2vw'
      }
      const dateStyle = {
          fontSize: '2vw',
          fontFamily: 'Times New Roman, serif'
      }
      const spacer = {
          height: '5.5vw'
      }
      const navbar = {
        position: 'fixed',
        background: 'radial-gradient(circle, #4057ab, #364b9b, #2d408b, #23357c, #182a6d)',
        width: '100%',
        left: '0px',
        top: '0px'
        }
      const smallLogo = {
            borderRadius: '50%',
            border: 'white',
            width: '3.5vw',
        }

      var toRender = (<div>
            <h1 class="display-5 page-title">{this.state.data[0]}</h1>
            <h3 style={dateStyle}><i>{this.state.data[1]}</i></h3>
            <div style={spacer} />
        </div>)
    return (
        <div style={bg}>
            <div style={mainDiv}>
                <div style={spacer} />
                <Link to="/Blog/" ><img class="arrow" src={Arrow} alt="back" /></Link>
                {toRender}
                <div ref="content"></div>

                <nav class="navbar-sticky shadow" style={navbar}>
                        <div class="text-center">
                            <div class="flex-row flex-center">
                                  <Link to="/"><button type="button" class="btn item font-weight-bold">Home</button></Link>
                                  <Link to="/"><img class="item img-thumbnail" src={Logo} alt=":)" style={smallLogo}/></Link>
                                  <Link to="/AboutMe/"><button type="button" class="btn item font-weight-bold">About Me</button></Link>
                            </div>
                        </div>
                </nav>
            </div>
        </div>
    );
  }
}

export default BlogDisplay;