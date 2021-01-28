import finReducer from "./fin-reducer";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  finAnalysis: finReducer
})

let store = createStore(reducers);

export default store;