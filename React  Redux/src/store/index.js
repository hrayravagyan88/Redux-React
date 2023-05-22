import { applyMiddleware, createStore } from "redux";

import {cashReducer} from './cashReducer'
import { customers } from "./customReducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

console.log(thunk)
const rootReducers = combineReducers({
    cash:cashReducer,
    customers
})
export const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))