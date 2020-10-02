// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class Cisco extends Component {
    constructor(props) {
        super(props);

        // methods

        // variables
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="experience-main">
                    <h1 class="experience-title cyan">Intern: Cisco Systems</h1>
                    <h2 class="experience-date dark-cyan"><i>July - August 2017</i></h2>
                    <h1 class="experience-body white"> I had a brief internship with Cisco Systems where I was able to get a look 
                    inside the cloud computing lab. Although I did assist in the automation of networking software and virtual 
                    machine installations, the primary focus of my time there was learning the process of cloud computing, and getting 
                    a close look at the hardware that makes it all possible. Overall it was an interesting taste of the backing system 
                    behind many of the applications I use daily, such as Google Drive.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>Linux</span>, <span>Cloud Computing</span></h1>
                </div>
            </div>
        )
    }
}

export default Cisco;