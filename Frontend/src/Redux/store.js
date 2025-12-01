import { applyMiddleware, legacy_createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
import { reducer as wishlistReducer } from "./Wishlist/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
});

// Safe DevTools compose
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
