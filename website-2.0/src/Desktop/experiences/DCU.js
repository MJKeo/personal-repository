// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class DCU extends Component {
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
                    <h1 class="experience-title cyan">IT Intern: Digital Federal Credit Union</h1>
                    <h2 class="experience-date dark-cyan"><i>May - August 2019</i></h2>
                    <h1 class="experience-body white"> During my internship with DCU, I worked on a variety of projects throughout the 
                    IS department. In general, my job was to write scripts to automate processes done throughout the department. 
                    I was able to work on automatic database cleaning KShell scripts, automating new hire profile creation within Active Directory
                     using PowerShell, 
                    and even write SQL queries in conjunction with Power BI to create detailed dashboards for the department’s workflow data. 
                    Perhaps the most interesting project was finding a way to simulate live-templating for the departments documentation 
                    in Confluence using Groovy scripts. This internship exposed me to a plethora of new languages and frameworks as well 
                    as the Agile development process, and was an excellent experience.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>SQL</span>, <span>KShell</span>, <span>PowerShell</span>, 
                    <span>Groovy</span>, <span>Agile Development</span></h1>
                </div>
            </div>
        )
    }
}

export default DCU;