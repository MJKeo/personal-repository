// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
import Thumbnail from "../components/Thumbnail.js";
// import images
import Banandersnatch from "../../Images/banandersnatch-icon.png";
import MinigameMashup from "../../Images/flappy-ape-icon.png";
import WorstTTT from "../../Images/worst-tic-icon.png";
import Snake from "../../Images/snake-icon.png";
import SquidsTD from "../../Images/squids-tower-icon.png";
import MikePiano from "../../Images/mike-piano-icon.png";
// import styling
import "../styling/Sections.css";


class Games extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Navbar />
                <h1 class="section-title cyan">Games</h1>
                <div class="thumbnail-centering-div">
                    <div class="thumbnail-div">
                        <Link to="/Games/Worst-Tic-Tac-Toe" ><Thumbnail title="Worst Tic-Tac-Toe" image={WorstTTT} /></Link>
                        <Link to="/Games/Banandersnatch" ><Thumbnail title="Banandersnatch" image={Banandersnatch} /></Link>
                        <Link to="/Games/Squids-Tower-Defense" ><Thumbnail title="Squids Tower Defense" image={SquidsTD} /></Link>
                        <Link to="/Games/Minigame-Mashup" ><Thumbnail title="Minigame Mashup" image={MinigameMashup} /></Link>
                        <Link to="/Games/Snake" ><Thumbnail title="Snake" image={Snake} /></Link>
                        <Link to="/Games/Mike-Piano" ><Thumbnail title="Mike Piano" image={MikePiano} /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;