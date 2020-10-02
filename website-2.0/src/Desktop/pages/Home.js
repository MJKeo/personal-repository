// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Sections from "../components/HomeSection.js";
// import images
import MyFace from "../../Images/my-face.jpeg";
import GithubIcon from "../../Images/github-icon.png";
import ResumeIcon from "../../Images/resume-icon.png";
import LinkedInIcon from "../../Images/linkedin-icon.png";
import DownArrowIcon from "../../Images/down-arrow-icon.png"
// sections icons
import AboutMeIcon from "../../Images/about-me-icon.png";
import ProjectsIcon from "../../Images/projects-icon.png";
import ExperienceIcon from "../../Images/experience-icon.png";
import GamesIcon from "../../Images/games-icon.png";
import BlogIcon from "../../Images/blog-icon.png";
import SecretIcon from "../../Images/secret-icon.png";
// import PDF
import ResumePDF from "../../Images/Resume_Keohane,Michael_Fall2020.pdf";
// import styling
import "../styling/Home.css"


class Home extends Component {
    constructor(props) {
        super(props);

        // methods
        this.showSections = this.showSections.bind(this);
        this.checkForScroll = this.checkForScroll.bind(this);

        // variables
        this.waitForScrollInterval = null;
    }

    componentDidMount() {
        // wait a second in case they refreshed the page when scrolled down
        setTimeout(function() {
            this.waitForScrollInterval = setInterval(this.checkForScroll, 100)
        }.bind(this), 1000)
    }

    checkForScroll() {
        if (this.refs.sections.getClientRects()[0].y < window.innerHeight - 50) {
            this.showSections()
            clearInterval(this.waitForScrollInterval)
        }
    }

    showSections() {
        this.refs.sections.classList.add("fade-in");
        this.refs.downArrow.classList.add("hide-home-down-arrow");
    }

    render() {
        return (
            <div class="home-main-div">
                <img class="home-big-face" src={MyFace} alt="Me" />
                <div class="home-quick-links-div">
                    <a href="https://github.com/MJKeo"><img class="home-quick-link" src={GithubIcon} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/michael-keohane"><img class="home-quick-link" src={LinkedInIcon} alt="linkedin" /></a>
                    <a href={ResumePDF}><img class="home-quick-link" src={ResumeIcon} alt="resume" /></a>
                </div>
                <h1 class="home-title white">Hello!</h1>
                <h1 class="home-subtitle off-white">My name is Michael Keohane, and welcome to my website! I’m a student 
                studying Computer Science at Georgia Tech, but I’m also a <span class="dark-cyan">CREATOR</span>,   
                <span class="dark-cyan"> DESIGNER</span>, and <span class="dark-cyan">INNOVATOR</span>. Click on any of the 
                sections below to learn more about who I am and what I’ve done!</h1>
                <img ref="downArrow" class="home-down-arrow" src={DownArrowIcon} alt="V" />
                <div ref="sections" class="home-sections-div">
                    <div class="home-section-row">
                        <Link to="/AboutMe" style={{textDecoration: "none"}}>
                            <Sections image={AboutMeIcon} title={"About Me"} description={"Just a little background who I am and what I like to do "} />
                        </Link>
                        <Link to="/Projects" style={{textDecoration: "none"}}>
                            <Sections image={ProjectsIcon} title={"Projects"} description={"Take a look at some of the projects I’ve worked on over the years"} />
                        </Link>
                    </div>
                    <div class="home-section-row">
                        <Link to="/Experience" style={{textDecoration: "none"}}>
                            <Sections image={ExperienceIcon} title={"Experience"} description={"My past and present employment, as well as my skills"} />
                        </Link>
                        <Link to="/Games" style={{textDecoration: "none"}}>
                            <Sections image={GamesIcon} title={"Games"} description={"I like to make games, a lot. Check out some of my favorites!"} />
                        </Link>
                    </div>
                    <div class="home-section-row">
                        <Link to="/Blog" style={{textDecoration: "none"}}>
                            <Sections image={BlogIcon} title={"Blog"} description={"I sometimes post here with cool updates, check it out!"} />
                        </Link>
                        <Link to="/Secret" style={{textDecoration: "none"}}>
                            <Sections image={SecretIcon} title={"???"} description={"Currently a work in progress, but check back in another time!"} />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;