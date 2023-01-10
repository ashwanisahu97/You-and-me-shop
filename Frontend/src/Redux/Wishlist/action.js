import axios from "axios";
import * as Types from "./actionTypes"
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

export const addToWishlist = () => () => { 
      axios.get("/")
}