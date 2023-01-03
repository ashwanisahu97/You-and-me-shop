import * as Types from "./actionType";
import axios from "axios"
export const addToCartRequest = () => { 
    return {
        type:Types.ADD_TO_CART_REQUEST
    }
}
export const addToCartSuccess = () => { 
    return {
        type: Types.ADD_TO_CART_SUCCESS,
    }
}
export const addToCartFailure = () => { 
    return {
        type: Types.ADD_TO_CART_FAILURE
    }
}
export const getFromCartRequest = () => { 
    return {
        type:Types.GET_FROM_CART_REQUEST
    }
}
export const getFromCartSuccess = (payload) => { 
    return {
        type: Types.GET_FROM_CART_SUCCESS,
        payload
    }
}
export const getFromCartFailure = () => { 
    return {
        type: Types.GET_FROM_CART_FAILURE
    }
}

export const getFromCart = () => (dispatch) => { 
        dispatch(getFromCartRequest());
    axios.post("http://localhost:8080/cart").then(({ data}) => { 
        console.log("data", data)
        getFromCartSuccess(data)
    }).catch(() => { 
        dispatch(getFromCartFailure())
    })
     
}
export const addToCart = (prod) => (dispatch) => { 
        dispatch(addToCartRequest());
    axios.post("http://localhost:8080/cart",prod).then(({ data}) => { 
        console.log("data", data)
        alert("hello data is saved");
        addToCartSuccess(data)
    }).catch(() => { 
        dispatch(addToCartFailure())
    })
     
}