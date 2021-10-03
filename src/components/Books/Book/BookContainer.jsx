import React from "react";
import {connect} from "react-redux";
import {setBook} from "../../../redux/books-reducer";

class BookApi extends React.Component{

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <div>
                    <img src={this.props.books[this.props.book].volumeInfo.imageLinks.thumbnail} alt=""/>

                </div>
                <div>
                    <h2>Title: {this.props.books[this.props.book].volumeInfo.title}</h2>
                    <h3>Author: {this.props.books[this.props.book].volumeInfo.hasOwnProperty('authors')?
                        this.props.books[this.props.book].volumeInfo.authors[0]:null}</h3>
                    <h3>Description: {this.props.books[this.props.book].volumeInfo.description}</h3>
                </div>

            </div>
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


