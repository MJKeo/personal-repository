import React, { Component } from 'react';
import './styles.css'

class Project extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          clicked: false
        };
        this.update = this.update.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    update() {
        this.setState(() => ({
            clicked: !this.state.clicked
        }))
        console.log(this.state.clicked)
    }

    render() {
        const mainDiv = {
            width: '90%',
            textAlign: 'left',
            paddingLeft: '5%'
        }
        const spacer = {
            height: '6vh'
        }
        const line = {
            height: '1.5px',
            background: 'black',
            opacity: '0.6'
        }
        const smallSpacer = {
            height: '1vh'
        }
        const indent = {
            textIndent: '2vw'
        }

        var description = this.props.description.map(paragraph => (<div><h4 style={indent}>{paragraph}</h4><div style={smallSpacer} /></div>))
        var images = this.props.image.map(ima => (<img class="image-style" src={ima}/>))
        var display = null
        if(this.state.clicked) {
            display = (<div>
                            <h3><i>{this.props.time}</i></h3>
                            <div style={smallSpacer} />
                            <div style={smallSpacer} />
                            {description}
                            <div style={smallSpacer} />
                            <div class="container-fluid mx-auto text-center">{images}</div>
                            <div style={smallSpacer} />
                            <h5>Check it out: </h5>
                            <a href={this.props.link}>{this.props.link}</a>
                        </div>)
        }
        return (
            <div style = {mainDiv}>
                <h1 class="display-4 text-left font-weight-bold" onClick={() => this.update()}>{this.props.title}</h1>
                <div class="container">
                    {display}
                </div>
                <hr style={line}/>
                <div style={spacer} />
            </div>
        )
    }
}

export default Project;