import React, { Component } from 'react';
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
      }
      const spacer = {
          height: '100px'
      }

      var toRender = (<div>
            <h1 class="display-5 page-title">{this.state.data[0]}</h1>
            <h3 style={dateStyle}><i>{this.state.data[1]}</i></h3>
            <div style={spacer} />
        </div>)
    return (
        <div style={mainDiv}>
            {toRender}
            <div ref="content"></div>
        </div>
    );
  }
}

export default BlogDisplay;