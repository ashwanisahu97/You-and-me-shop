import * as Types from "./actionType";

export const GetDataRequest = () => { 
    return {
        type:Types.GET_DATA_REQUEST
    }
}
export const getDataSuccess = (payload) => { 
    return {
        type: Types.GET_DATA_SUCCESS,
        payload
    }
}
export const getDataFailure = () => { 
    return {
        type: Types.GET_DATA_FAILURE
    }
}