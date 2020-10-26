import React, {Component} from 'react';
import './App.scss';
// import Routes from './routes';
// import Header from './Components/Header/Header';
import axios from 'axios';
import Comingsoon from './Components/Comingsoon/Comingsoon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  async componentDidMount(){
    axios.get('/session')
    .then(res => console.log(res.data))
    .catch(err => console.log(err)
    )}
  render(){
    return (
      <div className="App">
        {/* <Header />
        {Routes} */}
        <Comingsoon />
      </div>
    );
  }
}

export default App;
