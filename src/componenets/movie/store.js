import {configureStore} from "@reduxjs/toolkit"
import moviesReducer from "./movieSlice"
export const store=configureStore({
    reducer:{
     movies:moviesReducer
     /*giving as object so that accessed bu others */
    }
})