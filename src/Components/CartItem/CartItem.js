import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {elm, index} = this.props;
        return ( 
            <h1>{elm.title}</h1>
         );
    }
}
 
export default CartItem;