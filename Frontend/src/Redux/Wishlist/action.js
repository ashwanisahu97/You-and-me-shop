import axios from "axios";
import * as Types from "./actionTypes"
// action and function for adding data to Wishlist
export const addToWishlistRequest = () => { 
    return {
        type:Types.ADD_TO_WISHLIST_REQUEST
    }
}
export const addToWishlistSuccess = (payload) => { 
    return {
        type: Types.ADD_TO_WISHLIST_SUCCESS,
        payload
    }
}
export const addToWishlistFailure = () => { 
    return {
        type:Types.ADD_TO_WISHLIST_FAILURE
    }
}

export const addToWishlist = (product) => (dispatch) => { 
    dispatch(addToWishlistRequest())
    return axios.post("https://you-and-me-shop-2.onrender.com/wishlist", product).then(() => { 
        alert("product added to wishlist");
        console.log("my add to wishlist product",product)
        dispatch(addToWishlistSuccess(product))
    }).catch((error) => { 
        console.log("error", error);
        dispatch(addToWishlistSuccess())
    })
}

// action and function for getting data from Wishlist


export const getFromWishlistRequest = () => {
    return {
        type: Types.GET_FROM_WISHLIST_REQUEST
    
    }
}
    export const getFromWishlistSuccess = (payload) => {
        return {
            type: Types.GET_FROM_WISHLIST_SUCCESS,
            payload
        }
    }
    export const getFromWishlistFailure = () => {
        return {
            type: Types.GET_FROM_WISHLIST_FAILURE
        }
    }

    export const getFromWishlist = () => (dispatch) => {
        dispatch(getFromWishlistRequest())
        return axios.get("https://you-and-me-shop-2.onrender.com/wishlist").then(({ data }) => {
            console.log("my data",data)
            dispatch(getFromWishlistSuccess(data))
        }).catch((error) => {
            console.log("error", error);
            dispatch(getFromWishlistFailure())
        })
    }

