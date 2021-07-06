import React, {Component} from 'react';
import './App.scss';
import Routes from './routes';
import Header from './Components/Header/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser, updateTotal} from './Redux/reducer'; 
import Footer from './Components/Footer/Footer';
// import Comingsoon from './Components/Comingsoon/Comingsoon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  async componentDidMount(){
    await axios.get('/session')
    .then(res => {
      this.props.getUser(res.data)
    })
    .catch(err => console.log(err))
    const cartItems = await axios.get('/cart/');
    this.props.updateTotal(cartItems.data.cart.length)
  }
  render(){
    return (
      <div className="App">
        <Header />
        {Routes}
        <Footer />
        {/* <Comingsoon /> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser, updateTotal})(App); 