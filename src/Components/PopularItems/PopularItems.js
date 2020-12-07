import React, { Component } from 'react';
import './PopularItems.scss';
import Button from '@material-ui/core/Button';

class PopularItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.elm);
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