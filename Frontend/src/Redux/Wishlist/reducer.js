import * as Types from "./actionTypes"
const initState = {
    loading: false,
    wishlist: [],
    error:false
}
export const reducer = (state = initState, { type, payload }) => { 
    switch (type) { 
        case Types.ADD_TO_WISHLIST_REQUEST:
            return {
                ...state,
                loading:true
            }
        case Types.ADD_TO_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlist:payload
            }
        case Types.ADD_TO_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error:true
            }
        default:
            return state;
    }
}
