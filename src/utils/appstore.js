import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './CartSlice.js'
import BookReducer from './BookSlice.js'

const appstore = configureStore({
    reducer : {
        cart : cartReducer,
        UpdatedBooks : BookReducer
    }
})

export default appstore;