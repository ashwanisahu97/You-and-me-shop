import * as Types from "./actionTypes"
const initState = {
    loading: false,
    wishlist: [],
    error:false
}
export const reducer = (state = initState, { type, payload }) => { 
    console.log("type,payload",type,payload)
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
                wishlist:[...state?.wishlist,payload]
            }
        case Types.ADD_TO_WISHLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error:true
            }
            case Types.GET_FROM_WISHLIST_REQUEST:
                return {
                ...state,
                loading: true,
                error:false
                }
            case Types.GET_FROM_WISHLIST_SUCCESS:
                return {
                ...state,
                loading: false,
                wishlist:payload
                }
            case Types.GET_FROM_WISHLIST_FAILURE:
                return {
                ...state,
                loading: false,
                error:true
                }
        default:
            return state;
    }
}
