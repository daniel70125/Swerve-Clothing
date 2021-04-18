import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact2/Contact';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path={`/checkout/:id`} component={Checkout} /> */}
        <Route path={`/contact/`} component={Contact} />
        <Route path={`/products/`} component={Products} />
        <Route path={`/item/:id`} component={Product} />
    </Switch>
)