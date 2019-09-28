import React, { Component } from 'react';

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

        var display = null
        if(this.state.clicked) {
            display = (<div><h4>{this.props.description}</h4><p>Check it out: {this.props.link}</p></div>)
        }
        return (
            <div style = {mainDiv}>
                <h1 class="display-3 text-left" onClick={() => this.update()}><u>{this.props.title}</u></h1>
                <div class="container">
                    {display}
                </div>
            </div>
        )
    }
}

export default Project;