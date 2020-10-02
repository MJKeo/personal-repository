// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class ApeUnit extends Component {
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
                    <h1 class="project-title cyan">ApeUnit</h1>
                    <h2 class="project-date dark-cyan"><i>Spring 2019</i></h2>
                    <h1 class="project-header white">Our Purpose</h1>
                    <h1 class="project-body white"> ApeUnit is an organization founded for a single purpose: aiding fellow CS students on their
                    assignments (in accordance with the rules of the class of course). We incentivized the completion of assignments through
                    creating simple games that are accessable only through finishing said assignments. At the end of the day we helped fellow students
                    better understand the course material, and have fun doing so.
                    </h1>
                    <h1 class="project-header white">How this was Founded</h1>
                    <h1 class="project-body white"> For our Data Structures and Algorithms class, we were allowed to create JUnit tests for each
                    assignment, so long as we weren't directly giving away answers to that assignment. But my friends and I thought we could do better
                    than just creating a solid test. If you passed each of our test cases, you would be given access to a simple game we made that week.
                    This started simple, just a hang man game, but as the weeks progressed, the games increased in complexity. I personally
                    worked on some JavaScript games, such as a choose-your-own adventure game called 'Banandersnatch'. Each game had one thing
                    in common: a primate theme. As the popularity of this organization grew, I found students playing our games throughout campus,
                    some of whom weren't even a part of the class we were in. If you are interested in some of these games, 
                    checkout <a class="dark-cyan" href="https://ape-unit.github.io/">this</a>, or go to my games page and try them out!
                    </h1>
                    <h1 class="project-header white">In Conclusion</h1>
                    <h1 class="project-body white"> Although it's hard to pretend that an organization that makes primate-themed games and
                    JUnit tests has a profound significance, I wouldn't be stretching the truth if I said that we made a meaningful impact
                    on our peers. Of course, the unit tests were valuable in helping students improve their code for assignments, we also
                    made the assignments fun. Students would ask what the game of the week would be, and they would share in the silly joy
                    of our creations. Data Structures and Algorithms in Spring 2019 was a class to remember.
                    </h1>
                </div>
            </div>
        )
    }
}

export default ApeUnit;