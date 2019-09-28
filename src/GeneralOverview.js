import React, { Component } from 'react';
import Race from './images/race.png';

class GeneralOverview extends Component {
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
            height: '4vh'
          }
          const tab = {
            listStylePosition: 'inside'
          }
          const trimmed = {
            width: '80%'
          }
          const racePic = {
            width: '50%'
          }
        return (
            <div>
                <div style={spacer}></div>
                <div class="shadow-lg img-thumbnail" style={overlay}>
                        <div class="container">
                            <h1 class="display-2 text-black text-center"><u>About Me</u></h1>
                            <div style={smallSpacer} />
                            <h2>My name is Michael Keohane, a 2nd year Computer Science major at the Georgia Institute of Technology, with concentrations in Intelligence and Media.</h2>
                            <div style={smallSpacer} />
                            <h1 class="display-5 text-black text-center"><u>What I Like to Do</u></h1>
                            <h2>I am primarily interested in application development. I have worked on web projects in ReactJS, as well as created applications on iOS, Android, and React Native. I am an aspiring full-stack developer, as I find both the creative process of designing clean and intuitive UIs and constructing algorithms to analyze data interesting. Whether it is a hackathon, a long term team project, or just an interesting idea I am pursuing on my own, I enjoy turning concepts into working software.</h2>
                            <div style={smallSpacer} />
                            <div class="row">
                              <div class="col" style={tab}>
                                <h1 class="display-5"><u>Programming Languages</u></h1>
                                <div style={trimmed} class="container mr-auto">
                                <ul class="text-left">
                                  <h2><li>Java</li></h2>
                                  <h2><li>JavaScript</li></h2>
                                  <h2><li>Python</li></h2>
                                  <h2><li>HTML</li></h2>
                                  <h2><li>CSS</li></h2>
                                  <h2><li>SQL</li></h2>
                                  <h2><li>Swift (basic)</li></h2>
                                  <h2><li>Perl (basic)</li></h2>
                                </ul>
                                </div>
                              </div>
                              <div class="col " style={tab}>
                                <h1 class="display-5"><u>Frameworks and Tools</u></h1>
                                <div style={trimmed} class="container mr-auto">
                                <ul class="text-left">
                                  <h2><li>React</li></h2>
                                  <h2><li>Git</li></h2>
                                  <h2><li>Firebase</li></h2>
                                  <h2><li>Powershell</li></h2>
                                  <h2><li>XCode</li></h2>
                                  <h2><li>Android Studio</li></h2>
                                  <h2><li>Arduino</li></h2>
                                  <h2><li>Jira and Confluence</li></h2>
                                </ul>
                                </div>
                              </div>
                            </div>
                            <div style={smallSpacer} />
                            <h1 class="display-5 text-black text-center"><u>Other Interests</u></h1>
                            <h2>Aside from my academic career one of my biggest hobbies is running. I've participated in 5k races with my family since I was 12, and did both cross country and track and field (but I was more of a sprinter and jumper in track). I also really enjoy weightlifting and in my spare time I have fun making simple games, usually in JavaScript.</h2>
                            <div style={smallSpacer} />
                            <img src={Race} style={racePic}/>
                            <p>(Here's a photo of me and my family before our annual 'Ras na hEireann' 5k race)</p>
                        </div>
                    </div>
                    <div style={spacer}></div>
            </div>
        )
    }
}

export default GeneralOverview;