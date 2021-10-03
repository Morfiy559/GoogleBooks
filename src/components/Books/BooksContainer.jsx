import React from "react";
import {connect} from "react-redux";
import Books from "./Books";

let BooksAPI=(props)=>{

    return(
        <Books page={props.page}/>
    )
}

let mapStateToProps=(state)=>{
    return{
        page:state.booksPage.page
    }
}
let BooksContainer = connect(mapStateToProps,{})(BooksAPI);
export default BooksContainer;