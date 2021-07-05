import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import ScrollUpButton from 'react-scroll-up-button';
import {Link} from 'react-router-dom';
import './Products.scss';
import ScrollReveal from 'scrollreveal'
// import Button from '@material-ui/core/Button';
import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
     }
    //  this.getDrawings = this.getDrawings.bind(this);
    //  this.getAllArt = this.getAllArt.bind(this);
    //  this.getPortraits = this.getPortraits.bind(this);
  }
  async componentDidMount(){
    await axios.get('/allProducts')
    .then(res => {
      this.setState({
        items: res.data
    })
    })
    .catch(err => console.log(err));

    let start = 0;
    for (let index = 0; index < this.state.items.length; index++) {
      ScrollReveal().reveal(`.linksSR${index}`, {delay: start});
      start = start + 300;
    }
    const productCardsArray = document.querySelectorAll('.product-Cards')
    productCardsArray.forEach((elm, index) => {
      elm.addEventListener('mouseover', (e) => {
        
      })
    })
  }
  // async getDrawings(){
  //   await axios.get('/items/drawings').then(res => {
  //     this.setState({
  //       items: res.data
  //     })
  //   })
  // }
  async getAllProducts(){
    await axios.get('/allProducts').then(res => {
      this.setState({
        items: res.data
      })
    })
  }
  // async getPortraits(){
  //   await axios.get('/items/portraits').then(res => {
  //     this.setState({
  //       items: res.data
  //     })
  //   })
  // }
  render() { 
    const item = this.state.items.map((elm, index) => {
      return (
            <Link key={index} style={{"textDecoration":"none"}}className={`linksSR${index}`} to={`/item/${elm.id}`}>
              {/* <Card key={index} id={index} elm={elm} /> */}
              <div id='product-card' className='product-Cards'>
                <img alt={elm.title} src={elm.img}/> 
                 {/* img size: 400 X 500 */}
                 <p>${elm.price}</p>
              </div>
            </Link>
      )
    })
    return ( 
      <div id='portfolio-cont'>
        <div>
          <ScrollUpButton style={{"backgroundColor":"#09091c"}}/>
        </div>
        <div id='portfolio-header'>
          <div id='header-text'>
              <h2>Shop</h2>
              <Breadcrumbs aria-label="breadcrumb">
                <Link style={{"color":"white"}} to="/">
                    Home
                </Link>
                <Typography style={{"color":"white"}}>Products</Typography>
              </Breadcrumbs>
          </div>
          </div>
          <div className="tab">
            <button onClick={this.getAllArt} className="tablinks">All</button>
            <button onClick={this.getPortraits} className="tablinks">Clothing</button>
            <button onClick={this.getDrawings} className="tablinks">Other</button>
          </div>
          <div id='item-cont'>
            {item}
          </div>
    </div>
     );
  }
}
 
export default Products;