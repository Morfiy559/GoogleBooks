import React from "react";
import {connect} from "react-redux";
import {setBook} from "../../../redux/books-reducer";
import Book from "./Book/Book";

class BookApi extends React.Component{

    render() {
        return(
            <Book
                title={this.props.books[this.props.book].volumeInfo.title}
                image={this.props.books[this.props.book].volumeInfo.imageLinks.thumbnail}
                categories={this.props.books[this.props.book].volumeInfo.categories}
                authors={this.props.books[this.props.book].volumeInfo.authors}
                description={this.props.books[this.props.book].volumeInfo.description}
            />
        );
    }

}

let mapStateToProps = (state) =>{
    return{
        books: state.booksPage.books,
        query:state.booksPage.query,
        book:state.booksPage.book
    }
}

let BookContainer = connect(mapStateToProps,{setBook})(BookApi);
export default BookContainer;


