import React, { Component } from 'react';
import './styles.css';

class Experience extends Component {
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
          const overlay = {
            position: 'relative',
            background: 'white',
            width: '80%',
            opacity: '0.8',
            left: '10%',
            boxShadow: '1px'
          }
          const spacer = {
              height: '25%'
          }
          const box = {
              border: 'solid',
              height: '20vh',
              width: '100%'
          }
          const darkBox = {
            border: 'solid',
            height: '20vh',
            width: '100%',
            background: 'black',
            border: 'black'
        }

          var toRender = null
          if(this.props.num == this.props.selected) {
            toRender = (<div class="container-fluid text-white" style={darkBox}>
                <div style={spacer} />
                <h1>{this.props.title}</h1>
            </div>)
          } else {
            toRender = (<div class="container-fluid text-black experience-option" style={box}>
                <div style={spacer} />
                <h1>{this.props.title}</h1>
            </div>)
          }
          

        return (
            <div>
                {toRender}
            </div>
        )
    }
}

export default Experience;