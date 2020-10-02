// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class LetsGetReady extends Component {
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
                    <h1 class="experience-title cyan">Instructor: Let's Get Ready</h1>
                    <h2 class="experience-date dark-cyan"><i>June - August 2018</i></h2>
                    <h1 class="experience-body white"> Let’s Get Ready is a nonprofit organization that provides tutoring services 
                    for low income high school students, especially the SAT. I served as a tutor for the math portion of the SAT, 
                    and I had a small class of around 10 students that I would teach on a weekly basis. I had to work to prepare a 
                    lecture that not only covered all the topics planned for that week, but was also engaging enough to keep students 
                    mostly interested in what was being taught. It was interesting trying to break down topics into its basic elements, 
                    so that I can explain how to solve and problem, and when to know that type of question is being asked. In order 
                    to be able to teach a topic, and answer any questions along the way, I had to know the topic thoroughly myself. 
                    The course was a success, and my students were able to improve their scores significantly.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>Leadership</span>, <span>Group Management</span>, 
                    <span>Communication</span></h1>
                </div>
            </div>
        )
    }
}

export default LetsGetReady;