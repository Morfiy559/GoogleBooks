import {applyMiddleware, combineReducers, createStore} from "redux";
import booksReducer from './books-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    booksPage:booksReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;