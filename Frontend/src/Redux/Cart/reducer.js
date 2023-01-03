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
                loading
                cart:[...cart,payload]
            }
    }
}