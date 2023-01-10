import * as Types from "./actionTypes"
const initState = {
    loading: false,
    wishlist: [],
    error:false
}
export const reducer = (state = initState, {type,payload})