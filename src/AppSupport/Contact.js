import React, { Component } from 'react';
import './AppSupportStyles.css';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
      }

    render() {
        return (
            <div class="contact-bgd">
                <div class="contact-centering-divd">
                    <h1 class="copyright-textd">© 2020 Michael Keohane</h1>
                    <h1 class="contact-textd">If you have more questions, or want to request a refund, email me: <u>michaeljkeohane713@gmail.com</u></h1>
                </div>
            </div> 
        )
    }
}

export default Contact;