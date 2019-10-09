import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BlogPage from './BlogPage.js'
import db from './config';
import './blog.css'

class BlogDisplay extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.pushData = this.pushData.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    pushData() {
        db.ref("Current").update({
            val: [this.props.title, this.props.date, this.props.content]
        })
    }

  render() {
      const mainDiv = {
          textAlign: 'left',
          marginLeft: '5vw',
          paddingTop: '50px'
      }
      const dateStyle = {
          marginLeft: '2vw',
          fontSize: '2.5vw'
      }
      const overviewStyle = {
          marginLeft: '2vw',
          fontSize: '1.3vw'
      }
      const underline = {
          height: '0.5px',
          background: 'gray'
      }
    return (
        <div class="container" style={mainDiv}>
            <Link to="/read-post" ><h1 class="display-5 display-title sans-serif" onClick={this.pushData}>{this.props.title}</h1></Link>
            <h3 style={dateStyle}><i>{"Posted on: " + this.props.date}</i></h3>
            <p style={overviewStyle}>{"Overview: " + this.props.overview}</p>
            <hr style={underline}/>
        </div>
    );
  }
}

export default BlogDisplay;