import React from "react";
import './Book.css';
let Book = (props) => {

    return(
        <div className="container">
            <div className='row'>
                <div className='col-12 col-sm-6 bookImageCont'>
                    <img className='bookImage' src={props.image} alt=""/>
                </div>
                <div className='col-12 col-sm-6'>
                    <h2>Title: {props.title}</h2>
                    <h3 className='categories'>Categories: {props.categories}</h3>
                    <h3 className='authors'>Authors: {props.authors===undefined?null:props.authors.map((author,i,a)=>a.length-1===i?`${author}`:`${author}, `)}</h3>
                    <h3 className='description'>Description: {props.description}</h3>
                </div>
            </div>
        </div>
    )
}
export default Book;
