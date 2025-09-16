import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "./reducer";

export const store = createStore(booksReducer, applyMiddleware(thunk));
