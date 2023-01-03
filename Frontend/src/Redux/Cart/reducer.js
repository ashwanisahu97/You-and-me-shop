import * as Types from "./actionType"
const initState = {
loading:false,
cart: [],
error:false
}
const reducer = (state = initState, { type,payload}) => { 
    switch (type) { 
        case Types.GET_FROM_CART_REQUEST:
            return {
                ...state,
                loading:true
            }
        case Types.GET_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart:[...state.cart,payload]
            }
        case Types.GET_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:true
            }
        default:
            return state;
    }
}
export { reducer}