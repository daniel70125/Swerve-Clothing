import React, { Component } from 'react';
import './Contact.scss';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div id='contact-cont'>
                <h1>Contact Us</h1>
                <div id='contact-main'>
                    <div className='input3'>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </div>
                    <div className='input3'>
                        <input type="text" id="email" name="email" placeholder="E-Mail.." />
                    </div>
                    <div className='input3'>
                        <input type="text" id="phone" name="phone" placeholder="Phone" />
                    </div>
                    <div style={{"width":"100%"}}>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>
                    </div>
                    {/* <Button variant="contained" color="primary" href="#contained-buttons">Submit</Button> */}
                    <Button style={{"color":"white", "backgroundColor":"#09091c"}} variant="contained" endIcon={<SendIcon></SendIcon>}>Send</Button>
                </div>
            </div>
         );
    }
}
 
export default Contact;