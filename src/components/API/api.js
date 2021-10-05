import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://www.googleapis.com/books/v1/volumes',
})

export const SearchAreaAPI = {
   getBooks(query, category, maxResults, sortingType, k){
       return instance.get(`?q=${query}${category === 'all' ? '' : '+subject:' + category}&maxResults=${maxResults}&orderBy=${sortingType}&key=${k}`
       ).then(response=>response.data)
   }
}
export const BookListAPI = {
    loadMore(query, maxResults, startIndex, sortingType, k){
        return instance.get(`?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortingType}&key=${k}`)
    }
}