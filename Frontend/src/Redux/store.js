import { applyMiddleware, legacy_createStore,compose,combineReducers } from "redux";
import thunk from "redux-thunk"
import { reducer as productReducer } from "./Product/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
const rootReducer = combineReducers({
    product: productReducer,
    cart:cartReducer
})
export const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))