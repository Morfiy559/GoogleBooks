import React from "react";
import {connect} from "react-redux";
import {setBook} from "../../../redux/books-reducer";
import Book from "./Book/Book";

let BookContainer = (props) => {

    return (
        <Book
            title={props.books[props.book].volumeInfo.title}
            image={props.books[props.book].volumeInfo.imageLinks.thumbnail}
            categories={props.books[props.book].volumeInfo.categories}
            authors={props.books[props.book].volumeInfo.authors}
            description={props.books[props.book].volumeInfo.description}
        />
    );
}


let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        query: state.booksPage.query,
        book: state.booksPage.book
    }
}

export default connect(mapStateToProps, {setBook})(BookContainer);


