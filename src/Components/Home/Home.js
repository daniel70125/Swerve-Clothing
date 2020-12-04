import React, { Component } from 'react';
import './Home.scss';
import Slideshow from '../Slideshow/Slideshow';
import Button from '@material-ui/core/Button';
// import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
import PopularItems from '../PopularItems/PopularItems';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: 
            [{type:"'Chill Bear'", model:"500", color:"white", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgJ9C2C4bRLkn_Sw9hVjCG2Y3igmjHMUk_g&usqp=CAU"}, 
            {type:"'Chill Bear'", model:"1200", color:"black", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgJ9C2C4bRLkn_Sw9hVjCG2Y3igmjHMUk_g&usqp=CAU"}]
         }
    }
    render() { 
        const popularItems = this.state.items.map((elm, index) => {
            return <PopularItems elm={elm}/>
        })
        return ( 
            <div id='container'>
                <div id='home-landing-box'>
                    <h1>Swerve Nation</h1>
                    <hr style={{"color":""}}/>
                    <Link to='/products/'>
                        <Button variant="contained" color="primary" disableElevation>Shop Now</Button>
                    </Link>
                </div>
                <div id='main-quote-div'>
                    <p className="home-quote">Swerve Nation is a worldwide favorite!</p>
                </div>
                
                <Slideshow />
                <div id='home-qoute'>
                    <div className='quote-cont'>
                        <div className='home-icon-intro1'>
                        <FontAwesomeIcon className='worldIcon' icon={faGlobeAmericas} />
                        </div>
                        <div className='home-icon-intro2'>
                            <h5>Worldwide Delivery</h5>
                            <span>We ship all over the U.S.A! All orders are processed at time of order.</span>
                        </div>
                    </div>
                    <div className='quote-cont'>
                        <div className='home-icon-intro1'>
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='home-icon-intro2'>
                        <h5>24/7 Customer Services</h5>
                            <span>Our dedicated support team guarantee to always support you - our beloved customer anytime of the day.</span>
                        </div>
                    </div>
                </div>
                {/* Products Items */}
                <p style={{"textAlign":"center", "fontSize":"36px"}}>Latest Items</p>
                <hr style={{"color":"orange"}}/>
                <div id='home-latest-items'>
                    {popularItems}
                </div>
            </div>
         );
    }
}
 
export default Home;