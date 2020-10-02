// import React
import React, { Component } from 'react';
// import styling
import "../styling/Thumbnail.css";


class Thumbnail extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount()  {
        console.log(this.props.title)
    }

    render() {
        return (
            <div class="thumbnail-main-div">
                <img src={this.props.image} alt={this.props.title} />
                <div class="thumbnail-overlay-div">
                    <h1 class="white">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Thumbnail;