import React, { Component } from 'react';
import Experience from './Experience.js';
import DisplayExperience from './DisplayExperience.js';


class Experiences extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          selected: -1
        };
        this.updateSelected = this.updateSelected.bind(this)
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      updateSelected(num) {
        this.setState(() => ({
          selected: num
        }))
        console.log(num)
      }

    render() {
          const overlay = {
            position: 'relative',
            background: 'white',
            width: '80%',
            opacity: '0.9',
            left: '10%',
            boxShadow: '1px'
          }

          const spacer = {
              height: '10vh'
          }
          const smallSpacer = {
            height: '4vh'
          }
          const paragraphSpacer = {
            height: '2vh'
          }
        
          const titleText = {
            fontSize: '5vw'
          }
          const courseText = {
            fontSize: '1.8vw',
            paddingBottom: '1vw'
          }
          const subheading = {
            fontSize: '3vw'
          }
          const subText = {
            fontSize: '1.5vw'
          }
          const text = {
            fontSize: '1.3vw'
          }
          const padding = { 
            paddingLeft: '5vw',
            paddingRight: '5vw'
          }
          const removePadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
          }

        var titles = ["IT Intern: Digital Credit Union", "Parks and Recreation", "Tutor: Let's Get Ready", "Summer Intern: Cisco", "Student Liaison: SYFS", "Volunteer: Be Like Brit"]

        var times = ["May 2019 - Present", "June 2016 - August 2018", "June - August 2018", "July - August 2017", "August 2016 - May 2018", "February 2018"]
        var descs = []
        descs.push(["During my internship with DCU, I worked on a variety of projects throughout the IS department. In general, my job was to write scripts to automate processes done throughout the department. I was able to work on cleaning database files using KShell, automating new hire profile creation using powershell, and even write sql queries to create detailed dashboards for the department’s workflow data. Perhaps the most interesting project was finding a way to simulate live-templating for the departments documentation in Confluence using Groovy scripts. This internship exposed me to a plethora of new languages and frameworks as well as the Agile development process, and was an excellent experience."])
        descs.push(["In my 2 years working for Shrewsbury Parks and Recreation I worked as both a youth sports instructor and a camp counselor. As an instructor I acted as a coach for weekly games as well as assisted in teaching fundamental basketball skills to elementary and middle school children in my town. In both of these roles, I had to maintain a fun yet productive environment for all participants to feel welcome, but also keep organized and focused on completing the drills for that week.", "During the summer I served as a camp counselor, where my coworkers and I managed over 100 children from Kindergarten up to 7th Grade. Once again our priority a fun, yet safe, environment for the children to play, explore, and enjoy the summer. At the same time, I had to know when to be serious and ensure the kids are being respectful to each other as well as my coworkers and me. I really enjoyed working this job, the kids were very sweet (for the most part), and I am glad I was given the opportunity to be a part of it."])
        descs.push(["Let’s Get Ready is a nonprofit organization that provides tutoring services for low income high school students, especially the SAT. I served as a tutor for the math portion of the SAT, and I had a small class of around 10 students that I would teach on a weekly basis. I had to work to prepare a lecture that not only covered all the topics planned for that week, but was also engaging enough to keep students mostly interested in what was being taught. It was interesting trying to break down topics into its basic elements, so that I can explain how to solve and problem, and when to know that type of question is being asked. In order to be able to teach a topic, and answer any questions along the way, I had to know the topic thoroughly myself. The course was a success, and my students were able to improve their scores significantly."])
        descs.push(["I had a brief internship with Cisco Systems where I was able to get a look inside the cloud computing lab. Although I did assist in the automation of net- working software and virtual machine installations, the primary focus of my time there was learning the process of cloud computing, and getting a close look at the hardware that makes it all possible. Overall it was an interesting taste of the backing system behind many of the applications I use daily, such as Google Drive."])
        descs.push(["Shrewsbury Youth and Family Services (SYFS) is a nonprofit located in my home town that focuses on providing social services to low income households. For my Junior and Senior years of high school I served as a student liaison, participating in weekly meetings, keeping the board updated on the activities going on at my school, and volunteering to help run fundraisers and community events, such as the annual toy drive. By being a part of the organization I was able to see firsthand how board members planned events, managed funds, and brainstormed ideas to improve the quality of the services they provide. I met so many amazing people during my time with SYFS and I am so glad they let me join."])
        descs.push(["I spent a week in Grand Goâve, Haiti, helping out in Brit’s Home, associated with the organization Be Like Brit. During this week I, along with other volunteers, worked to build a home from scratch for a local family in need. We cleared the land, dug holes for the main support beams, even mixed the concrete we then poured to make the foundation. After a few days, an entire home had been constructed, ready for the family to move in. Along with this, Brit’s Home serves as an orphanage, and the volunteers and I spent time with the kids during evenings and nights throughout the week. It was a life-changing experience, a combination of extreme culture shock from seeing the harsh living conditions for the local people, as well as the love and selflessness shared by everyone at Brit’s Home."])

        var courses = ["Intro to AI", "Computer Organization & Programs", "Linear Algebra", "Multivariable Calculus", "Data Structures and Algorithms",  "Objects and Design"]

        var clubDescriptions = []
        clubDescriptions.push("Every week we would meet to learn how to create increasingly complex iOS applications using XCode. Some of these applications include a pindropping app and a chatroom app, and with each project we expanded what we were capable of creating, learning new tools and tricks along the way.")
        clubDescriptions.push("Learned Arduino and basic circuitry to build a robot that could pick up a vile, move forward with the vile, then place it in a bin. In my team my job was to write the arduino code that would make the robot function, although I did also get to go into the workshop a bit and help build the wooden frame.")
        clubDescriptions.push("I am a Sophomore Advisor for Freshman Council. This organization focuses on providing a welcoming and empowering environment for 30 first-year students each year, as well as hosting small events throughout the year that help boost campus morale.")
        clubDescriptions.push("Some of my responsibilities include handling the recruitment and selection of council members as well as organizing retreats, meetings, events, and volunteer opportunities. Since we are going through the process of changing our sponsoring organization, I am partaking in meetings and communicating with organizations throughout campus to set up a successful next year.")

        var toRender = null
        if (this.state.selected != -1){
          toRender = (<DisplayExperience title={titles[this.state.selected]} time={times[this.state.selected]} description={descs[this.state.selected]} />)
        }

        return (
            <div>
                <div style={spacer}></div>
                <div class="shadow-lg img-thumbnail" style={overlay}>
                        <div class="container text-center">
                            <h1 class="text-black text-center"style={titleText}><u>Experience</u></h1>
                            <h3 style={subText}>Click on any of the boxes below to learn more about some of my experiences</h3>
                        </div>
                        <div style={smallSpacer} />
                        {toRender}
                        <div clas="container" style={padding}>
                          <div class="row">
                            <div class="col" onClick={() => this.updateSelected(0)} style={removePadding}>
                              <Experience num={0} selected={this.state.selected} title={titles[0]}clicked={false}/>
                            </div>
                            <div class="col" onClick={() => this.updateSelected(1)} style={removePadding}>
                              <Experience num={1} selected={this.state.selected} title={titles[1]} clicked={false}/>
                            </div>
                            <div class="col" onClick={() => this.updateSelected(2)} style={removePadding}>
                              <Experience num={2} selected={this.state.selected} title={titles[2]} clicked={false}/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col" onClick={() => this.updateSelected(3)} style={removePadding}>
                              <Experience num={3} selected={this.state.selected} title={titles[3]} clicked={false}/>
                            </div>
                            <div class="col" onClick={() => this.updateSelected(4)} style={removePadding}>
                              <Experience num={4} selected={this.state.selected} title={titles[4]} clicked={false}/>
                            </div>
                            <div class="col" onClick={() => this.updateSelected(5)} style={removePadding}>
                              <Experience num={5} selected={this.state.selected} title={titles[5]} clicked={false}/>
                            </div>
                          </div>
                        </div>
                        <div style={spacer}></div>
                        <h1 style={subheading}><u>Clubs and Organizations</u></h1>
                        <div style={smallSpacer} />
                        <div class="container">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <h1 style={subheading}>iOS Club</h1>
                                  <h1 style={text}>{clubDescriptions[0]}</h1>
                                  <div style={smallSpacer} />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <h1 style={subheading}>BME Robotics</h1>
                                  <h1 style={text}>{clubDescriptions[1]}</h1>
                                </div>
                              </div>
                            </div>
                            <div class="col"><h1 style={subheading}>Freshman Council</h1>
                              <h1 style={text}>{clubDescriptions[2]}</h1>
                              <div style={paragraphSpacer} />
                              <h1 style={text}>{clubDescriptions[3]}</h1>
                            </div>
                          </div>
                        </div>
                        
                        
                        <div style={spacer}></div>
                        <div class="container">
                          <h1 class="text-black text-center"style={subheading}><u>Relevant Courses</u></h1>
                          <div style={smallSpacer} />
                          <div class="row">
                            <div class="col">
                              <h1 style={courseText}>{courses[0]}</h1>
                            </div>
                            <div class="col">
                              <h1 style={courseText}>{courses[1]}</h1>
                            </div>
                            <div class="col">
                              <h1 style={courseText}>{courses[2]}</h1>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <h1 style={courseText}>{courses[3]}</h1>
                            </div>
                            <div class="col">
                              <h1 style={courseText}>{courses[4]}</h1>
                            </div>
                            <div class="col">
                              <h1 style={courseText}>{courses[5]}</h1>
                            </div>
                          </div>
                        </div>
                        <div style={smallSpacer} />
                        <div style={smallSpacer} />
                    </div>
                    <div style={spacer}></div>
            </div>
        )
    }
}

export default Experiences;