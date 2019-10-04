import React, {Component } from 'react';
import ProjectsIcon from './images/projects.png';
import OverviewIcon from "./images/overview.png";
import BackIcon from "./images/back.png";
import ExperienceIcon from "./images/experience2.png";
import GeneralOverview from "./GeneralOverview";
import Experiences from "./Experiences";
import Projects from "./Projects";
import { objectTypeSpreadProperty, optionalCallExpression } from '@babel/types';
import { Link } from 'react-router-dom';



class AboutMe extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          counter: 0,
          haveSelected: false,
          selected: 0,
          page: <GeneralOverview />,
          interval: null
        };

        this.updateOpacity = this.updateOpacity.bind(this);
        this.moveProjects = this.moveProjects.bind(this);
        this.moveExperience = this.moveExperience.bind(this);
        this.moveGeneralOverview = this.moveGeneralOverview.bind(this);
        this.fadeBackProjects = this.fadeBackProjects.bind(this);
        this.fadeBackBackProjects = this.fadeBackBackProjects.bind(this);
        this.fadeBackOverview = this.fadeBackOverview.bind(this);
        this.fadeBackBackOverview = this.fadeBackBackOverview.bind(this);
        this.fadeBackExperience = this.fadeBackExperience.bind(this);
        this.fadeBackBackExperience = this.fadeBackBackExperience.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount() {
        this.setState({
            interval: setInterval(this.updateOpacity, 100)
          });
      }

      updateOpacity() {
          this.setState(() => ({
              counter: this.state.counter + 1
          }));
          if (this.state.counter == 5) {
            this.setState(() => ({
                counter: 0
            }));
            var object1 = this.refs.projectsOption;
            object1.classList.remove("fade");
            var object2 = this.refs.overviewOption;
            object2.classList.remove("fade");
            var object3 = this.refs.experienceOption;
            object3.classList.remove("fade");
            var object4 = this.refs.home;
            object4.classList.remove("fade");
            clearInterval(this.state.interval);
          }
      }

      moveProjects() {
        var object = this.refs.projectsOption;
        var page = this.refs.pageDisplay;
        var home = this.refs.home;
        if (this.state.selected == 0) {
            this.setState(() => ({
                selected: 1,
                page: <Projects />
            }));
            object.classList.remove("fade-back");
            this.refs.overviewOption.classList.remove("fade-back");
            this.refs.overviewOption.classList.add("disappear");
            this.refs.experienceOption.classList.remove("fade-back");
            this.refs.experienceOption.classList.add("disappear");
            object.classList.remove("fade-back");
            object.classList.remove("padding2");
            object.classList.add("to-move-projects");
            home.classList.remove("fade-back");
            home.classList.add("disappear");
            this.interval = setInterval(this.fadeBackProjects, 100)
        } else if (this.state.selected == 1) {
            this.setState(() => ({
                selected: 0
            }));
            page.classList.add("fade-out");
            page.classList.remove("fade-back");
            object.classList.remove("fade-back");
            object.classList.add("move-back-projects");
            object.classList.remove("small-option");
            object.classList.add("option");
            this.interval = setInterval(this.fadeBackBackProjects, 100)
        }
      }

      moveGeneralOverview() {
        var object = this.refs.overviewOption;
        var home = this.refs.home;
        var page = this.refs.pageDisplay;
        console.log(this.refs.overviewOption.classList)
        if (this.state.selected == 0) {
            this.setState(() => ({
                selected: 2,
                page: <GeneralOverview />
            }));
            object.classList.remove("fade-back");
            this.refs.projectsOption.classList.remove("fade-back");
            this.refs.projectsOption.classList.add("disappear");
            this.refs.experienceOption.classList.remove("fade-back");
            this.refs.experienceOption.classList.add("disappear");
            object.classList.remove("padding");
            object.classList.add("to-move-overview");
            home.classList.remove("fade-back");
            home.classList.add("disappear");
            this.interval = setInterval(this.fadeBackOverview, 100);
        } else  if (this.state.selected == 2) {
            this.setState(() => ({
                selected: 0
            }));
            page.classList.add("fade-out");
            page.classList.remove("fade-back");
            object.classList.remove("fade-back");
            object.classList.add("move-back-overview");
            object.classList.remove("small-option");
            object.classList.add("option");
            this.interval = setInterval(this.fadeBackBackOverview, 100)
        }
      }

      moveExperience() {
        var object = this.refs.experienceOption;
        var home = this.refs.home;
        var page = this.refs.pageDisplay;
        console.log(object.classList);
        if (this.state.selected == 0) {
            this.setState(() => ({
                selected: 3,
                page: <Experiences />
            }));
            object.classList.remove("fade-back");
            this.refs.overviewOption.classList.remove("fade-back");
            this.refs.overviewOption.classList.add("disappear");
            this.refs.projectsOption.classList.remove("fade-back");
            this.refs.projectsOption.classList.add("disappear");
            object.classList.remove("fade-back");
            object.classList.remove("padding3");
            object.classList.add("to-move-experience");
            home.classList.remove("fade-back");
            home.classList.add("disappear");
            this.interval = setInterval(this.fadeBackExperience, 100);
        } else  if (this.state.selected == 3) {
            this.setState(() => ({
                selected: 0
            }));
            page.classList.add("fade-out");
            page.classList.remove("fade-back");
            object.classList.remove("fade-back");
            object.classList.add("move-back-experience");
            object.classList.remove("small-option");
            object.classList.add("option");
            this.interval = setInterval(this.fadeBackBackExperience, 100)
        }
      }

      fadeBackProjects() {
        var object = this.refs.projectsOption;
        var page = this.refs.pageDisplay;
        var home = this.refs.home;
        if (this.state.counter >= 11) {
            object.classList.remove("to-move-projects");
            object.src=BackIcon;
            object.classList.add("fade-back");
            object.classList.remove("option");
            object.classList.add("small-option");
            page.classList.remove("gone");
            home.classList.add("gone");
            page.classList.add("fade-back");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }

      fadeBackBackProjects() {
        var object = this.refs.projectsOption;
        var home = this.refs.home;
        var page = this.refs.pageDisplay;
        if (this.state.counter >= 11) {
            this.refs.overviewOption.classList.remove("disappear");
            this.refs.overviewOption.classList.add("fade-back");
            this.refs.experienceOption.classList.remove("disappear");
            this.refs.experienceOption.classList.add("fade-back");
            object.classList.remove("move-back-projects");
            object.src=ProjectsIcon;
            object.classList.add("fade-back");
            object.classList.add("padding2");
            page.classList.add("gone");
            home.classList.remove("gone");
            home.classList.add("fade-back");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }

      fadeBackOverview() {
        var object = this.refs.overviewOption;
        var page = this.refs.pageDisplay;
        var home = this.refs.home;
        if (this.state.counter >= 11) {
            object.classList.remove("to-move-overview");
            object.src=BackIcon;
            object.classList.add("fade-back");
            object.classList.remove("option");
            object.classList.add("small-option");
            page.classList.remove("gone");
            home.classList.add("gone");
            page.classList.add("fade-back");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }

      fadeBackBackOverview() {
        var object = this.refs.overviewOption;
        var home = this.refs.home;
        var page = this.refs.pageDisplay;
        if (this.state.counter >= 11) {
            this.refs.projectsOption.classList.remove("disappear");
            this.refs.projectsOption.classList.add("fade-back");
            this.refs.experienceOption.classList.remove("disappear");
            this.refs.experienceOption.classList.add("fade-back");
            object.classList.remove("move-back-overview");
            object.src=OverviewIcon;
            object.classList.add("fade-back");
            object.classList.add("padding");
            page.classList.add("gone");
            home.classList.remove("gone");
            home.classList.add("fade-back");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }

      fadeBackExperience() {
        var object = this.refs.experienceOption;
        var page = this.refs.pageDisplay;
        var home = this.refs.home;
        if (this.state.counter >= 11) {
            object.classList.remove("to-move-experience");
            object.src=BackIcon;
            object.classList.add("fade-back");
            object.classList.remove("option");
            object.classList.add("small-option");
            page.classList.remove("gone");
            page.classList.add("fade-back");
            home.classList.add("gone");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }

      fadeBackBackExperience() {
        var object = this.refs.experienceOption;
        var home = this.refs.home;
        var page = this.refs.pageDisplay;
        if (this.state.counter >= 11) {
            this.refs.projectsOption.classList.remove("disappear");
            this.refs.projectsOption.classList.add("fade-back");
            this.refs.overviewOption.classList.remove("disappear");
            this.refs.overviewOption.classList.add("fade-back");
            object.classList.remove("move-back-experience");
            object.src=ExperienceIcon;
            object.classList.add("fade-back");
            object.classList.add("padding3");
            page.classList.add("gone");
            home.classList.remove("gone");
            home.classList.add("fade-back");
            clearInterval(this.interval);
            this.setState(() => ({
                counter: 0
            }));
        } else {
            this.setState(() => ({
                counter: this.state.counter + 1
            }))
        }
      }
    render() {
        const overallDiv = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '0px',
            top: '0px',
            textAlign: 'left'
          }

          const noDeco = {
            textDecoration: 'none',
            width: '5vw'
          }
          const border = {
            border: 'solid'
          }

          const page = {
              marginRight: '10vw',
              width: '80vw'
          }
        return (
            <div>
                <div style={overallDiv}>
                    <img ref="projectsOption" src={ProjectsIcon} alt="projects" class="fade option padding2" onClick={() => this.moveProjects()}></img>
                    <img ref="overviewOption" src={OverviewIcon} alt="overview" class="fade option padding" onClick={() => this.moveGeneralOverview()}></img>
                    <img ref="experienceOption" src={ExperienceIcon} alt="experience" class="fade option padding3" onClick={() => this.moveExperience()}></img>
                    <div ref="home" class="fade">
                        <Link to="/" style={noDeco}><h2 class="text-white-50 home">Home</h2></Link>
                    </div>
                </div>
                <div ref="pageDisplay" class="container-fluid gone" style={page}>
                    {this.state.page}
                </div>
            </div>
        )
    }
}

export default AboutMe;