import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact2/Contact';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import About from './Components/About/About';
// ScrollToTop.js makes react router go to top of page
import ScrollToTop from './scrollToTop';

export default (
    <ScrollToTop>
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path={`/checkout/:id`} component={Checkout} /> */}
        <Route path={`/contact/`} component={Contact} />
        <Route path={`/products/`} component={Products} />
        <Route path={`/cart/`} component={Cart} />
        <Route path={`/item/:id`} component={Product} />
        <Route path={`/about/`} component={About} />
    </Switch>
    </ScrollToTop>
)