import React from "react";
import {connect} from "react-redux";
import {setBook} from "../../redux/books-reducer";
import './Book.css';
let Book = (props) => {
let book = props.books[props.book];
    return (
    <div className="container">
        <div className='row'>
            <div className='col-12 col-sm-6 bookImageCont'>
                <img className='bookImage' src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
            </div>
            <div className='col-12 col-sm-6'>
                <h2>Title: {book.volumeInfo.title}</h2>
                <h3 className='categories'>Categories: {book.volumeInfo.categories}</h3>
                <h3 className='authors'>Authors: {book.volumeInfo.authors===undefined?null:book.volumeInfo.authors.map((author,i,a)=>a.length-1===i?`${author}`:`${author}, `)}</h3>
                <h3 className='description'>Description: {book.volumeInfo.description}</h3>
            </div>
        </div>
    </div>
    );
}


let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        query: state.booksPage.query,
        book: state.booksPage.book
    }
}

export default connect(mapStateToProps, {setBook})(Book);


