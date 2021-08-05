import React, { Component } from 'react';
import './SimilarItems.scss';
// import Button from '@material-ui/core/Button';
// import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../Redux/reducer';

class SimilarItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
         
    }
    render() { 
        const {title, price, img} = this.props
        return ( 
            <div id='popular-cont'>
                <img alt=''  src={img} style={{"width":"100%", "height":"50vh"}} />
                <p style={{"marginBottom":"0"}} className='type'>{title}</p>
                <p>${price} <span style={{"fontSize":"12px"}}>+shipping</span></p>
            </div>
         );
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser})(SimilarItems); 