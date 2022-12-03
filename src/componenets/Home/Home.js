import React, { useDebugValue } from "react";
import Movielisting from "../Movielisting/Movielisting"
import movieapi from "../api/movieapi";
import { APIkey } from "../api/apikey";
import { useDispatch } from "react-redux";
import {addMovies,fetchAsyncMovies,fetchAsyncseries} from "../movie/movieSlice";


export default function Home(){

const dispatch=useDispatch();
    React.useEffect(()  =>  {
      dispatch(fetchAsyncMovies())
      dispatch(fetchAsyncseries())
        
      /*  const fetchmovie=async() =>{
        const response=await movieapi.get(`?apikey=${APIkey}&s=${movie}&type=movie`)
        .catch((err)=>{
            console.log(err)
        }); 
     dispatch(addMovies(response.data));
        }; 
      
        fetchmovie();
         */
    },[dispatch])
   
  

    return(
        <div>
       <div className="banner-img"> </div>
       <Movielisting />
       
       </div>
    )
    }