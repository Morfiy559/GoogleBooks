import {combineReducers, createStore} from "redux";
import booksReducer from './books-reducer';

let reducers = combineReducers({
    booksPage:booksReducer
})

let store = createStore(reducers);

window.store = store;
export default store;