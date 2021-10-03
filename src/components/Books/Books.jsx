import React from "react";
import SearchAreaContainer from "./SearchAreaContainer/SearchAreaContainer";
import BookListContainer from "./BookListContainer/BookListContainer";
import BookContainer from "./BookContainer/BookContainer";

let Books = (props) => {

    return( <>
                <SearchAreaContainer/>
                {
                props.page==='list'?
                <BookListContainer/>:
                <BookContainer/>
                }
            </>
    );

}
export default Books;