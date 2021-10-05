import React from "react";
import './SearchArea/SearchArea.css';
import SearchArea from "./SearchArea/SearchArea";
import {connect} from "react-redux";
import {
    getBooks,
    setCategory,
    setSortingType,
    updateNewQuery
} from "../../../redux/books-reducer";

let SearchAreaContainer = (props) => {


    let onQueryChange = (e) => {
        let text = e.target.value;
        props.updateNewQuery(text);
    }
    let getBooks = () => {
        if (props.query === '') {
            alert('Введите строку запроса');
            return;
        }
        props.getBooks(props.query, props.category, props.maxResults, props.sortingType, props.k);
    }
    let onKeyDown = (e) => {
        if (e.keyCode === 13) getBooks();
    }
    let onCategoryChange = (e) => {
        let select = e.target.value;
        props.setCategory(select);
    }
    let onSortingChange = e => {
        let sort = e.target.value;
        props.setSortingType(sort);
    }


    return (
        <SearchArea
            getBooks={getBooks}
            onCategoryChange={onCategoryChange}
            onSortingChange={onSortingChange}
            onQueryChange={onQueryChange}
            onKeyDown={onKeyDown}
        />
    )

}

let mapStateToProps = (state) => {
    return {
        query: state.booksPage.query,
        maxResults: state.booksPage.maxResults,
        category: state.booksPage.category,
        sortingType: state.booksPage.sortingType,
        k: state.booksPage.k,
        totalBooks: state.booksPage.totalBooksCount
    }
}


export default connect(mapStateToProps, {
 updateNewQuery,
    setCategory,  setSortingType, getBooks
})(SearchAreaContainer);