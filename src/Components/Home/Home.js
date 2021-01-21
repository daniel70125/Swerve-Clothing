import React, { Component } from 'react';
import './Home.scss';
import Slideshow from '../Slideshow/Slideshow';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopularItems from '../PopularItems/PopularItems';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Delivery from '../../Pictures/delivery.png'; 
import Guarantee from '../../Pictures/guarantee.png'; 
import Support from '../../Pictures/support.png'; 
// import GMap from '../GoogleMap/GoogleMap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [{"title":"Jacket 1","id":"1","price":"15.00","description":"It's Cool", "img":"https://cdn.shopify.com/s/files/1/0352/5633/products/Cossack_Style_Wind_Breaker_-_Navy_Moleskin-16_2000x.jpg?v=1581882795"},
             {"title":"Dress 1","id":"2","price":"25.00","description":"It's Cool", "img":"https://freepngimg.com/download/dress/4-2-dress-png-hd.png"},
              {"title":"Sweater 1","id":"3","price":"28.00", "description":"It's Cool","img":"https://uploads-ssl.webflow.com/5d556af3fe21d65f602dca94/5ef0a2ef51ef17a783edf2d6_Order%20%23538882%20%7C%20jamie%40somethingnavy.com%202.jpg"}]
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
            return <Link className='popular-link' to={`/item/${elm.id}`}>
            <PopularItems key={index} elm={elm}/>
            </Link>
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
                <div id='home-qoute'>
                <div className='quote-box'>
                        <img src={Guarantee} />
                        <h5>Money Back Gurantee</h5>
                    </div>
                    <div className='quote-box'>
                        <img src={Delivery} />
                        <h5>Free Shipping</h5>
                    </div>
                    <div className='quote-box'>
                        <img src={Support} />
                        <h5>24/7 Support</h5>
                    </div>
                </div>
                {/* <div id='main-quote-div'>
                    <p className="home-quote">Swerve Nation is a worldwide favorite!</p>
                </div> */}
                
                <Slideshow />
                
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