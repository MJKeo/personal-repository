// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class VIP extends Component {
    constructor(props) {
        super(props);

        // methods

        // variables
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="project-main">
                    <h1 class="project-title cyan">VIP: Intelligent Tutoring System</h1>
                    <h2 class="project-date dark-cyan"><i>August 2019 - Present</i></h2>
                    <h1 class="project-header white">Overview</h1>
                    <h1 class="project-body white"> As a part of Georgia Tech's Vertically Integrated Projects program, I am working with
                    a small team of Georgia Tech students to develop an Intelligent Review System. The main premise is that we are 
                    creating a platform to be used by teachers to better understand the performance of their class, and used by students
                    to understand how they are performing and how they can improve. We are consolidating data from prior years, and consolidating
                    them with current data to display possible trends, areas in need of improvement, or identify significant changes.
                    </h1>
                    <h1 class="project-header white">How We Made It</h1>
                    <h1 class="project-body white"> Our system consists of a ReactJS frontend, which communicates with a Flask, SQL backend.
                    When combined together, we are able to create interactable charts and graphs that allows teachers to get a detailed view
                    of how students fared on specific assignments, or the class as a whole. Using the KNN algorithm, we help categorize assignments
                    by difficulty, and identify which ones are likely too difficulty, or even too easy. For students we wanted to make a customized
                    experience, and so we took a students performance so far in the class, and placed them into a specific category of student. By
                    this I mean that we analyzed data from past semester to identify different groups that students often fell into. For
                    each specific group, there are stronger areas, and weaker ones, where we will help them improve. As it currently stands
                    we are still in the process of creating a review system for these students to practice real questions relating to their
                    areas in need of improvement.
                    </h1>
                    <h1 class="project-header white">In Conclusion</h1>
                    <h1 class="project-body white"> As a whole, the Intelligent Review System hopes to improve the classroom experience for
                    both students and teachers. Whether it's showing teachers where they could improve class performance, or aiding students
                    in improving on their most challenging areas, IRS provides valuable insight and hard data that can be utilized by all users.
                    </h1>
                </div>
            </div>
        )
    }
}

export default VIP;