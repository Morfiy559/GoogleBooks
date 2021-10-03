import React from "react";
import BookCard from "./BookCard/BookCard";
import './BookList.css';
import noImage from '../../../../assets/images/noImage.png';
import Preloader from "../../../common/Preloader/Preloader";
let BookList = (props) =>{
    return(

        <div className='container'>
            <div className="totalBooksCount">totalBooksCount: {props.totalBooksCount}</div>
            <div className="row justify-content-between">
            {
                props.books.map((book,index)=><BookCard
                    image={book.volumeInfo.hasOwnProperty('imageLinks')===false?noImage:book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    categories={book.volumeInfo.hasOwnProperty('categories')===false?null:book.volumeInfo.categories}
                    authors={book.volumeInfo.authors}
                    key={book.id}
                    id={index}
                    changePage={props.changePage}
                />)
            }
            </div>
            {props.isFetching?<Preloader/>:null}
            <div className="buttonCont">
                { props.totalBooksCount===0? null: <button className='BookListButton' onClick={props.loadMore}>LOAD MORE</button>}
            </div>
        </div>
    )
}

export default BookList;