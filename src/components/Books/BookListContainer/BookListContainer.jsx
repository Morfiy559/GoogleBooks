import React from "react";
import {connect} from "react-redux";
import BookList from "./BookList/BookList";
import {
    loadMoreBooks,
    setBook,
    setPage,
    setSortingType,
    setStartIndex,
    toggleIsFetching
} from "../../../redux/books-reducer";
import * as axios from "axios";

class BookListAPI extends React.Component {

    changePage = (bookId) => {
        this.props.setBook(bookId);
        this.props.setPage('book');
    }

    loadMore = () => {
        if (this.props.startIndex + 30 > this.props.totalBooksCount) {
            alert('Книги закончились');
            return;
        }
        this.props.toggleIsFetching(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.query}&maxResults=${this.props.maxResults}&startIndex=${this.props.startIndex}&orderBy=${this.props.sortingType}&key=${this.props.k}`
        ).then(
            response => {
                this.props.toggleIsFetching(false);
                this.props.setStartIndex(this.props.startIndex + 30);
                this.props.loadMoreBooks(response.data.items);
            }
        )

    }

    render() {
        return (
            <>
                <BookList
                    loadMore={this.loadMore}
                    changePage={this.changePage}
                    books={this.props.books}
                    totalBooksCount={this.props.totalBooksCount}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        isFetching: state.booksPage.isFetching,
        query: state.booksPage.query,
        maxResults: state.booksPage.maxResults,
        totalBooksCount: state.booksPage.totalBooksCount,
        startIndex: state.booksPage.startIndex,
        sortingType: state.booksPage.sortingType,
        k: state.booksPage.k
    }
}

const BookListContainer = connect(mapStateToProps, {
    loadMoreBooks, toggleIsFetching, setStartIndex,
    setSortingType, setPage, setBook
})(BookListAPI);
export default BookListContainer;