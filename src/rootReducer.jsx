import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./reducer/counterReducer";
const AllReducers = combineReducers({
    counterReducer

})
export const reduxStore = legacy_createStore(AllReducers)