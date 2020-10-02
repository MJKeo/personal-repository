// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class HomeDepot extends Component {
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
                    <h1 class="experience-title cyan">Software Engineer Intern: The Home Depot</h1>
                    <h2 class="experience-date dark-cyan"><i>August 2020 - Present</i></h2>
                    <h1 class="experience-body white">This semester I am leading a high-value project for Home Depot. Our main goal is to improve the experience of our
                        ProXtra customers by reducing wait times for employees making purchases in person on behalf of a Pro customer. For the
                        first two weeks of my internship I followed Google's design sprint framework. In this time I read research documents, 
                        conducted interviews with employees, and worked alongside my mentors to understand what our customers want, and plan
                        out a prototype that satisfies those needs, and accomplishes our goals. 
                    </h1>
                    <h1 class="experience-body white">
                        Now I am developing an iOS app as the prototype
                        for our solution, involving pre-authorization of sales and a simple one-scan checkout process that will drastically
                        reduce in-store wait times. This app will eventually be used by thousands of ProXtra members representing thousands of
                        companies, ranging from large-scale corporations to local businesses.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>Swift</span>, <span>Xcode</span>, <span>Firebase</span></h1>
                </div>
            </div>
        )
    }
}

export default HomeDepot;