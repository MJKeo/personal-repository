import React, {Component } from 'react';
import ProjectsIcon from './images/projects.png';
import OverviewIcon from "./images/overview.png";
import BackIcon from "./images/back.png";
import { objectTypeSpreadProperty, optionalCallExpression } from '@babel/types';


class AboutMe extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          counter: 0,
          haveSelected: false,
          selected: 0
        };

        this.updateOpacity = this.updateOpacity.bind(this);
        this.moveProjects = this.moveProjects.bind(this);
        this.moveGeneralOverview = this.moveGeneralOverview.bind(this);
        this.fadeBackProjects = this.fadeBackProjects.bind(this);
        this.fadeBackBackProjects = this.fadeBackBackProjects.bind(this);
        this.fadeBackOverview = this.fadeBackOverview.bind(this);
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount() {
        //   setInterval(this.updateOpacity, 100)
      }

      updateOpacity() {
        //   this.setState(() => ({
        //       counter: this.state.counter + 1
        //   }));
        //   if (this.state.counter == 10) {
        //     this.setState(() => ({
        //         counter: 0
        //     }));
        //     var object = this.refs.thing;
        //     object.classList.remove("fade");
        //     clearInterval(this.updateOpacity);
        //   }
      }

      moveProjects() {
        var object = this.refs.projectsOption;
        console.log(this.refs.overviewOption.classList)
        if (this.state.selected == 0) {
            this.setState(() => ({
                selected: 1
            }));
            this.refs.overviewOption.classList.remove("fade-back");
            this.refs.overviewOption.classList.add("disappear");
            object.classList.remove("fade-back");
            object.classList.remove("padding");
            object.classList.add("to-move-projects");
            this.interval = setInterval(this.fadeBackProjects, 100)
        } else {
            this.setState(() => ({
                selected: 0
            }));
            object.classList.remove("fade-back");
            object.classList.add("move-back-projects");
            object.classList.remove("small-option");
            object.classList.add("option");
            this.interval = setInterval(this.fadeBackBackProjects, 100)
        }
      }

      moveGeneralOverview() {
        var object = this.refs.overviewOption;
        if (this.state.selected == 0) {
            object.classList.remove("padding2");
            object.classList.add("to-move-overview");
            this.interval = setInterval(this.fadeBackOverview, 100);
        }
      }

      fadeBackProjects() {
        var object = this.refs.projectsOption;
        if (this.state.counter >= 11) {
            object.classList.remove("to-move-projects");
            object.src=BackIcon;
            object.classList.add("fade-back");
            object.classList.remove("option");
            object.classList.add("small-option")
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
        if (this.state.counter >= 11) {
            this.refs.overviewOption.classList.remove("disappear");
            this.refs.overviewOption.classList.add("fade-back");
            object.classList.remove("move-back-projects");
            object.src=ProjectsIcon;
            object.classList.add("fade-back");
            object.classList.add("padding")
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
        if (this.state.counter >= 11) {
            object.classList.remove("to-move-overview");
            object.src=BackIcon;
            object.classList.add("fade-back");
            object.classList.remove("option");
            object.classList.add("small-option");
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
            position: 'relative',
            textAlign: 'left'
          }
        return (
            <div>
                <div style={overallDiv}>
                    <img ref="projectsOption" src={ProjectsIcon} alt="projects" class="option padding" onClick={() => this.moveProjects()}></img>
                    <img ref="overviewOption" src={OverviewIcon} alt="projects" class="option padding2" onClick={() => this.moveGeneralOverview()}></img>
                </div>
                {/* <img src={projectsIcon} class="fade shadow-lg" alt="projects" ref="thing"></img> */}
                {/* <div class="icon">
                    <h1 class="icon-text">Projects</h1>
                </div> */}
            </div>
        )
    }
}

export default AboutMe;