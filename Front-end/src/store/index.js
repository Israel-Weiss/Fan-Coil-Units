import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/user.reducer";

const composeEnhancers = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    userModule: userReducer
})


export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store