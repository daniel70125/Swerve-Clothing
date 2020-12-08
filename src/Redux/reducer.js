import axios from 'axios';

const initialState = {
    user: {},
    product: [],
    loading: false
}

const GET_USER = 'GET_USER';
const GET_PRODUCT = 'GET_PRODUCT';

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

export default function cookieReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user:payload};
        case GET_PRODUCT + '_PENDING':
            return {...state, loading:true}
        case GET_PRODUCT + '_FULFILLED':
            return {...state, loading:false, product:payload.data}
        case GET_PRODUCT + '_REJECTED':
            return initialState
        default:
            return state;
    }
}