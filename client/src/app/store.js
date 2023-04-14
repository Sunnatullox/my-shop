import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/userSlice'
import productReducer from '../features/products/productSlice'
import blogsReducer  from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice"


export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        blogs:blogsReducer,
        conatct:contactReducer
    }
})
