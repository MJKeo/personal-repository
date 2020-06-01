import React, { Component } from 'react';
import Desktop from './AppSupportDesktop.js'
import Phone from './AppSupportPhone.js';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

class ORMAppSupport extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.status = 0; // regular
        this.checkForRotation = this.checkForRotation.bind(this);
      }

    componentDidMount() {
        setInterval(this.checkForRotation, 100);
    }

    checkForRotation() {
        if (this.status == 0) {
            if (window.innerHeight < window.innerWidth) {
                this.setState({}); // force refresh
            }
        } else {
            if (window.innerHeight > window.innerWidth) {
                this.setState({}); // force refresh
            }
        }
    }

    render() {
        const mainBG = {
            background: "white",
            height: "100vh",
            width: "100%"
        }
        var toRender = <Desktop />
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            console.log("phone")
            if (window.innerHeight > window.innerWidth) {
                toRender = <Phone />
                this.status = 0;
            } else {
                this.status = 1;
            }
        }
        return (
            <div style={mainBG}>
                {toRender}
            </div> 
        )
    }
}

export default ORMAppSupport;