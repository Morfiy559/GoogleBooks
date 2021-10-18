import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import BookList from "./components/BookList/BookList";
import Book from "./components/Book/Book";
import React from "react";
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="App">
            <SearchArea/>
            {
                props.page === 'list' ?
                    <BookList/> :
                    <Book/>
            }
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        page: state.booksPage.page
    }
}
export default connect(mapStateToProps, {})(App);
