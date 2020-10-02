// import React
import React, { Component } from 'react';
// import styling
import "../styling/HomeSection.css"


class HomeSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="home-section-main-div">
                <img class="home-section-image" src={this.props.image} alt={this.props.title} />
                <div class="home-section-text-div">
                    <h1 class="home-section-title cyan">{this.props.title}</h1>
                    <h1 class="home-section-description white">{this.props.description}</h1>
                </div>
            </div>
        )
    }
}

export default HomeSection;