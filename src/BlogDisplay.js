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
          marginRight: '5vw'
      }
      const dateStyle = {
          marginLeft: '2vw',
          fontSize: '1vw'
      }
      const overviewStyle = {
          marginLeft: '2vw',
          fontSize: '1.1vw'
      }
      const cardTop = {
          height: '1vw',
          width: '100%',
          backgroundColor: '#20306D',
          marginBottom: '2vw'
      }
      const indent = {
          paddingLeft: '2vw'
      }
    return (
        <div class="card" style={mainDiv}>
            <div style={cardTop}></div>
            <div style={indent}>
                <div class="flex-row space-bet">
                    <Link to="/read-post" ><h1 class="display-title font" onClick={this.pushData}><b>{this.props.title}</b></h1></Link>
                    <h3 class="date font" style={dateStyle}>{"Posted on: " + this.props.date}</h3>
                </div>
                <p class="font" style={overviewStyle}><i>{"Overview: " + this.props.overview}</i></p>
            </div>
        </div>
    );
  }
}

export default BlogDisplay;