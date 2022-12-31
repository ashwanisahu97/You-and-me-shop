import * as Types from "./actionType"
const initState = {
    loading: false,
    data: [],
    error:false
}

export const reducer = (state = initState, { type, payload }) => { 
    switch (type) { 
        case Types.GET_DATA_REQUEST:
            return {
                ...state,
                loading:true
            }
        case Types.GET_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                loading:false
            }
        case Types.GET_DATA_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
        default:
            return state;
    }
}