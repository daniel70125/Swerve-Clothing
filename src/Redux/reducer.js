import axios from 'axios';
const initialState = {
    user: {},
    products: [],
    loading: false
}

const GET_USER = 'GET_USER';
const GET_PRODUCTS = 'GET_PRODUCTS';

export function getUser(user){
    return {
        type:GET_USER,
        payload: user
    }
}
export function getArt(path){
    const products = axios.get(path);
    return {
        type:GET_PRODUCTS,
        payload: products
    }
}

export default function cookieReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user:payload};
        case GET_PRODUCTS + '_PENDING':
            return {...state, loading:true}
        case GET_PRODUCTS + '_FULFILLED':
            return {...state, loading:false, art:payload}
        case GET_PRODUCTS + '_REJECTED':
            return initialState
        default:
            return state;
    }
}