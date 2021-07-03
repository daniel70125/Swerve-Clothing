import React, { Component } from 'react';
import './Cart.scss';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCartTotal} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import CartItem from '../CartItem/CartItem';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                
            ]
         }
    }
    async componentDidMount(){
        const cartItems = await axios.get('/cart/');
        this.setState({items: cartItems.data.cart})
        await this.props.getCartTotal(cartItems.data.cart)
        // console.log(this.props.user.cart[0][0].title);
    }
    render() { 
        console.log(this.state.items);
        const cartItems = this.state.items.map((elm, index) => {
            return <CartItem elm={elm} index={index} />
        })
        return ( 
            this.state.items.length <= 0 ? <Loading /> :
            <div className='cart-wrapper-div'>
                <h1>helo</h1>
                {cartItems}
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getCartTotal})(Cart); 