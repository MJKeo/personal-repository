// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class ORM extends Component {
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
                    <h1 class="project-title cyan">ORM: Strength Progress Tracker</h1>
                    <h2 class="project-date dark-cyan"><i>May 2020</i></h2>
                    <h1 class="project-header white">Overview</h1>
                    <h1 class="project-body white"> ORM: Strength Progress Tracker is the first app I officially posted to the iOS App Store.
                    The basic premise is simple: track your strength progression over time. But the key lies in how I track this progress.
                    Since 'maxing out' on an exercise is dangerous for your body, my app allows you to enter any number of reps and weight, and
                    calculates your hypothetical one-rep-maximum. By standardizing any effort into a hypothetical one-rep-max, you can track
                    your day-to-day progress without needing to increase your risk of injury. So if I complete 10 reps of 145 lbs on the bench
                    press, I can compare this to earlier in the week where I did 8 reps of 150 lbs, and see that I've performed better today. 
                    Being able to see your progress steadily increase every week helps you stay motivated in the gym, and reach goals you've set
                    for yourself.
                    </h1>
                    <h1 class="project-header white">How I Made It</h1>
                    <h1 class="project-body white"> I used this project as a way to learn iOS development. I had originally got my foot in the door
                    through the Georgia Tech iOS Club, but this was my first real solo project. My plan of attack had 3 main phases: planning, designing,
                    and developing. The first main questions I had to answer were "what is the purpose of this app?" and "what features do I need to
                    include to fulfill this purpose?". With that out of the way, I moved into Adobe XD to make mock designs of what my app 
                    would ideally look like at each screen. Lastly, I had to bring these designs to life within XCode. It was better to plan
                    out what I wanted everything to look like without restrictions on what I was capable of making with code, and then just
                    learn how to actually make it.
                    </h1>
                    <h1 class="project-header white">The End Result</h1>
                    <h1 class="project-body white"> Once the app was finished from a coding perspective, I had to work on creating icons, 
                    splash screens, and screenshots for the app store. Even once the app was officially on the App Store I still had to spread
                    the word on the app so it could get downloads and gain traction. At its peak it ranked #45 in the Health & Fitness category,
                    and has been downloaded 700 times.
                    </h1>
                </div>
            </div>
        )
    }
}

export default ORM;