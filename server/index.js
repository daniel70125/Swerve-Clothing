require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller');
const session = require('express-session');
const axios = require('axios');

// Stripe
// const stripe = require('stripe')('sk_test_51HDK6aBOhiVRiJQqMtQKP1wcktCYzea3Q1IZz193rpfUSRVkQcZHhejNtdsGVRqwmBpn0kdTQYC5cCHKTHh6SxTv00D4F1pFsL');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.static(`${__dirname}/../build`));
app.use(express.static('.'));
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

 // const YOUR_DOMAIN = 'http://104.131.29.110:4003/#/'; // production domain
// const YOUR_DOMAIN = 'http://localhost:3000/#/'; // local domain
app.post('/create-session', async (req, res) => {
    const {price, title, img} = req.body;
    const newPrice = +price * 100
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: title,
            images: [img],
          },
          unit_amount: newPrice,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}success/`,
    cancel_url: `${YOUR_DOMAIN}portfolio/`,
  });
  res.json({ id: session.id });
});
app.get('/session', (req, res) => {
  if (!req.session.user){
    req.session.user = {
        name: "",
        number: "",
        email: "",
        cart: [],
        total: 0
    }
    res.status(200).send(req.session);
    } else {
    res.status(200).send(req.session);
}
}
);
app.post('/cart/', (req, res) => {
  let {title, items, price, img} = req.body;
  console.log(title, items, price, img)
  console.log(req.session.user.cart)
        if (req.session.user.cart.length > 0){
            req.session.user.cart.map((elm) => {
                if (title === elm.title){
                    twice = true;
                   return elm.quantity = +elm.quantity + +quantity;
                }
            })
        }
        // if (req.session.user.cart.length === 0){
            req.session.user.cart.push(req.body)
        // }
        console.log(req.session.user.cart)
        res.status(200).send(req.session.user.cart);
    }
)
app.post('/updatecart/', (req, res) => {
  const {title, items, price, img} = req.body;
  console.log(title)
  if (!req.session.user){
    req.session.user = {
      name: "",
      number: "",
      email: "",
      cart: [],
      total: 0
    }
    req.session.user.cart.push({title, items, price, img});
    res.status(200).send(req.session);
  } else {
    req.session.user.cart.map((e) => {
      console.log(e)
      if (e.title.toLowerCase() === title.toLowerCase()){
        e.items = +e.items + +items;
      }
      res.status(200).send(req.session);
    })
  }
})
app.get('/item/:id', async (req, res) => {
    const {id} = req.params;

    const db = req.app.get('db');
    const art = await db.getItem(id);
    res.status(200).send(art);
    
})
app.get('/latestProducts/', ctrl.getLatest )
app.post('/', (req, res) => {
  const {price, title, img} = req.body;
})
app.get('/item/:id', async (req, res) => {
  const {id} = req.params;

  const db = req.app.get('db');
  const art = await db.getItem(id);
  res.status(200).send(art);
  
})
app.get('/allProducts', ctrl.allProducts)
app.get('/relatedProducts', ctrl.relatedProducts)
app.get('/item/:id', async (req, res) => {
  const {id} = req.params;
console.log(id);
  const db = req.app.get('db');
  const item = await db.getItem(id);
  res.status(200).send(item);
  
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('Database Connected!')
})
.catch(err => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Port running on: ${SERVER_PORT}`));