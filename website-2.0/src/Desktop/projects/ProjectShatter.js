// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class ProjectShatter extends Component {
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
                    <h1 class="experience-title cyan">Camp Counselor: Shrewsbury Parks and Recreation</h1>
                    <h2 class="experience-date dark-cyan"><i>June 2016 - August 2018</i></h2>
                    <h1 class="experience-body white"> In my 2 years working for Shrewsbury Parks and Recreation I worked as both a youth 
                    sports instructor and a camp counselor. As an instructor I acted as a coach for weekly games as well as assisted in 
                    teaching fundamental basketball skills to elementary and middle school children in my town. In both of these roles, 
                    I had to maintain a fun yet productive environment for all participants to feel welcome, but also keep organized and 
                    focused on completing the drills for that week.
                    </h1>
                    <h1 class="experience-body white">
                    During the summer I served as a camp counselor, where my coworkers and I managed over 100 children from Kindergarten 
                    up to 7th Grade. Once again our priority a fun, yet safe, environment for the children to play, explore, and enjoy 
                    the summer. At the same time, I had to know when to be serious and ensure the kids are being respectful to each other 
                    as well as my coworkers and me. I really enjoyed working this job, the kids were very sweet (for the most part), and 
                    I am glad I was given the opportunity to be a part of it.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>Leadership</span>, <span>Management</span></h1>
                </div>
            </div>
        )
    }
}

export default ProjectShatter;