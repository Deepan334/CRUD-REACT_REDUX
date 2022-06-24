import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./Reducer";
import reduxThunk from "redux-thunk";

const middleware = [reduxThunk];

const root = combineReducers({ usersReducer });

export const store = createStore(root, applyMiddleware(...middleware));
