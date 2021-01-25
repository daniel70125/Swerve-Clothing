import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
   async componentDidMount(){
    await this.props.getProduct(this.props.match.url)
  }
  render() { 
    console.log(this.props)
    return ( 
      this.props.loading === true ? <Loading /> :
      <div id='product-main-cont'>
        <div id='product-nav'>
              <Breadcrumbs aria-label="breadcrumb">
                <Link style={{"color":"white"}} to="/">
                    Home
                </Link>
                <Link style={{"color":"white"}} to="/">
                    Products
                </Link>
                <Typography style={{"color":"grey", "fontSize":"24px"}}>{this.props.product.title}</Typography>
              </Breadcrumbs>
          </div>
        <div id='product-cont'>
        <div id='product-box1'>
            <img src={this.props.product.img} />
        </div>
        <div id='product-box2'>
            <div>
              <h3>{this.props.product.title}</h3>
              <p>{this.props.product.price}</p>
            </div>
            <div>Div 2</div>
            <div>Div 3</div>
        </div>
        </div>
        {/* End of container ! */}
      </div>
     );
  }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getProduct})(Product); 