import { applyMiddleware, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./App/reducer";
export const store = legacy_createStore(reducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))