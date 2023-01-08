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
    axios.get("http://localhost:8080/cart").then(({ data}) => { 
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
    axios.delete(`http://localhost:8080/cart/${id}`).then(({ data}) => { 
        console.log("data", data)
        dispatch(deleteFromCartSuccess())
    }).catch(() => { 
        dispatch(deleteFromCartFailure())
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