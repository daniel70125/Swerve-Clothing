import React, { Component } from 'react';
import './CartItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
//     color: "undefined"
// img: "https://www.w3schools.com/w3images/jeans2.jpg"
// items: 1
// price: "20.00"
// size: "undefined"
// title: "Dress HD"
    render() { 
        const {elm, index} = this.props;
        console.log(this.props.elm)
        return ( 
            <div id='cart-item-primary-cont'>
                <img src={elm.img} />
                <p>{elm.title}</p>
                <p>Size: {elm.size}</p>
                <div id='cart-item-delete-quantity-cont'>
                    <FontAwesomeIcon id='cart-item-fai-trash-alt'icon={faTrashAlt} />

                    <div id='cart-item-product-counter'>
                        <div onClick={() => this.quantityDown()} id='minus-btn'>-</div>
                        <div id='cart-item-quantity'>Quantity: {elm.items}</div>
                        <div onClick={() => this.quantityUp()} id='add-btn'>+</div>
                    </div>
                    <span>$ {+elm.price * elm.items}</span>
                </div>
            </div>
         );
    }
}
 
export default CartItem;