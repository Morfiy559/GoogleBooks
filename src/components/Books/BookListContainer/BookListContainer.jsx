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
import {BookListAPI} from "../../API/api";

let BookListContainer = (props) => {

    let changePage = (bookId) => {
        props.setBook(bookId);
        props.setPage('book');
    }

    let loadMore = () => {
        if (props.startIndex + 30 > props.totalBooksCount) {
            alert('Книги закончились');
            return;
            props.toggleIsFetching(true);
            BookListAPI.loadMore(props.query, props.maxResults, props.startIndex, props.sortingType, props.k)
                .then(
                    data => {
                        props.toggleIsFetching(false);
                        props.setStartIndex(props.startIndex + 30);
                        props.loadMoreBooks(data.items);
                    }
                )

        }
    }
        return (
            <>
                <BookList
                    loadMore={loadMore}
                    changePage={changePage}
                    books={props.books}
                    totalBooksCount={props.totalBooksCount}
                    isFetching={props.isFetching}
                />
            </>
        )

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


export default connect(mapStateToProps, {
    loadMoreBooks, toggleIsFetching, setStartIndex,
    setSortingType, setPage, setBook
})(BookListContainer);