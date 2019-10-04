import React, { Component } from 'react';

class DisplayExperience extends Component {
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
        const mainDiv = {
            height: '30vw'
        }

        const titleText = {
            fontSize: '2.2vw'
        }
        const timeText = {
            fontSize: '1.5vw'
        }
        const descText = {
            textIndent: '2vw',
            fontSize: '1.3vw',
            textAlign: 'left'
        }

        const spacer = {
            height: '1.7vh'
        }

        var paragraphs = null
        paragraphs = this.props.description.map(paragraph => (<div><div style={spacer} /><h1 style={descText}>{paragraph}</h1></div>))


        return (
            <div class="container align-items-center" style={mainDiv}>
                    <h1 style={titleText}>{this.props.title}</h1>
                    <h1 style={timeText}><i>{this.props.time}</i></h1>
                    {paragraphs}
            </div>
        )
    }
}

export default DisplayExperience;