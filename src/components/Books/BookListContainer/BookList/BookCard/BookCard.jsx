import React from "react";
import './BookCard.css';
let BookCard = (props) =>{
    return(

        <div className="col-12 col-sm-4 col-md-3 book">
                <img className='cardImage' src={props.image} alt="" onClick={()=>{props.changePage(props.id)}}/><br/>
            <div className="data">
                <div className="title">Title: {props.title}</div><br/>
                <div className="categories">Category: {props.categories===null?null:props.categories[0]}</div><br/>
                <div className="authors">Authors: {props.authors}</div>
            </div>
        </div>

    )
}
export default BookCard;