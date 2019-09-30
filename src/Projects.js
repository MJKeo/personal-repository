import React, { Component } from 'react';
import Project from './Project.js';
import Tyes1 from './images/Tyes1.png'
import Tyes2 from './images/Tyes2.png'
import Tyes3 from './images/Tyes3.png'
import PS1 from './images/PS1.png'
import PS2 from './images/PS2.png'
import PS3 from './images/PS3.png'
import PS4 from './images/PS4.png'
import ST1 from './images/ST1.png'
import ST2 from './images/ST2.png'
import ST3 from './images/ST3.png'
import APE1 from './images/APE1.png'
import APE2 from './images/APE2.png'
import APE3 from './images/APE3.png'
import APE4 from './images/APE4.png'


class Projects extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
          const overlay = {
            position: 'relative',
            background: 'white',
            width: '80%',
            opacity: '0.8',
            left: '10%',
            boxShadow: '1px'
          }
          const navbar = {
            position: 'fixed',
            background: 'white',
            width: '100%',
            left: '0px',
            top: '0px'
        }
          const smallLogo = {
            borderRadius: '50%',
            width: '5.5vh',
          }
          const navText = {
            fontSize: '4vh',
            color: '#1D97C2',
            paddingLeft: '4vw',
            paddingRight: '4vw'
          }
          const centerly = {
            margin: '0',
            float: 'none',
            listStyleType: 'none'
          }
      
          const spacer = {
              height: '10vh'
          }
          const smallSpacer = {
            height: '6vh'
        }

        var arr = ["one", "two", "three"];

        //var f = arr.map(ar => <Project thing={ar} />)
        var titles = ["Intelligent Tutoring System", "Tyes", "Project Shatter", "Space Trader", "Ape Unit"]

        var times = ["August 2019 - Present", "August 2018 - Present", "January 2019", "January - April 2019", "January - April 2019"]
        var descs = []
        descs.push(["This semester I am working on a Vertically Integrated Product through Georgia Tech. My team is tasked with working on an intelligent review system, which will be used by teachers and TAs to see how their students have performed on assignments throughout the semester.", "This project involves creating a ReactJS front end, which will display easy to understand graphs and charts that can be filtered to give a variety of information at different levels of details. It also uses Flask for the backend, which will be communicating with a MySQL database in order to query and filter data to be displayed."])
        descs.push(["For the past year I, along with 7 teammates, have conducted research into the field of ‘health and well being’, identified a major issue to tackle, and explored possible solutions. We ultimately decided to focus on the issue of muscular spasticity, and are working to develop smart testing technology to create more quantifiable data that can help therapists assess the condition and progress of their patients.", "My role in our current objective of developing a fully functional prototype is to work on the application that will be connected to our physical device. It will provide an intuitive UI that therapists will use to conduct their tests. This application will also serve as a patient-therapist portal, allowing therapists to hold their patients accountable for completing exercises between meetings, thereby increasing the rate of recovery."])
        descs.push(["I, along with 3 other students, competed in the 2019 Collegiate Cup Hackathon, where we created Project Shatter. This hackathon focused on poverty in Georgia, and how so many individuals are living without access to the internet. This creates a glass ceiling for students growing up in this situation, especially if they had any interest in Computer Science. Our name comes from our goal of breaking this barrier and provide  the means necessary for students throughout rural Georgia to be successful in the field of Computer Science. ", "How we went about doing this is creating a framework to connect students in these impoverished regions with companies or nonprofit organizations looking for cheap work on small tasks. These organizations can post a task that they would like done, and students in the system apply to be hired for that task. This way, students can spend time learning how to code, and get paid to do so. Instead of having to work a different part time job to support their family, students can make money while setting themselves up for a more successful future."])
        descs.push(["For my Objects and Design class, we worked on creating a game called Space Trader. This game allows you to play as a merchant in space, going from planet to planet buying and selling various goods to make a profit, or possibly attacking other ships to steal their loot, all while avoiding space pirates or the space police if necessary. It was initially created using Android Studio, and my team and I learned to use the process of Agile development to create milestones for the semester, and sprints along the way to make sure we reached them. ", "As an extra project, my team and I worked to create a second version of this game, using React Native for our UI, and having Firebase as the backend. "])
        descs.push(["Last Spring, few of my friends and I worked together to make a small organization for our Data Structures and Algorithms class. We focused on creating in-depth JUnit tests for our assignments, which was allowed for that class, and we would share these tests with the rest of the class. For each test, we would create a simple game that can be played on completion of the test, as an added incentive.", "In order to do this, I had to teach myself JavaScript, which is what the vast majority of the games were made in. Although they are not very complex, we made new games every week, alongside the extensive tests, and it became a major aspect of the class for many of our classmates and ourselves."])

        var links = []
        links.push("https://www.vip.gatech.edu/teams/intelligent-tutoring-system")
        links.push("https://github.com/gc-tyes")
        links.push("https://devpost.com/software/project-shatter")
        links.push("N/A")
        links.push("https://ape-unit.github.io/")

        var images = [[], [Tyes1, Tyes2, Tyes3], [PS1, PS2, PS3, PS4], [ST1, ST2, ST3], [APE1, APE2, APE3, APE4]]

        var overall = []
        for(var i = 0; i < titles.length; i++) {
          overall.push([titles[i], times[i], descs[i], links[i], images[i]])
        }

        var toRender = overall.map(element => (<Project title={element[0]} time={element[1]} description={element[2]} link={element[3]} image={element[4]} />))

        return (
            <div>
                <div style={spacer}></div>
                <div class="shadow-lg img-thumbnail" style={overlay}>
                        <div class="text-center">
                            <h1 class="display-2 text-black text-center"><u>Projects</u></h1>
                            <h3>Click on any of the titles below to learn more about each project</h3>
                        </div>
                        <div style={spacer} />
                        {toRender}
                    </div>
                    <div style={spacer}></div>
            </div>
        )
    }
}

export default Projects;