import React, { Component } from 'react';
import './AddItemsLoader.scss'
// import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class AddItemsLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='main-cont'>
                <img style={{"opacity": "0.5"}} src='https://image.flaticon.com/icons/png/512/102/102661.png' alt='loading icon'/>
                <h4>Unfortunately, Your Cart Is Empty</h4>
                <p>Please add something to your cart</p>
                <Link style={{"marginBottom":"20px"}}to='/products/'><Button color="primary" variant="contained">Continue Shopping</Button></Link>
            </div>
         );
    }
}
 
export default AddItemsLoader;