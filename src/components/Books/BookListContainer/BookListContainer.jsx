import React from "react";
import {connect} from "react-redux";
import BookList from "./BookList/BookList";
import {
    loadMoreBooks,
    setBook,
    setPage,
    setSortingType,
} from "../../../redux/books-reducer";

let BookListContainer = (props) => {

    let changePage = (bookId) => {
        props.setBook(bookId);
        props.setPage('book');
    }

    let loadMore = () => {
        if (props.startIndex + 30 > props.totalBooksCount) {
            alert('Книги закончились');
            return;
        }
        props.loadMoreBooks(props.query, props.maxResults, props.startIndex, props.sortingType, props.k);
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
    loadMoreBooks, setSortingType, setPage, setBook,
})(BookListContainer);