import React, { Component } from 'react';
import './Contact.scss';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GMap from '../GoogleMap/GoogleMap';
// import Footer from '../Footer/Footer';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div id='contact-cont'>
                <h2>Contact Us</h2>
                <GMap  />
                <div id='contact-info-box'>
                    <div className='contact-input-fields half-boxes'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Phone' />
                        <input type='text' placeholder='Country' />
                        <textarea placeholder='Your Message'></textarea><br />
                        <Button variant="contained" style={{"background":"lightgrey"}} disableElevation>
                            Submit <SendIcon /></Button>
                    </div>
                    <div id='main-contact-box' style={{"display":"block", "overflow":"hidden"}} className='half-boxes'>
                        <div className='main-contact-box-divs'>
                            <PhoneInTalkIcon className='main-contact-icon' /><span>+11 (019) 25184203 +11 (018) 50950555</span> <br />
                        </div>
                        <div className='main-contact-box-divs'>
                            <MailOutlineIcon className='main-contact-icon' /><span>companyname123@gmail.com</span>
                        </div>
                        <div className='main-contact-box-divs'>
                            <LocationOnIcon className='main-contact-icon' /><span>123 Somewhere ave. | Sunnyvale, CA 70000</span>
                        </div>
                    <div id='contactP'>
                        <p style={{"marginLeft":"10px", "paddingTop":"10px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;