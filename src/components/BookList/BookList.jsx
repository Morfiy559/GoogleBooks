import React from "react";
import {connect} from "react-redux";
import './BookList.css';
import {
    loadMoreBooksSuccess,
    setBook,
    setPage,
    setSortingType, setStartIndex, toggleIsFetching,
} from "../../redux/books-reducer";
import BookCard from "./BookCard/BookCard";
import noImage from "../../assets/images/noImage.png";
import Preloader from "../common/Preloader/Preloader";
import axios from "axios";

let BookList = (props) => {

    let changePage = (bookId) => {
        props.setBook(bookId);
        props.setPage('book');
    }

    let loadMore = async () => {
        if (props.startIndex + 30 > props.totalBooksCount) {
            alert('Книги закончились');
            return;
        }
        props.toggleIsFetching(true);
        let data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.query}&maxResults=${props.maxResults}&startIndex=${props.startIndex}&orderBy=${props.sortingType}&key=${props.k}`).then(response=>response.data);
        props.toggleIsFetching(false);
        props.setStartIndex(props.startIndex + 30);
        props.loadMoreBooksSuccess(data.items);
    }

    return (
        <div className='container'>
            <div className="totalBooksCount">totalBooksCount: {props.totalBooksCount}</div>
            <div className="row justify-content-between">
                {
                    props.books.map((book, index) => <BookCard
                        image={book.volumeInfo.hasOwnProperty('imageLinks') === false ? noImage : book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        categories={book.volumeInfo.hasOwnProperty('categories') === false ? null : book.volumeInfo.categories}
                        authors={book.volumeInfo.authors}
                        key={book.id}
                        id={index}
                        changePage={changePage}
                    />)
                }
            </div>
            {props.isFetching ? <Preloader/> : null}
            <div className="buttonCont">
                {props.totalBooksCount === 0 ? null :
                    <button className='BookListButton' onClick={loadMore}>LOAD MORE</button>}
            </div>
        </div>
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
    setSortingType, setPage,
    setBook, toggleIsFetching, setStartIndex,
    loadMoreBooksSuccess,
})(BookList);