import React, { Component } from 'react';
import AddExercise1 from '../images/addExercise1.png'
import AddExercise2 from '../images/addExercise2.png'
import RecordActivity1 from '../images/recordActivity1.png'
import RecordActivity2 from '../images/recordActivity2.png'
import RecordActivity3 from '../images/recordActivity3.png'
import ModifyExercise1 from '../images/modifyExercise1.png'
import ModifyExercise2 from '../images/modifyExercise2.png'
import ModifyExercise3 from '../images/modifyExercise3.png'
import './AppSupportStyles.css';

class HowItWorks extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
      }

    render() {
        return (
            <div class="how-divd">
                <h1 class="subheadingd">General Process</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">This app is built on the foundational idea of the <i>ONE REP MAXIMUM</i> (ORM), what's the most weight you can move one time?. Any exercie you record is
                    automatically converted into a hypothetical ORM using a formula developed by D Wathen, which has been tested and proven to
                    be an accurate conversion. By putting every exercise into the same format, it is easy to compare different lifts over a long
                    period of time without the need to attempt a one rep maximum, which can wear down your body and cause injuries. My app makes
                    it easy to view your progress as well as safer to do so.</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">ORM: Strength Progress Tracker has a few main functionalities:</h1>
                    <ul class="textd">
                        <li>View your strength progress over time for a variety of exercises, including custom ones</li>
                        <li>Easily keep track of your personal bests</li>
                        <li>Set and achieve goals</li>
                        <li>Compare your strength with lifters throughout the world</li>
                    </ul>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">These sections below will go over different processes you can do in the app, and show a step-by-step process
                    for each one.</h1>
                <div class="small-spacerd"></div>
                <h1 class="subheadingd">Adding / Creating an Exercise</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">Adding an exercise is a simple, 2-step process:</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="regular-textd">1- On the home screen, select the "new" button shown in the picture on the left</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="regular-textd">2- Choose between 2 options for adding an exercise: </h1>
                        <h1 class="regular-textd indentd">A- Create a custom exercise. You write in the name in the input field on the left, and select what
                        type of exercise it is on the right. This exercise type affects how you can record data, as bodyweight exercises only use
                        your bodyweight, and records how many reps of that exercise you can do with your bodyweight. NOTE: strength standards do not
                        exist for custom exercises.</h1>
                        <h1 class="regular-textd indentd">B- Choose one of the built in exercises from the list at the bottom. Just tap on any icon to add that exercise to your collection.</h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={AddExercise1} alt="image failed to load :(" />
                        <img class="pictured" src={AddExercise2} alt="image also failed to load :(" />
                    </div>
                <div class="small-spacerd"></div>
                <h1 class="subheadingd">Recording an Activity</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">Recording an exercise can be done in two ways. Let's first look at using the Record Activity page.</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">On the Record Activity screen, the process is simple</h1>
                        <h1 class="regular-textd indentd">1- Select which exercise you want to record an activity for (must be an exercise you've already added)</h1>
                        <h1 class="regular-textd indentd">2- Change the reps and weight to match what you want to submit (NOTE: bodyweight exercises only use your
                        weight, so the weight value cannot be changed for those exercises)</h1>
                    <h1 class="regular-textd indentd">3- Submit the activity. You'll be prompted with a popup telling you it was successfully submitted, and your ORM</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={RecordActivity1} alt="image failed to load :(" />
                    </div>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">You can also record an activity in the Exercise Breakdown page. You can get here by clicking on your exercise in
                    the home page. The process here is not much different.</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">First select the "record activity" button shown in the picture on the left</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">Then it's the same last two steps as before, entering the reps and weight, and then pressing submit. If you want to exit and 
                    not record an activity just press anywhere else on the scree, or swipe down.</h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={RecordActivity2} alt="image failed to load :(" />
                        <img class="pictured" src={RecordActivity3} alt="image also failed to load :(" />
                    </div>
                <div class="small-spacerd"></div>
                <h1 class="subheadingd">Modifying an Exercise</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">In order to edit your exercise, you'll need to be on the Exercise Breakdown page, which you can reach by going
                    to the Home page and selecting one of your exercises. From there select the pencil icon in the upper right corner of the picture below.</h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={ModifyExercise1} alt="image failed to load :(" />
                    </div>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">On the edit exercise page there are a couple things you can do. First, there are 3 properties of the exercise that can
                    be edited:</h1>
                            <h1 class="regular-textd indentd">1- Exercise name can be re-typed if the exercise is a custom exercise. However, for built-in exercises like "Bench Press"
                            seen below, you cannot change this property</h1>
                            <h1 class="regular-textd indentd">2- Exercise type can be re-selected again only if the exercise is a custom one, built-in exercises cannot have this
                            changed</h1>
                            <h1 class="regular-textd indentd">3- Display units are the units you'll see for your graph label, personal best, closest goal (on the home page), records list, and so on.
                            This can be changed for all exercises regardless of their type, and is the same as the display units editor found in the settings screen</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">You can also perform a few actions on this exercise, either:</h1>
                        <h1 class="regular-textd indentd">A- Go to the edit exercise page to manage your activity (see below section for more)</h1>
                        <h1 class="regular-textd indentd">B- Delete the exercise entirely. This will remove all recorded activities, goals, and personal bests for this exercise</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={ModifyExercise2} alt="image failed to load :(" />
                    </div>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">The recent activity page contains a list of all of your activity for this exercise. Each activity has a date recorded, One Rep Max (ORM),
                    and a button that will delete that activity (only that one activity) from your records.</h1>
                    <div class="picture-containerd">
                        <img class="pictured" src={ModifyExercise3} alt="image failed to load :(" />
                    </div>
                <div class="small-spacerd"></div>
                <h1 class="subheadingd">Strength Standards</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <h1 class="textd">This app uses "strength standards", which are the different strength levels based on performances by athletes throughout
                    the world. Each standard is based on your age, weight, and gender. Below are what each strength standard means, as well as its associated
                    color.</h1>
                    <h1 class="tiny-spacingd"></h1>
                    <ul>
                        <li class="textd indentd gray"><i>N/A - A custom exercise that does not have standardized data</i></li>
                        <li class="textd indentd gray"><i>Untrained - Has not or just began training</i></li>
                        <li class="textd indentd beginner"><i>Beginner - New lifter, little experience in strength training</i></li>
                        <li class="textd indentd novice"><i>Novice - Some experience with training, stronger than the average untrained lifter</i></li>
                        <li class="textd indentd intermediate"><i>Intermediate - Has trained consistently for an extended period of time, a regular gym-goer</i></li>
                        <li class="textd indentd advanced"><i>Advanced - Someone who has been lifting consistently for many years, stronger than most other lifters</i></li>
                        <li class="textd indentd elite"><i>Elite - A lifter strong enough to compete at a national level</i></li>
                    </ul>
            </div> 
        )
    }
}

export default HowItWorks;