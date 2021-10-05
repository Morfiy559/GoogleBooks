import React from "react";
import './SearchArea/SearchArea.css';
import SearchArea from "./SearchArea/SearchArea";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    setBooks,
    setCategory, setPage, setSortingType, setStartIndex,
    setTotalBooksCount,
    toggleIsFetching,
    updateNewQuery
} from "../../../redux/books-reducer";
import {SearchAreaAPI} from "../../API/api";

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
        props.toggleIsFetching(true);
        SearchAreaAPI.getBooks(props.query,props.category,props.maxResults,props.sortingType,props.k)
            .then(
            data => {
                props.toggleIsFetching(false);
                props.setPage('list');
                props.setBooks(data.items === undefined ? [] : data.items);
                props.setTotalBooksCount(data.totalItems);
                props.setStartIndex(31);
                if (data.totalItems === 0) alert(`По вашему запросу ${this.props.query} книг не найдено.`);
            }
        )
    }
    let onKeyDown = (e) => {
        if (e.keyCode === 13)getBooks();

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
        k: state.booksPage.k
    }
}


export default connect(mapStateToProps, {
    setBooks, setTotalBooksCount, toggleIsFetching, updateNewQuery,
    setCategory, setStartIndex, setSortingType, setPage
})(SearchAreaContainer);