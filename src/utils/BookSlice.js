import { createSlice } from "@reduxjs/toolkit";
import { Books } from "/src/utils/mockdata.js"

const BookSlice = createSlice({
    name: 'Books',
    initialState : {
        Books : Books
    },
    reducers:{
        addBook : (state, action) => {
            state.Books.push(action.payload)
        }
    }
})

export const { addBook } = BookSlice.actions;

export default BookSlice.reducer;