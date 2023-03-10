import * as Types from "./actionType";
import axios from "axios"
export const addToCartRequest = () => { 
    return {
        type:Types.ADD_TO_CART_REQUEST
    }
}
export const addToCartSuccess = (payload) => { 
    return {
        type: Types.ADD_TO_CART_SUCCESS,
        payload
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
    axios.get("https://you-and-me-json-server.onrender.com/cart").then(({ data}) => { 
        console.log("data", data)
        dispatch(getFromCartSuccess(data))
    }).catch(() => { 
        dispatch(getFromCartFailure())
    })
     
}
export const deleteFromCartRequest = () => { 
    return {
        type:Types.DELETE_FROM_CART_REQUEST
    }
}
export const deleteFromCartSuccess = (payload) => { 
    return {
        type: Types.DELETE_FROM_CART_SUCCESS,
        payload
    }
}
export const deleteFromCartFailure = () => { 
    return {
        type: Types.DELETE_FROM_CART_FAILURE
    }
}

export const deleteFromCart = (id) => (dispatch) => { 
        dispatch(deleteFromCartRequest());
    return axios.delete(`https://you-and-me-json-server.onrender.com/cart/${id}`).then(({ data}) => { 
        console.log("data", data)
        alert("deleted from cart");
        dispatch(deleteFromCartSuccess())
    }).then(() => { 
        dispatch(getFromCart())
    }).catch(() => { 
        dispatch(deleteFromCartFailure())
    })
     
}

export const addToCart = (prod) => (dispatch) => { 
        dispatch(addToCartRequest());
    return axios.post("https://you-and-me-json-server.onrender.com/cart",prod).then(({ data}) => { 
        alert("data added to a cart");
        addToCartSuccess(data)
    }).catch(() => { 
        dispatch(addToCartFailure())
    })
     
}