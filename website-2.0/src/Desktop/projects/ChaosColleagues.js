// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class ChaosColleagues extends Component {
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
                    <h1 class="project-title cyan">Chaos Colleagues</h1>
                    <h2 class="project-date dark-cyan"><i>October 2019</i></h2>
                    <h1 class="project-header white">Our Idea</h1>
                    <h1 class="project-body white"> When it came time to plan out our project for Hack GT 2019, my friends and I wanted to
                    make something outside of our comfort zone, instead of just another ReactJS app. We ultimately decided on building a
                    game in Unity, but then the question remained "what game?". After some brainstorming we came up with a concept: combine
                    the accessibility of Jackbox games with the creativity of VR. Jackbox games are party games you can play by connecting
                    your own phone to a room hosted by whoever actually owns the game. It doesn't even require a special app, if you have a 
                    smartphone with safari you can join through their website. This was our source of inspiration. We would make a Unity game
                    where one player uses VR and hosts the room, while their friends can all join in on their smartphones without needing
                    to purchase the game themselves. We were thinking of a Mario Party style game, a series of minigames pitting the VR player
                    against those on mobile devices, the ultimate cross-platform party game. 
                    </h1>
                    <h1 class="project-header white">Bringing This Idea to Life</h1>
                    <h1 class="project-body white"> My first point of business was figuring out how to connect a vr player to multiple mobile
                    devices. It just so happened that one of the sponsors, Teleportal, specialized in just that. We worked closely with their
                    representatives to set up realms within Unity. The VR player would boot up the game, generating a randomized room key that 
                    mobile players would then be able to enter in order to join the same room. The trickiest part of this was having different
                    avatars for different players, and keeping it consistent for each player's point of view. 
                    </h1>
                    <h1 class="project-body white"> Once we nailed down connectivity, I had to create an actual game for people to play. I decided
                    it would be cool if we had a game where the VR player was a giant demon, with the mobile players being little goblins on a giant
                    kitchen table. The demon would try to pick up and eat the goblins, and the goblins would try to evade the demon. With this in mind,
                    I got to work on creating this world. Unity makes building environments a breeze, and after downloading a Medieval resource pack and
                    rearranging a few objects, I was able to create a huge cottage to contain our game.
                    </h1>
                    <h1 class="project-body white"> For some final touches we added a spooky skybox, which had an awesome orange glow, and some dramatic
                    music that played in the background. With these last details finished we considered our game complete (and also the time for the
                    hackathon ended).
                    </h1>
                    <h1 class="project-header white">The Final Result</h1>
                    <h1 class="project-body white"> A few hours after completing the game we brought it out to the demo floor where other participants
                    could try out our game. The feedback was overwhelmingly positive, this combination of VR and mobile gaming was an experience not
                    yet available in mainstream gaming. In the end, my team and I won the "Best Spatial Software" award and concluded this hackathon
                    satisfied with what we created.
                    </h1>
                </div>
            </div>
        )
    }
}

export default ChaosColleagues;