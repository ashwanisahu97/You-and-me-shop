import * as Types from "./actionType";

export const GetDataRequest = () => {
    return {
        type: Types.GET_DATA_REQUEST
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
        // const response = await fetch("https://you-and-me-shop-2.onrender.com/products",{
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        const response = await fetch("https://fakestoreapi.com/products")
        const res = await response.json()
        // const res = await response.json();
        console.log("response2", res);
        dispatch(getDataSuccess(res))
    } catch (error) {
        dispatch(getDataFailure())
    }

}