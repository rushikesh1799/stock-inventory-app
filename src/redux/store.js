import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import itemReducer from "./Reducers/itemReducer";
import saleReducer from "./Reducers/saleReducer";

const store = createStore(
    combineReducers({
        item: itemReducer,
        sale: saleReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
