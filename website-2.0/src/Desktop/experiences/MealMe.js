// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Experience.css"


class MealMe extends Component {
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
                    <h1 class="experience-title cyan">iOS Developer Intern: MealMe</h1>
                    <h2 class="experience-date dark-cyan"><i>June - August 2020</i></h2>
                    <h1 class="experience-body white"> At MealMe I had two major goals: increase restaurant selection, and reduce operation
                    costs, and that's exactly what I did. In terms of selection I worked on 'Browsing 2.0', which first and foremost allowed 
                    users to filter restaurants near them based on a variety of characteristics. I also reduced data costs to be completely free,
                    allowing us to show more restaurants to the user at any given time, a 10x increase. By the end of my time at MealMe, we had a
                    larger selection than any food delivery app. I had to manage interactions with Yelp Fusion for restaurant information, various food
                    delivery platforms, and our own personal database in order to create one unified experience for our users, and the outcome was a
                    significantly larger selection, drastically improved customizability, and minimal costs on our end. 
                    </h1>
                    <h1 class="experience-body white">
                        Another major aspect of this internship was adding personalization through a restaurant reccommendation system. It boiled
                        down to the question: 'based on how the user has previously interacted with our system, what restaurants would they want
                        to see when the first open our app?'. I developed a history system and a fairly primitive AI to accomplish this goal. By
                        seeing which restaurants the user orders from, and what search criteria are used often during browsing, I was able to get a 
                        good snapshot of what a given user likes, and how that relates to the restaurants near them. Whether it's a specific cuisine
                        type, a specific restaurant chain, or a given price range, we learn the user's preferences and pick the best restaurants for
                        them. Although it is difficult to quantify the quality of the recommendation system, it has been a well received addition to the
                        application.
                    </h1>
                    <h1 class="experience-skills white"><b>Skills used</b>: <span>Swift</span>, <span>Xcode</span>, <span>AI</span>, 
                    <span>REST APIs</span></h1>
                </div>
            </div>
        )
    }
}

export default MealMe;