// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"

class Tyes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="project-main">
                    <h1 class="project-title cyan">Tyes</h1>
                    <h2 class="project-date dark-cyan"><i>August 2018 - August 2020</i></h2>
                    <h1 class="project-header white">What is Tyes?</h1>
                    <h1 class="project-body white"> Tyes is an organization founded by me and 7 fellow Georgia Tech students to create
                    intellgent medical devices, specifically to aid in muscular spasticity recovery. This came out of Georgia Tech's Grand
                    Challenges program, starting with the general problem scope of 'Health and Well Being'. Over the past two years we worked
                    to find a specific problem to tackle, and then developed a solution. 
                    </h1>
                    <h1 class="project-header white">From Problem to Solution</h1>
                    <h1 class="project-body white"> The problem we found came in the form of the 9-hole peg test. In its current form, the
                    9-hole peg test is a simple plastic/wooden board and pegs, where a patient places pegs in and takes pegs out of holes as
                    fast as possible. Based on the time it takes the patient to complete the test, as well as observations made by the therapist
                    conducting the test, are used to assess the patient's motor abilities, and recovery progress. My team and I worked to
                    create an intelligent 9-hole peg test, which increases the amount of data collected from the test to better quantify
                    the motor abilities of the patient. Working closely with doctors from Emory University, and real physical therapists, we
                    successfully developed a physical device and Electron application to present to doctors and therapists at the Impact 2020
                    conference, which has unfortunately been delayed due to Coronavirus.
                    </h1>
                    <h1 class="project-header white">My Impact</h1>
                    <h1 class="project-body white"> In terms of my contribution to the team, I led the group of 4 developers who worked to
                    create the electron application that communicated with our physical device, as well as develop a proof-of-concept for a
                    patient-therapist portal. This portal would keep patients and therapists connected between in-person sessions, ensuring
                    the patient is doing everything possible to maximize motor ability recovery. Tyes hopes to help thousands of patients 
                    suffering from muscular spasticity improve recovery progress, and reduce their financial burden.
                    </h1>
                </div>
            </div>
        )
    }
}

export default Tyes;