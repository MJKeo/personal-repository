// import React
import React, { Component } from 'react';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/AboutMe.css";


class AboutMe extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="about-me-div">
                    <h1 class="section-title cyan">About Me</h1>
                    <div class="about-me-text white">
                        <h1>Who am I? Well, as I said on the homepage my name is Michael
                            Keohane, and I’m a student at Georgia Tech studying
                            Computer Science. But here’s a little bit more about me.</h1>
                        <h1>First of all, I love to create. Whether it’s a website, an app, or
                            a dumb JavaScript game (I have lots of those), I just enjoy
                            bringing an idea to life. But I don’t just mean designing, I
                            also have an interest in AI, especially within games. One of my
                            favorite things is taking something I’ve used or seen before
                            (ie. a blog), and trying to make one from scratch, and figure out
                            how things work behind the scenes. You can see some of these in my projects section, go check it out!</h1>
                        <h1>Outside of technology I enjoy running and weightlifting. I’m not very good at either,
                            I just think it’s fun. I also enjoy music, having played both the piano and
                            the saxophone, and I’m a huge fan of Panic! at the Disco.</h1>
                        <h2>If you want to contact me my email is <a class="dark-cyan" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=mkeohane@gatech.edu">mkeohane@gatech.edu</a>, or click one of the links
                            on the navbar above.</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;