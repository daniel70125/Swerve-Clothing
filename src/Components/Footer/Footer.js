import React, { Component } from 'react';
import './Footer.scss';
import {  faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
                <p>Author: John Doe</p>
                <p>Email: <a href="mailto:hege@example.com">johndoe@gmail.com</a></p>
                <div id='footer-social-media'>
                    {/* <a href='#'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a> */}
                    <a href='https://www.instagram.com/swervenation_clothing/'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </footer>
         );
    }
}
 
export default Footer;