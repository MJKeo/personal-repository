// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
import Thumbnail from "../components/Thumbnail.js";
// import images
import Tyes from "../../Images/tyes-icon.png";
import Strength from "../../Images/strength-icon.jpeg";
import VIP from "../../Images/vip-icon.jpeg";
import RL from "../../Images/rl-icon.jpeg";
import Chaos from "../../Images/chaos-icon.jpg"
import Shatter from "../../Images/shatter-icon.jpg";
import Ape from "../../Images/ape-icon.png";
import Space from "../../Images/space-icon.png";
// import styling
import "../styling/Sections.css";


class Projects extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Navbar />
                <h1 class="section-title cyan">Projects</h1>
                <div class="thumbnail-centering-div">
                    <div class="thumbnail-div">
                        <Link to="/Projects/Tyes" style={{textDecoration: "none"}} ><Thumbnail image={Tyes} title={"Tyes"}/></Link>
                        <Link to="/Projects/Strength-Progress-Tracker" style={{textDecoration: "none"}} ><Thumbnail image={Strength} title={"Strength Progress Tracker"}/></Link>
                        <Link to="/Projects/Intelligent-Tutoring-System" style={{textDecoration: "none"}} ><Thumbnail image={VIP} title={"Intelligent Tutoring System"}/></Link>
                        <Link to="/Projects/Home-Depot-RL-Hackathon" style={{textDecoration: "none"}} ><Thumbnail image={RL} title={"Reinforcement Learning Hackathon"}/></Link>
                        <Link to="/Projects/Chaos-Colleagues" style={{textDecoration: "none"}} ><Thumbnail image={Chaos} title={"Chaos Colleagues"}/></Link>
                        <Link to="/Projects/Project-Shatter" style={{textDecoration: "none"}} ><Thumbnail image={Shatter} title={"Project Shatter"}/></Link>
                        <Link to="/Projects/Ape-Unit" style={{textDecoration: "none"}} ><Thumbnail image={Ape} title={"ApeUnit"}/></Link>
                        <Link to="/Projects/Space-Trader" style={{textDecoration: "none"}} ><Thumbnail image={Space} title={"Space Trader"}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;