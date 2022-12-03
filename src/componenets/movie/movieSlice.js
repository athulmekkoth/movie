 import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
 import movieapi from "../api/movieapi";
import { APIkey } from "../api/apikey";



//this was fot thunk ie ertra reducer rlse all in home api thunk miidleware use
 export const fetchAsyncMovies=createAsyncThunk(`movies/fetchAsyncMovies`,async(term)=>{

      const response=await movieapi.get(`?apikey=${APIkey}&s=${term}&type=movie`)
      return response.data

      })
    
      export const fetchAsyncseries=createAsyncThunk(`movies/fetchAsyncseries`,async(term)=>{

         const response=await movieapi.get(`?apikey=${APIkey}&s=${term}&type=series`)
         return response.data
   
         })
         export const fetchAsyncdetail=createAsyncThunk  (`movies/fetchAsyncdetail`,async(id)=>{

            const response=await movieapi.get(`?apikey=${APIkey}&i=${id}&Plot=full`)
            return response.data
      
            })
   

       
 const initialState={
    movies:{},
    series:{},
    detail:{}
 };
 const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
            
        
          },
          removeselectedmovieorseries:(state)=>{
            state.detail={};
          }
         },
   extraReducers:{
      [fetchAsyncMovies.pending]:()=>{
         console.log("pending")
      },
      [fetchAsyncMovies.fulfilled]:(state ,{payload})=>{
         console.log("succes")
        return  {...state,movies:payload}

      },
      [fetchAsyncMovies.rejected]:()=>{
         console.log("fail")
      
      },
      [fetchAsyncseries.fulfilled]:(state ,{payload})=>{
         console.log("succes")
        return  {...state,series:payload}

      },
      [fetchAsyncdetail.fulfilled]:(state ,{payload})=>{
         console.log("succes")
        return  {...state,detail:payload}

      },
   },
    


    });
    export const{addMovies,removeselectedmovieorseries} =movieSlice.actions
    export const getAllMovies=(state)=>state.movies.movies
    export const getAllSeries=(state)=>state.movies.series
    export const getAllDetails=(state)=>state.movies.detail

 export default movieSlice.reducer