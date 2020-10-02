// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// impor images
import DropdownIcon from "../../Images/dropdown-icon.png";
import PlusIcon from "../../Images/plus-icon.png";
// import styling
import "../styling/Dropdown.css";


class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        if (!this.state.isOpen) {
            this.refs.dropdown.classList.add("open-drawer");
            this.refs.dropdown.classList.remove("close-drawer");
            this.refs.image.classList.add("rotate-plus");
            this.refs.image.classList.remove("unrotate-plus");
        } else {
            this.refs.dropdown.classList.add("close-drawer");
            this.refs.dropdown.classList.remove("open-drawer");
            this.refs.image.classList.remove("rotate-plus");
            this.refs.image.classList.add("unrotate-plus");
        }
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        console.log(this.state.isOpen)
        const image = this.state.isOpen ? PlusIcon : DropdownIcon
        return (
            <div class="dropdown-div">
                <img ref="image" src={image} alt="menu" onClick={this.toggle}/>
                <div ref="dropdown" class="dropdown-items">
                    <div class="dropdown-items-row">
                        <Link to="/" style={{textDecoration: "none"}}><h2 class="dark-cyan">Home</h2></Link>
                        <Link to="/AboutMe" style={{textDecoration: "none"}}><h2 class="dark-cyan">About Me</h2></Link>
                    </div>
                    <div class="dropdown-items-row">
                        <Link to="/Projects" style={{textDecoration: "none"}}><h2 class="dark-cyan">Projects</h2></Link>
                        <Link to="/Experience" style={{textDecoration: "none"}}><h2 class="dark-cyan">Experience</h2></Link>
                    </div>
                    <div class="dropdown-items-row">
                        <Link to="/Games" style={{textDecoration: "none"}}><h2 class="dark-cyan">Games</h2></Link>
                        <Link to="/Blog" style={{textDecoration: "none"}}><h2 class="dark-cyan">Blog</h2></Link>
                    </div>
                    <div class="dropdown-items-row">
                        <Link to="/Secret" style={{textDecoration: "none"}}><h2 class="dark-cyan">Secret</h2></Link>
                        <h2 class="dark-cyan"></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDown;