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
        type: Types.ADD_TO_WISHLIST_REQUEST,
        payload
    }
}
export const addToWishlistFailure = () => { 
    return {
        type:Types.ADD_TO_WISHLIST_REQUEST
    }
}

export const addToWishlist = (product) => (dispatch) => { 
    dispatch(addToWishlistRequest())
    return axios.get("http://localhost:8080/wishlist", product).then(() => { 
        alert("product added to wishlist");
        dispatch(addToWishlistSuccess())
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
        alert("oye hello")
        dispatch(getFromWishlistRequest())
        return axios.get("http://localhost:8080/wishlist").then(({ data }) => {
            alert("fetched data from wishlist")
            console.log("my data",data)
            dispatch(getFromWishlistSuccess(data))
        }).catch((error) => {
            console.log("error", error);
            dispatch(getFromWishlistFailure())
        })
    }

