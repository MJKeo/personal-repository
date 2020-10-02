// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Dropdown from "./Dropdown.js";
// import images
import MyFace from "../../Images/my-face.jpeg";
import GithubIcon from "../../Images/github-icon.png";
import ResumeIcon from "../../Images/resume-icon.png";
import LinkedInIcon from "../../Images/linkedin-icon.png";
// import PDF
import ResumePDF from "../../Images/Resume_Keohane,Michael_Fall2020.pdf";


class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div class="navbar">
                    <div class="navbar-left">
                        <Link to="/" ><img class="navbar-face" src={MyFace} alt="me :)" /></Link>
                        <a href="https://github.com/MJKeo"><img class="navbar-quick-link" src={GithubIcon} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/michael-keohane"><img class="navbar-quick-link" src={LinkedInIcon} alt="linkedin" /></a>
                        <a href={ResumePDF}><img class="navbar-quick-link" src={ResumeIcon} alt="resume" /></a>
                    </div>
                    <Dropdown />
                </div>
            </div>
        )
    }
}

export default Navbar;