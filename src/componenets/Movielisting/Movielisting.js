import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies,getAllSeries } from "../movie/movieSlice";
import "./Movielisting.css"
import Slider from "react-slick";
import Moviecard from "../Moviecard/Moviecard"
export default function Movielisting()
{
    
    let movielist
    let serieslist
    const movies=useSelector(getAllMovies)
    const series=useSelector(getAllSeries)
    /*rom redux we are taking data */ 
    if(movies.Response==="True"){
        console.log(movies)
    }
  
   if(movies.Response==="True"){
  movielist = movies.Search.map((item) => {
        return (
            <Moviecard
                key={item.id}
                item={item}
            />
        )
    })
}
      
   if(series.Response==="True"){
    serieslist = series.Search.map((item) => {
          return (
              <Moviecard
                  key={item.id}
                  item={item}
              />
          )
      })
  }
      
  
    return(
      <div>
       <div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>
        <div className="movie-container">
           {movielist}
           
            
            </div>
        </div>
        </div>
        
        <div className="series-wrapper">
        <div className="series-list">
            <h2>series</h2>
        <div className="movie-container">{serieslist}</div>
        </div>
        </div>
        </div>
     
     
       
    )
}