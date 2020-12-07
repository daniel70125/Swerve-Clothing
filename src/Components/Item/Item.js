import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            elm: this.props.elm
         }
    }
    render() { 
        const {elm} = this.state;
        console.log(elm.img)
        return ( 
            <div id='item-box' style={{"backgroundImage":`url(${this.props.elm.img})`}} >

            </div>
         );
    }
}
 
export default Item;