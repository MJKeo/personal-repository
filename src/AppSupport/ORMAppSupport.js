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
            toRender = <Phone />
        }
        return (
            <div style={mainBG}>
                {toRender}
            </div> 
        )
    }
}

export default ORMAppSupport;