import finReducer from "./finReducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    finAnalysis: finReducer
})

let store = createStore(reducers);

export default store;