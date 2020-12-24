import React, { Component } from 'react';
import './Home.scss';
import Slideshow from '../Slideshow/Slideshow';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faPhone} from '@fortawesome/free-solid-svg-icons'
import PopularItems from '../PopularItems/PopularItems';
import axios from 'axios';
import Footer from '../Footer/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [{"title":"Cool 1","price":"25.00","description":"It's Cool", "img":"https://cdn.pixabay.com/photo/2016/10/27/02/06/model-1773191_960_720.jpg"},
             {"title":"Cool 2","price":"25.00","description":"It's Cool", "img":"https://cdn.pixabay.com/photo/2016/10/27/02/06/model-1773191_960_720.jpg"},
              {"title":"Cool 3","price":"25.00", "description":"It's Cool","img":"https://cdn.pixabay.com/photo/2016/10/27/02/06/model-1773191_960_720.jpg"}]
         }
    }
    async componentDidMount(){
        // await axios.get('/latestProducts/')
        // .then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         items: res.data
        //     })
        // })
        // .catch()
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        window.addEventListener('load', (event) => {
            setTimeout(() => {
                modal.style.display = "block";
                document.getElementById('header').style.zIndex = 0;
            }, 3000);
        span.onclick = function() {
            modal.style.display = "none";
            document.getElementById('header').style.zIndex = 5;
            }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.getElementById('header').style.zIndex = 5;
            }
            }
          });
    }
    render() { 
        const popularItems = this.state.items.map((elm, index) => {
            return <PopularItems key={index} elm={elm}/>
        })
        return ( 
            <div id='container'>
                <div id='home-landing-box'>
                    <Fade in='true' timeout={3000}>
                        {/* <h1>Swerve Nation</h1> */}
                        <h1>Company Name Here</h1>
                    </Fade>
                    <hr style={{"color":""}}/>
                    <Fade in='true' timeout={7000}>
                        <Link to='/products/'>
                            <Button variant="contained" color="primary" disableElevation>Shop Now</Button>
                        </Link>
                    </Fade>
                </div>
                <div id='main-quote-div'>
                    <p className="home-quote">Swerve Nation is a worldwide favorite!</p>
                </div>
                
                <Slideshow />
                <div id='home-qoute'>
                    <div className='quote-cont'>
                        <div className='home-icon-intro1' >
                        <FontAwesomeIcon style={{"color":"darkolivegreen"}} className='worldIcon' icon={faGlobeAmericas} />
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
                <p style={{"textAlign":"center", "fontSize":"36px", "marginBottom":"5px", "marginTop":"35px"}}>Latest Items</p>
                <hr style={{"color":"orange", "width":"20%", "border":"1px solid orange", "marginBottom":"80px"}}/>
                <div id='home-latest-items'>
                    {popularItems}
                </div>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div id='modal-box-left'>
                                
                        </div>
                        <div id='modal-box-right'>
                                <p>Hello</p>
                                <p>Sign up to be the first to hear about exclusive deals, special offers and upcoming collections</p>
                                <input type='text' placeholder='Email' />
                                <Button className='modal-btn' variant="contained" color="primary" disableElevation>Submit</Button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
         );
    }
}
 
export default Home;