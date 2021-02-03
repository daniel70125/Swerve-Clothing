import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {getProduct} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: 1
     }
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
            <div id='box1'>
              <h3 style={{"fontSize":"32px", "margin":"0"}}>{this.props.product.title}</h3>
              <p>{this.props.product.price}</p>
            </div>
            <div id='box2'><p>{this.props.product.description}</p></div>
            <div id='box3'>
              <div id='product-btns'>
                <div id='product-counter'>
                  <div onClick={() => {this.setState({items: this.state.items - 1})}} style={{"margin":"5px 0px 0px 15px", "height":"100%","width":"25px", "cursor":"pointer"}}>-</div>
                  <div style={{"margin":"5px","height":"100%"}}>{this.state.items}</div>
                  <div onClick={() => {this.setState({items: this.state.items + 1})}} style={{"margin":"5px 10px 0px 0px","height":"100%", "width":"25px", "cursor":"pointer"}}>+</div>
                </div>
                <Link to='/products/'>
                  <Button variant="contained" color="primary" disableElevation>Buy Now</Button>
                </Link>
                <Link to='/products/'>
                  <Button variant="contained" color="primary" disableElevation>Add To Cart</Button>
                </Link>
              </div>
            </div>
        </div>
        </div>
        {/* End of container ! */}
      </div>
     );
  }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getProduct})(Product); 