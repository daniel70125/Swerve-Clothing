import React, { useState, useEffect } from 'react';
import './Product.scss';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {getProduct} from '../../Redux/reducer';
import axios from 'axios';
import Loading from '../Loading/Loading';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const [product, productItem] = React.useState({});
  const [value, setValue] = React.useState(0);
  const [productColor, setProductColor] = React.useState("pink");
  const [img, setSrc] = React.useState('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-white-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551226036668')
  const images = [];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect( () => {
    axios.get(props.match.url).then(res => console.log(productItem(res.data[0])))
    console.log(productColor)
  }, [productColor]);
  return (
      <div id='item-cont'>
        <div id='item-box-1-cont'>
            <div className='item-box-1'>
                <img src={product.img} alt={images}/> <br />
                <FontAwesomeIcon className='arrows' icon={faArrowLeft} />
                <FontAwesomeIcon className='arrows' icon={faArrowRight} />
            </div>
            <div  className='item-box-1'>
              <h1 id='' style={{"textDecoration":"underline"}}>{product.title}</h1>
                <span style={{"font-size":"30px"}}>$24.99</span>
                <div id='item-info'>
                    <div className={classes.root}>
                    <AppBar style={{"backgroundColor":"#09091c"}} position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Comes With" {...a11yProps(1)} />
                        <Tab label="Specs" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel style={{"textAlign":"left"}} value={value} index={0}>
                        <p>With a real fan inside, SNOOZ is a portable white noise machine that turns your bedroom into a haven for sleep.</p>
                        <ul>
                            <li>Full-spectrum sound helps you fall asleep and stay asleep</li>
                            <li>Real fan inside (without unwanted cold air in cooler months)</li>
                            <li>Adjustable tone & 10 volume settings</li>
                            <li>Optional iOS and Android companion apps for added functionality</li>
                            <li>Travel-friendly</li>
                        </ul>
                    </TabPanel>
                    <TabPanel style={{"textAlign":"left"}} value={value} index={1}>
                        <ul>
                            <li>Pepper Spray - Spray up to distances of 25 ft. or less</li>
                            <li>Light - Flashes up to 20 ft.</li>
                            <li>Stick - Poke around !</li>
                            <li>Brass Knuckles - With the force of Thor it works !</li>
                            <li>hand Sanitizer - Clean hands up and germ free!</li>
                        </ul>
                    </TabPanel>
                    <TabPanel style={{"textAlign":"left"}} value={value} index={2}>
                        <ul>
                            <li>Diameter: 5.6 in</li>
                            <li>Height: 3.2 in</li>
                            <li>Weight: 1.1 lbs</li>
                            <li>Pepper Spray: 2,5 Fl. OZ</li>
                            <li>U.S. Patent No.: US 10,510,335 B2</li>
                        </ul>
                    </TabPanel>
                    </div> 
                </div>
                <div style={{"height":"50px"}}>
                  <span style={{"color":"#09091c", "fontSize":"24px"}}>Fast U.S. Shipping</span> <br />
                  <span style={{"color":"#09091c", "fontSize":"24px", "marginTop":"10px"}}>100% Happiness Guarantee</span>
                </div>
                <div id='item-colors'>
                    <FontAwesomeIcon onClick={() => setProductColor('red')} className='colors' icon={faCircle} style={{"color":"red"}} />
                    <FontAwesomeIcon onClick={() => setProductColor('blue')} className='colors' icon={faCircle} style={{"color":"blue"}} />
                    <FontAwesomeIcon onClick={() => setProductColor('pink')} className='colors' icon={faCircle} style={{"color":"pink"}} />
                    <FontAwesomeIcon onClick={() => setProductColor('purple')} className='colors' icon={faCircle} style={{"color":"purple"}} />

                </div>
            </div>
        </div>
      </div>
  );
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getProduct})(SimpleTabs); 