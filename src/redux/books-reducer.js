const SET_BOOKS = 'SET_BOOKS';
const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const UPDATE_NEW_QUERY = 'UPDATE_NEW_QUERY';
const LOAD_MORE = 'LOAD_MORE';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_START_INDEX = 'SET_START_INDEX';
const SET_SORTING_TYPE = 'SET_SORTING_TYPE';
const SET_BOOK = 'SET_BOOK';
const PAGE = 'PAGE';
let initialState = {
    books:[],
    pageSize:30,
    totalBooksCount:0,
    isFetching:false,
    query:'',
    maxResults:30,
    category:'all',
    startIndex:31,
    sortingType:'relevance',
    book:0,
    page:'list',
    k:'AIzaSyBIKTik4HMz17K2L14Wooy1GhlYFOA_WO4'
}

const booksReducer = (state = initialState, action)=>{

    switch (action.type){
        case SET_BOOKS:
            return {
                ...state,
                books:[...action.books]

        };
        case SET_TOTAL_BOOKS_COUNT:
            return {
                ...state,
                totalBooksCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case UPDATE_NEW_QUERY:
            return {
                ...state,
                query: action.query
            };
        case LOAD_MORE:
            return {
                ...state,
                books: [...state.books, ...action.books]
            };
        case SET_CATEGORY:
            return {
                ...state,
                category:action.category
            };
        case SET_START_INDEX:
            return {
                ...state,
                startIndex: action.index
            };
        case SET_SORTING_TYPE:
            return {
                ...state,
                sortingType: action.sortingType
            };
        case SET_BOOK:
            return {
                ...state,
                book:action.book
            };
        case PAGE:
            return {
                ...state,
                page:action.page
            }
        default:
            return state;
    }
}

export const setBooks=(books)=>({type:SET_BOOKS,books});
export const setTotalBooksCount=(count)=>({type:SET_TOTAL_BOOKS_COUNT, count});
export const toggleIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching});
export const updateNewQuery=(query)=>({type:UPDATE_NEW_QUERY, query});
export const loadMoreBooks=(books)=>({type:LOAD_MORE,books});
export const setCategory=(category)=>({type:SET_CATEGORY,category});
export const setStartIndex=(index)=>({type:SET_START_INDEX,index});
export const setSortingType=(sortingType)=>({type:SET_SORTING_TYPE,sortingType});
export const setBook=(book)=>({type:SET_BOOK,book});
export const setPage=(page)=>({type:PAGE,page});

export default booksReducer;
