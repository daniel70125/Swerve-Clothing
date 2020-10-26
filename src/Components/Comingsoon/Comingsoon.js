import React, { Component } from 'react';
import './Comingsoon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Pictures/swerve-logo.png';

class Comingsoon extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div style={{"width":"100vw", "height":"100vh"}}>
            <div class="bgimg">
                <div className="topleft">
                    <img style={{"width":"20vw"}} src={Logo} alt='swerve-logo' />
                </div>
                <div class="middle">
                    <h1>COMING SOON</h1>
                    <hr />
                    <p>30 days</p>
                </div>
                <div className="bottomleft">
                <a href='https://www.instagram.com/swervenation_clothing/'>
                    <FontAwesomeIcon icon={faInstagram} /> 
                </a>
                </div>
                </div>
                </div>

         );
    }
}
 
export default Comingsoon;