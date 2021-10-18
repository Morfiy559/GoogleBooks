import React from "react";
import './SearchArea.css';
import {connect} from "react-redux";
import {
    setBooks,
    setCategory, setPage,
    setSortingType, setStartIndex, setTotalBooksCount, toggleIsFetching,
    updateNewQuery
} from "../../redux/books-reducer";
import loupe from "../../assets/images/loupe.svg";
import axios from "axios";


let SearchArea = (props) => {

    let onQueryChange = (e) => {
        let text = e.target.value;
        props.updateNewQuery(text);
    }
    let getBooks = async () => {
        if (props.query === '') {
            alert('Введите строку запроса');
            return;
        }
        props.toggleIsFetching(true);
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.query}${props.category === 'all' ? '' : '+subject:' + props.category}&maxResults=${props.maxResults}&orderBy=${props.sortingType}&key=${props.k}`)
            // .then(response => response.data)
            // .then(data => {
        let data = response.data;
                    if (data.totalItems === 0) {
                        alert(`По запросу ${props.query} ничего не найдено`);
                    }
                    props.toggleIsFetching(false);
                    props.setPage('list');
                    props.setBooks(data.items === undefined ? [] : data.items);
                    props.setTotalBooksCount(data.totalItems);
                    props.setStartIndex(31);
            //     }
            // )

    }
    let onKeyDown = async (e) => {
        if (e.keyCode === 13) await getBooks();
    }
    let onCategoryChange = (e) => {
        let select = e.target.value;
        props.setCategory(select);
    }
    let onSortingChange = e => {
        let sort = e.target.value;
        props.setSortingType(sort);
    }


    return (
        <div className='search-area-wrapper'>
            <div className="search-area container">
                <header className="row header">
                    <h1>Search for books</h1>
                </header>
                <div className="search row">
                    <input onKeyDown={(e) => {
                        onKeyDown(e)
                    }} onChange={(e) => {
                        onQueryChange(e)
                    }} type="text"/>
                    <button className='search-button' onClick={
                        getBooks
                    } type='submit'>
                        <img id='loupe' src={loupe} alt="loupe"/>
                    </button>
                </div>
                <div className="row">
                    <label className='col-12 col-sm-6'>Categories&nbsp;
                        <select onChange={e => {
                            onCategoryChange(e)
                        }}>
                            <option value="all">All</option>
                            <option value="art">Art</option>
                            <option value="biograpy">Biograpy</option>
                            <option value="computers">Computers</option>
                            <option value="history">History</option>
                            <option value="medical">Medical</option>
                            <option value="poetry">Poetry</option>
                        </select>
                    </label>
                    <label className='col-12 col-sm-6'>Sorting by&nbsp;
                        <select onChange={e => {
                            onSortingChange(e)
                        }}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )

}

let mapStateToProps = (state) => {
    return {
        query: state.booksPage.query,
        maxResults: state.booksPage.maxResults,
        category: state.booksPage.category,
        sortingType: state.booksPage.sortingType,
        k: state.booksPage.k,
        totalBooks: state.booksPage.totalBooksCount
    }
}


export default connect(mapStateToProps, {
    updateNewQuery, setCategory, setSortingType,
    toggleIsFetching, setPage, setBooks, setTotalBooksCount,
    setStartIndex,
})(SearchArea);