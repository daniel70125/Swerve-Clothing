import React, { Component } from 'react';
import './PopularItems.scss';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
        return ( 
            <div id='popular-cont'>
                <img src={img} style={{"width":"80%", "height":"50vh"}} />
                <p style={{"marginBottom":"0"}} className='type'>{title}</p>
                <p>${price} <span style={{"fontSize":"12px"}}>+shipping</span></p>
                <Button variant="contained" color="primary">Add To Cart</Button>
            </div>
         );
    }
}
 
export default PopularItems;