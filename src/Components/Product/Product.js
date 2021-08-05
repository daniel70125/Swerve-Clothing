import React, { Component } from 'react';
// import Footer from '../Footer/Footer'; 
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {getProduct, getCartTotal, updateTotal} from '../../Redux/reducer';
import Loading from '../Loading/Loading';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Product.scss';
import axios from 'axios';
import SimilarItems from '../SimilarItems/SimilarItems';
import icon from '../../Pictures/user-icon.jpg'; // Icon for person leaving review
import icon2 from '../../Pictures/user-icon-2.png'; // Second icon for person leaving review


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: 1,
      size:'undefined',
      color: 'undefined',
      relatedItems: [],
      isLoading: false
     }
     this.buyNow = this.buyNow.bind(this);
     this.addToCart = this.addToCart.bind(this);
  }
   async componentDidMount(){
     const reviewBGColors = ['#476072', '#548CA8', '#334257', '#423F3E', '#343A40'] // Array of colors
    //  var colorPicker = Math.floor(Math.random() * 5); // Background picker
     const reviewBoxes= document.querySelectorAll('.product-review-wrapper'); // Review boxes array;
     reviewBoxes[0].style.backgroundColor = reviewBGColors[Math.floor(Math.random() * 5)]
     reviewBoxes[1].style.backgroundColor = reviewBGColors[Math.floor(Math.random() * 5)]

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

  async componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      await this.props.getProduct(this.props.match.url)
    // Get related Items from back-end
    await axios.get('/relatedProducts')
    .then(res => {
      this.setState({
        relatedItems: res.data
    })})
    .catch(err => console.log(err));
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
  async addToCart(){
    const {title, price, img, id} = this.props.product;
    const {items, size, color} = this.state;
    await axios.post('/updatecart/', {title, items, price, img, id, size, color});
    const cartItems = await axios.get('/cart/');
    await this.props.updateTotal(cartItems.data.cart.length);
    await this.props.getCartTotal(cartItems.data.cart);
  }
  async buyNow(){
    const {title, price, img, id} = this.props.product;
    // const {index} = this.props;
    
    const {items, size, color} = this.state;
    await axios.post('/updatecart/', {title, items, price, img, id, size, color});
    this.setState({
      isLoading: true
    })
    const cartItems = await axios.get('/cart/');
    await this.props.updateTotal(cartItems.data.cart.length);
    await this.props.getCartTotal(cartItems.data.cart);
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
      this.props.history.push('/cart');
    }, 3000);
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
      this.state.isLoading === true ? <Loading /> :
      <div id='product-main-cont'>
        <div id='product-nav'>
              <Breadcrumbs aria-label="breadcrumb">
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
                {/* <div id='extra-styles-cont'>
                  <div>
                    <span>Color: </span>
                    <select onChange={(e) => this.setState({color:e.target.value})} defaultValue={'DEFAULT'}>
                      <option onClick={(e) => console.log('ok')} value='Red' >Red</option>
                      <option value='Purple' >Purple</option>
                      <option value='Yellow' >Yellow</option>
                      <option value="DEFAULT">Choose Your Color</option>
                    </select>
                  </div>
                  <div>
                  <span>Size: </span>
                    <select onChange={(e) => this.setState({size:e.target.value})}defaultValue={'DEFAULT'}>
                      <option value='S' >S</option>
                      <option value='M' >M</option>
                      <option value='L' >L</option>
                      <option value="DEFAULT">Choose Your Size</option>
                    </select>
                  </div>
                </div> */}
                <div id='product-counter'>
                  <div onClick={() => this.quantityDown()} id='minus-btn'>-</div>
                  <div style={{"margin":"5px","height":"100%"}}>Quantity: {this.state.items}</div>
                  <div onClick={() => this.quantityUp()} id='add-btn'>+</div>
                </div>
                  <Button onClick={this.buyNow} variant="contained" color="primary" disableElevation>Buy Now</Button>
                  <Button onClick={this.addToCart} variant="contained" color="primary" disableElevation>Add To Cart</Button>
              </div>
            </div>
        </div>
        </div>
         {/* Product review wrapper  */}
         <h3 id='related-items-h3'>Customer Review</h3>
        <div className='product-review-wrapper'>
          <img alt='user' src={icon} className='product-review-icon'/> 
          <p><span id='product-review-username'>@Kathy210!</span> - March 8, 2021</p>
          <p> I honestly thought I’d have to send this back. Thought I’d look way to huge or like a marshmallow. 
          But it’s cute and looks good! Perfect for cold days. Although I did order a size down and that was 
          perfect. </p>
        </div>
        <div className='product-review-wrapper'>
          <img alt='user' src={icon2} className='product-review-icon'/> 
          <p><span id='product-review-username'>@Kathy210!</span> - March 8, 2021</p>
          <p> All my items were true to size, and they arrived earlier then expected arrival day. Perfect modern
            fit and great feel and stretch to the material, my new go to clothing store! </p>
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
      </div>
     );
  }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getProduct, getCartTotal, updateTotal})(Product); 