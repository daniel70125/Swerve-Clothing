import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {getProduct} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Product.scss';
import axios from 'axios';
import SimilarItems from '../SimilarItems/SimilarItems';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: 1,
      relatedItems: []
     }

  }
   async componentDidMount(){
     // Get product from back-end
    await this.props.getProduct(this.props.match.url)
    // Get related Items from back-end
    await axios.get('/relatedProducts')
    .then(res => {
      this.setState({
        relatedItems: res.data
    })})
    .catch(err => console.log(err));
    // Modal settings below
    var modal2 = document.getElementById("myModal2");
    window.onclick = function(event) {
      if (event.target === modal2) {
        modal2.style.display = "none";
      }
    }
  }
  msgSent(){
    const sucessP = document.querySelector('#sucess-message');
    const sucessBtn = document.querySelector('#review-btn');
    const reviewText = document.querySelector('#review-text');
    sucessP.style.opacity = '1';
    sucessBtn.style.display = 'none';
    reviewText.value = '';
  }
  openModal(){
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
  }
  closeModal(){
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "none";
  }
  quantityUp(){
    console.log()
    this.setState({items: this.state.items + 1})
  }
  quantityDown(){
    this.setState({items: this.state.items - 1})
  }
  async addToCart(type){
    const {title, price, img, id} = this.props.product;
    // const {index} = this.props;
    
    const {items} = this.state;
    const addedItem = await axios.post('/updatecart/', {title, items, price, img});
    console.log(addedItem);
}
  render() { 
      

    // Render each item below
    const item = this.state.relatedItems.map((elm, index) => {
      return (
            <Link key={index} style={{"textDecoration":"none"}} to={`/item/${elm.id}`}>
              <SimilarItems title={elm.title} img={elm.img} price={elm.price} />
            </Link>
      )
    })
    return ( 
      this.props.loading === true ? <Loading /> :
      <div id='product-main-cont'>
        <div id='product-nav'>
              <Breadcrumbs aria-label="breadcrumb" style={{"background-color":"black"}}>
                <Link style={{"color":"white"}} to="/">
                    Home
                </Link>
                <Link style={{"color":"white"}} to="/products/">
                    Products
                </Link>
                <Typography style={{"color":"grey", "fontSize":"24px"}}>{this.props.product.title}</Typography>
              </Breadcrumbs>
          </div>
        <div id='product-cont'>
        <div id='product-box1'>
            <img alt='product' src={this.props.product.img} />
        </div>
        <div id='product-box2'>
            <div id='box1'>
              <h3 style={{"fontSize":"32px", "margin":"0"}}>{this.props.product.title}</h3>
              <p>$ {this.props.product.price}</p>
            </div>
            <div id='box2'><p>{this.props.product.description}</p></div>
            <div id='box3'>
              <div id='product-btns'>
                <div id='extra-styles-cont'>
                  <div>
                    <span>Color: </span>
                    <select defaultValue={'DEFAULT'}>
                      <option value='Red' >Red</option>
                      <option value='Purple' >Purple</option>
                      <option value='Yellow' >Yellow</option>
                      <option value="DEFAULT">Choose Your Color</option>
                    </select>
                  </div>
                  <div>
                  <span>Size: </span>
                    <select defaultValue={'DEFAULT'}>
                      <option value='S' >S</option>
                      <option value='M' >M</option>
                      <option value='L' >L</option>
                      <option value="DEFAULT">Choose Your Size</option>
                    </select>
                  </div>
                </div>
                <div id='product-counter'>
                  <div onClick={() => this.quantityDown()} id='minus-btn'>-</div>
                  <div style={{"margin":"5px","height":"100%"}}>Quantity: {this.state.items}</div>
                  <div onClick={() => this.quantityUp()} id='add-btn'>+</div>
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
        <h3 id='related-items-h3'>Related Items</h3>
        <div id='related-main'>
          {item}
        </div>

        <button className='button2' onClick={this.openModal}>Leave A Review</button>
        <div id="myModal2" className="modal">
                    <div className="modal-content2">
                        <span onClick={this.closeModal} className="close2">&times;</span>
                        <div id='review-main-cont'>
                          <h1 className="es-title">Leave us a review !</h1>
                          <p style={{"textAlign":"center"}}>What do you think about {this.props.product.title} ?</p>
                          <textarea id="review-text" name="review-text" placeholder="Enter your review here ... "></textarea>        
                          <div style={{"textAlign":"center"}}>
                          <Button id='review-btn' onClick={this.msgSent} variant="contained" disableElevation>Send Message</Button>  
                          <p id='sucess-message'>Message Sent!</p>
                          </div>
                        </div>
                    </div>
                </div>
        {/* End of container ! */}
        <Footer />
      </div>
     );
  }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getProduct})(Product); 