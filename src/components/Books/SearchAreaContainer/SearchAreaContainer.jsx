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

class SearchAreaAPI extends React.Component {


    onQueryChange = (e) => {
        let text = e.target.value;
        this.props.updateNewQuery(text);
        console.log(text)

    }
    getBooks = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.query}${this.props.category === 'all' ? '' : '+subject:' + this.props.category}&maxResults=${this.props.maxResults}&orderBy=${this.props.sortingType}&key=${this.props.k}`
        ).then(
            response => {
                console.log(response);
                this.props.toggleIsFetching(false);
                this.props.setPage('list');
                this.props.setBooks(response.data.items === undefined ? [] : response.data.items);
                this.props.setTotalBooksCount(response.data.totalItems);
                this.props.setStartIndex(31);
                if(response.data.totalItems===0)alert(`По вашему запросу ${this.props.query} книг не найдено.`);
            }
        )
    }
    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.getBooks();
        }
    }
    onCategoryChange = (e) => {
        let select = e.target.value;
        this.props.setCategory(select);
    }
    onSortingChange = e => {
        let sort = e.target.value;
        this.props.setSortingType(sort);
    }

    render() {
        return (
            <SearchArea
                getBooks={this.getBooks}
                onCategoryChange={this.onCategoryChange}
                onSortingChange={this.onSortingChange}
                onQueryChange={this.onQueryChange}
                onKeyDown={this.onKeyDown}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        query: state.booksPage.query,
        maxResults: state.booksPage.maxResults,
        category: state.booksPage.category,
        sortingType: state.booksPage.sortingType,
        k:state.booksPage.k
    }
}
const SearchAreaContainer = connect(mapStateToProps, {
    setBooks, setTotalBooksCount, toggleIsFetching, updateNewQuery,
    setCategory, setStartIndex, setSortingType, setPage
})(SearchAreaAPI);

export default SearchAreaContainer;