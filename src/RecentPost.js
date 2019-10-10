import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BlogPage from './BlogPage.js'
import db from './config';
import './blog.css'

class RecentPost extends Component {
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
      var line = null;
      if (this.props.line) {
          line = (<hr class="shorten"/>);
      }
    return (
        <div>
            <Link to="/read-post" ><h4 class="recent-post" onClick={this.pushData}>{this.props.title}</h4></Link>
            {line}
        </div>
    );
  }
}

export default RecentPost;