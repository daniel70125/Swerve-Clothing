import axios from 'axios';

const initialState = {
    cart: [],
    product: [],
    loading: false,
    cartItems: 0
}

const GET_USER = 'GET_USER';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_CART_TOTAL = 'GET_CART_TOTAL';

export function getUser(user){
    return {
        type:GET_USER,
        payload: user
    }
}
export function getProduct(path){
    const product = axios.get(path);
    return {
        type:GET_PRODUCT,
        payload: product
    }
}
export function getCartTotal(path){
    // const product = await axios.get(path);
    const product = path;
    console.log(product)
    return {
        type:GET_CART_TOTAL,
        payload: product
    }
}


export default function clothingReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user:payload};
        case GET_PRODUCT + '_PENDING':
            return {...state, loading:true}
        case GET_PRODUCT + '_FULFILLED':
            return {...state, loading:false, product:payload.data[0]}
        case GET_PRODUCT + '_REJECTED':
            return initialState
        case GET_CART_TOTAL + '_PENDING':
            return {...state, loading:true}
        case GET_CART_TOTAL + '_FULFILLED':
            return {...state, loading:false, cart:payload}
        case GET_CART_TOTAL:
            return {...state, loading:false, cart:payload}
        case GET_CART_TOTAL + '_REJECTED':
            return initialState
        default:
            return state;
    }
}