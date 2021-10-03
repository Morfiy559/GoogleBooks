import React from "react";
import loupe from "../../../../assets/images/loupe.svg";

let SearchArea = (props) => {
    return (
        <div className='search-area-wrapper'>
            <div className="search-area container">
                <header className="row header">
                    <h1>Search for books</h1>
                </header>
                <div className="search row">
                    <input onKeyDown={(e) => {
                        props.onKeyDown(e)
                    }} onChange={(e) => {
                        props.onQueryChange(e)
                    }} type="text"/>
                    <button className='search-button' onClick={() => {
                        props.getBooks()
                    }} type='submit'>
                        <img id='loupe' src={loupe} alt="loupe"/>
                    </button>
                </div>
                <div className="row">
                    <label className='col-12 col-sm-6'>Categories&nbsp;
                        <select onChange={e => {
                            props.onCategoryChange(e)
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
                            props.onSortingChange(e)
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
export default SearchArea;