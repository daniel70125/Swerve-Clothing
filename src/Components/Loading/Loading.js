import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='main-cont'>
                <img style={{"opacity": "0.5"}} src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif' alt='loading icon'/>
                <h4>Getting the item for you ! ...</h4>
            </div>
         );
    }
}
 
export default Loading;