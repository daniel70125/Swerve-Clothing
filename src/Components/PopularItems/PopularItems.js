import React, { Component } from 'react';
import './PopularItems.scss';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../Redux/reducer'; 

class PopularItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
         this.addToCart = this.addToCart.bind(this);
    }
    addToCart(){
        axios.post('')
    }
    render() { 
        const {title, price, img} = this.props.elm
        console.log('hello')
        return ( 
            <div id='popular-cont'>
                <img alt='img' src={img} style={{"width":"80%", "height":"50vh"}} />
                <p style={{"marginBottom":"0"}} className='type'>{title}</p>
                <p>${price} <span style={{"fontSize":"12px"}}>+shipping</span></p>
                <Button variant="contained"  >Add To Cart</Button>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser})(PopularItems); 