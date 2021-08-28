import React, {Component} from 'react';
import './About.scss';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter , faInstagramSquare, faFacebook} from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    componentDidMount(){
        let overlayWrappers = document.querySelectorAll('.about-team-card-wrapper');
        let overlays = document.querySelectorAll('.about-team-overlay-wrapper');
        // 'For' loop because .map wasn not working
        for (let index = 0; index < overlayWrappers.length; index++) {
            const element = overlayWrappers[index];
            element.addEventListener('mouseover', () => {
                overlays[index].style.height = '37vh';
            })
            element.addEventListener('mouseleave', () => {
                overlays[index].style.height = '0';
            })
        }
    }
    render() {
        return ( 
            <div id='about-wrapper'>
                <div id='portfolio-header'>
                    <div id='header-text'>
                        <h2>About Us</h2>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link style={{"color":"white"}} to="/">
                                Home
                            </Link>
                            <Typography style={{"color":"white"}}>About Us</Typography>
                        </Breadcrumbs>
                    </div>
                </div>
    
                <p className='about-p-headers'>Who We Are</p>
                <p id='about-p-headers-whoweare'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
                tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero
                eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.</p>
                <div style={{"textAlign":"center"}}>
                    <img id='about-img-signature' style={{"margin":"5vh auto"}} src='https://portotheme.com/html/molla/assets/images/about/about-2/signature.png' alt='signature example' />
                </div>
                <div style={{"textAlign":"center"}}>
                    <img id='about-img-passion' src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='passion image'/>
                </div>
                
                <div id='about-qualities-wrapper'>
                    <div>
                        <FontAwesomeIcon style={{"fontSize":"30px"}} icon={faPuzzlePiece} />
                        <p className='about-p-firstchild'>Design Quality</p>
                        <p className='about-p-secondchild'>“Quality becomes in part a matter of what you need the garment to do and how it best can do it,” says Becky French. 
                           Quality cloth, in other words, should feel good, wash and wear well, and provide good service.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{"fontSize":"30px"}} icon={faLifeRing} />
                        <p className='about-p-firstchild'>Professional Support</p>
                        <p className='about-p-secondchild'>“Quality becomes in part a matter of what you need the garment to do and how it best can do it,” says Becky French. 
                           Quality cloth, in other words, should feel good, wash and wear well, and provide good service.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{"fontSize":"30px"}} icon={faPuzzlePiece} />
                        <p className='about-p-firstchild'>Design Quality</p>
                        <p className='about-p-secondchild'>“Quality becomes in part a matter of what you need the garment to do and how it best can do it,” says Becky French. 
                           Quality cloth, in other words, should feel good, wash and wear well, and provide good service.
                        </p>
                    </div>
                </div>
    
                <div id='about-customer-stats-img'>
                    <div>
                        <p>12</p>
                        <p>Awards</p>
                    </div>
                    <div>
                        <p>100%</p>
                        <p>Return Clients</p>
                    </div>
                    <div>
                        <p>2+</p>
                        <p>Years In Business</p>
                    </div>
                    <div>
                        <p>12k+</p>
                        <p>Happy Customers</p>
                    </div>
                </div>
    
                <p className='about-p-headers'>Meet Our Team</p>
                <div id='about-team-wrapper'>
                    <div className='about-team-card-wrapper'>
                        <div className='about-team-img-overlay-cont'>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-2.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>John Doe</p>
                        <p>Founder & C.E.O.</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-1.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Amber Anderson</p>
                        <p>Vice President</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-3.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Katy Williams</p>
                        <p>Sales & Marketing</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-4.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Dante Wright</p>
                        <p>Product Manager</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-5.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Austin Williams</p>
                        <p>Product Manager</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-6.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Bruce Keller</p>
                        <p>Product Manager</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-7.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Lola Lawson</p>
                        <p>Product Manager</p>
                    </div>
                    <div className='about-team-card-wrapper'>
                        <div>
                            <img src='https://portotheme.com/html/molla/assets/images/team/about-2/member-8.jpg' alt='John Doe' />
                            <div className='about-team-overlay-wrapper'>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link to='#'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </div>
                        </div>
                        <p>Brock Washington</p>
                        <p>Creator & Director</p>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default About;