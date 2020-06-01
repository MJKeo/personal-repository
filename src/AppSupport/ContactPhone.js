import React, { Component } from 'react';
import './PhoneStyles.css';

class ContactPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
      }

    render() {
        return (
            <div class="contact-bg">
                <div class="contact-centering-div">
                    <h1 class="copyright-text">© 2020 Michael Keohane</h1>
                    <h1 class="contact-text">If you have more questions, or want to request a refund, email me: <u>michaeljkeohane713@gmail.com</u></h1>
                </div>
            </div> 
        )
    }
}

export default ContactPhone;