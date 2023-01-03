import * as Types from "./actionType";
import axios from "axios"
export const AddToCartRequest = () => { 
    return {
        type:Types.ADD_TO_CART_REQUEST
    }
}
export const AddToCartSuccess = () => { 
    return {
        type: Types.ADD_TO_CART_SUCCESS,
    }
}
export const AddToCartFailure = () => { 
    return {
        type: Types.GET_FROM_CART_REQUEST
    }
}
export const GetFromCartRequest = () => { 
    return {
        type:Types.GET_FROM_CART_REQUEST
    }
}
export const GetFromCartSuccess = (payload) => { 
    return {
        type: Types.GET_FROM_CART_SUCCESS,
        payload
    }
}
export const GetFromCartFailure = () => { 
    return {
        type: Types.GET_FROM_CART_FAILURE
    }
}

export const getFromCart = () => (dispatch) => { 
        dispatch(GetFromCartRequest());
    axios.post("http://localhost:8080/cart").then(({ data}) => { 
        console.log("data", data)
        GetFromCartSuccess(data)
    }).catch(() => { 
        dispatch(GetFromCartFailure())
    })
     
}