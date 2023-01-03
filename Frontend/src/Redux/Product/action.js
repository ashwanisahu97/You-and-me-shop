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

export const fetchData = () => async (dispatch) => { 
    try {
        dispatch(GetDataRequest());
        const response = await fetch("http://localhost:8080/products")
        const res = await response.json();
        dispatch(getDataSuccess(res))
    } catch (error) { 
        dispatch(getDataFailure())
    }

}