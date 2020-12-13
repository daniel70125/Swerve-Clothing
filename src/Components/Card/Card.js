import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
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
            <div className="card">
                <img src={elm.img} alt="Denim Jeans" style={{"width":"100%", "height":"50vh"}} />
                <h1>{elm.title}</h1> 
                <p class="price">{elm.price}</p>
                <p>{elm.description}</p>
                <p><button>Add to Cart</button></p>
            </div>
         );
    }
}
 
export default Card;