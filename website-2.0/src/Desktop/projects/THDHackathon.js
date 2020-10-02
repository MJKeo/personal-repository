// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class THDHackathon extends Component {
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
                    <h1 class="project-title cyan">Home Depot Reinforcement Learning Hackathon</h1>
                    <h2 class="project-date dark-cyan"><i>January 2020</i></h2>
                    <h1 class="project-header white">The Challenge</h1>
                    <h1 class="project-body white"> At the start of the hackathon we were presented with the following challenge: how do
                    we maximize our profits? Actually, it was using data of where stores are located, where trucks are located, and what
                    inventory we need at each location to develop a route for each truck so that we could maximize our profits across all
                    combined stores. To do this, we needed to develop a reinforcement learning agent that could take a brand new map of
                    trucks, stores, and inventories, and spit out a sequence of commands for our trucks in order to maximize profits. There
                    were a few extra details. First, each truck has a limit on how far it can move each day, and secondly, trucks need to visit
                    our single warehouse to refill their inventory in order to bring items to stores.
                    </h1>
                    <h1 class="project-header white">My Work</h1>
                    <h1 class="project-body white"> One of the prizes I had my eyes set on from the get-go was 'Best User Experience', and so 
                    the majority of my efforts in the hackathon were focused on bringing the world of the problem to life, and even make it
                    interacteable. Essentially I created a javascript frontend that could take in a sequence of commands produced by our RL agent,
                    and show how each command affects the world. I had real-time statuses of each store, if that store was low on inventory, or
                    even out of stock, meaning we were losing potential profits. I also showed trucks moving throughout the grid world, had
                    a running tracker of our total income, and even showed on the screen what our most recent action was. Lastly, I included
                    a speed bar that allowed the user to speed up or slow down how often a new command was executed, depending on what they
                    wanted to experience. But I didn't completely ignore the RL aspect of the hackathon. In fact, I worked on the reward
                    function for our agent, answering the question "how do we determine if a move is good?". It ultimately boiled down to
                    how well that move contributed to increasing our income, which is easier said than done, but tried to incorporate all
                    aspects of our world.
                    </h1>
                    <h1 class="project-header white">The End Result</h1>
                    <h1 class="project-body white"> By the time the hackathon ended, our RL agent was not as good as we had hoped, but it
                    did at least work. In the end, we won that award for the best user experience, and left with our heads held high. It
                    was definitely a good learning experience, but the added bonus of the award was much appreciated.
                    </h1>
                </div>
            </div>
        )
    }
}

export default THDHackathon;