import React, { Component } from 'react';
import Home from '../images/homePage.png';
import Exercise from '../images/exerciseBreakdown.png';
import EditExercise from "../images/editExercise.png";
import RecentActivity from "../images/recentActivity.png";
import Settings from "../images/settings.png";
import RecordActivity from "../images/recordActivity.png";
import Records from "../images/records.png";
import ORMCalculator from "../images/ormCalculator.png";
import './PhoneStyles.css';

class PageBreakdownPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
      }

    render() {
        return (
            <div class="how-div">
                <h1 class="subheadingp">Home Page</h1>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">The Home page is what you see when you first enter the app. It serves as your main hub, from which
                    you can navigate to exercise breakdown pages, or other pages that are on the tab bar on the bottom. It is designed to
                    provide a brief overview of some recent activity and exercises where you are close to breaking your goal, as well as
                    allow for easy access to your exercises. Here are some important features:</h1>
                    <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- This is your recent activity graph. It shows a week-long view of activity for the exercise you
                        most recently recorded an activity for. If no activity has been recorded the graph will not show up. Clicking on the graph
                        will take you to the exercise breakdown page for that exercise.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- The closest goal button shows what exercise you are closest to reaching. This is based on how far your current
                        best is from the goal you set. If there are no incomplete goals this will not appear. Clicking on the button takes you to the exercise breakdown page for that exercise.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- This is your list of exercises. Click on any of them to view their exercise breakdown.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">4- Click on this cog wheel icon to go to the settings page (which you probably did to get here...)</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">5- This is the "add exercise" button. Clicking on this takes you to the Add Exercise page.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={Home} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Exercise Breakdown Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">Here is where you can see all of the information for a specific exercise, such as recorded activities, your personal
                    best, and your goal. There are a few major features to go over:</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- This graph visualizes all of the activities you have recorded. You can change the time frame of the activities you can see, as well as click on any data point
                        to see more about what that data point means. The horizontal lines represent the strength standards and the goal you set, as seen in the labels below the graph.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- Click here to record an activity for this exercise. See "Recording an Activity" in the How the App Works section for more information on how to use it.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- Here are your statistics for this exercise, broken into three main categories: personal best, current goal, and strength level. You can click on the goal number to change its value.
                        Your strength level is based on your personal best, and strength standards for your age, weight, and gender.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">4- Click on this pencil icon to go to the Edit Exercise page.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">5- This is where you select the time frame you want for the graph below. You can either see all data from the past week, month, 6 months, or all time.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={Exercise} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Edit Exercise Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">The Edit Exercise page is where you can modify an exercise's attributes as well as your recorded activities for this exercise.</h1>
                    <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- These are the editable attributes. For custom exercises, you can edit the exercise's name and type here. The difference between the two types is that
                        bodyweight exercises do not let you change the weight when recording, as it uses your weight instead. Built-in exercises do not allow these features to be edited. Display units can also be changed
                        here, and this shows the weight units used for any labels throughout the app, excluding ones where you change the value, as I wanted you to be able to record weight in any unit.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- Clicking here navigates you to the Recent Activity page.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- Clicking here deletes this exercise, as well as all recorded activities, personal bests, and goals.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={EditExercise} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Recent Activity Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">This page is where you can view and delete activities you've recorded for an exercise. Here are the features:</h1>
                    <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- This is the time the activity was recorded.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- This is the One Rep Maximum (ORM) that was recorded.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- Click here to delete this one activity.</h1>
                        <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={RecentActivity} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Settings Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">The Settings page is where you can edit your personal information, as well as other settings.</h1>
                    <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- Here is where you change your settings values. Click on any of the underlined values to
                        choose a new value (NOTE: information is saved once you leave the page). The first three settings are your personal information, which
                        is used to calculate strength standards. The display units changes the weight units used for any labels throughout the app, excluding ones where you change the value, as I wanted you to be able to record weight in any unit</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- Click here to come to this page! I hope this website contains all the information you need, but if not my contact information is at the bottom.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={Settings} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Record Activity Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">On the Record Activity page you can save activities for your exercises. This is one of two ways to record an activity (see "Recording an Activity" in the How the App Works section).</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- Click here to choose which exercise you want to record the activity for.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">2- Pick the reps and weights for the activity here, click on each number to change its value.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- Click here to submit the activity.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={RecordActivity} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">Records Page</h1>
                    <div class="tiny-spacing"></div>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">Here you can easily view all of your personal bests.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">Each record contains the following information: exercise name, best One Rep Maximum (ORM), and strength level. The strength
                        level is based on the strength standards for your weight, age, and gender.</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={Records} alt="image failed to load :(" />
                    </div>
                <div class="small-spacer"></div>
                <h1 class="subheadingp">ORM Calculator Page</h1>
                    <div class="tiny-spacing"></div>
                    <h1 class="text">To start off, what is ORM? It stands for One Rep Maximum, the most amount of weight you can lift for a given exercise one time. For bodyweight exercises it represents how many repetitions with your bodyweight
                    you can do in a row. This page is for you to see hypothetical ORMs and strength levels, so you can see what you'd need to do in order to reach a certain record, or get to the next strength level.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">1- Here's where you enter the age, weight, and gender. By default, the values are set to your information, but it can be changed.</h1>
                        <div class="tiny-spacingd"></div>
                        <h1 class="regular-text indented">2- This is where you select the exercise you would record for. Because strength standards are not available for custom exercises, you cannot
                        choose them.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">3- Enter the reps and weight for the activity here.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">4- Click here to calculate the ORM and strength standards for the information above.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">5- This is your calculated ORM. It is calculated using a formula developed by D. Wathen in 1994, and has been proven to be an accurate estimator. IMPORTANT: when you first open this
                        page this and the next two items will be not show up, they appear when you click "Calculate My ORM".</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">6- This is the strength level of that calculated ORM. Strength level is based on strength standards calculated using your age, gender, and weight. See below for the number needed to reach each level.</h1>
                        <div class="tiny-spacing"></div>
                        <h1 class="regular-text indented">7- Here are all of the strength level. Each number represents the minimum ORM needed to reach that strength level. If the ORM falls below the "Beginner" standard it is considered "Untrained".</h1>
                    <div class="tiny-spacing"></div>
                    <div class="picture-container">
                        <img class="picture" src={ORMCalculator} alt="image failed to load :(" />
                    </div>
            </div> 
        )
    }
}

export default PageBreakdownPhone;