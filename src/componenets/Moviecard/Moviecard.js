import React from "react";
import "./Moviecard.css"
import { Link } from "react-router-dom";
export default function Moviecard(props)
{
  
   
  
    return(

      <div className="card-item">
      < Link to={`/movie/${props.item.imdbID}`}>

        <div className="card-inner">
          <div className="card-top">
            <img src={props.item.Poster} alt={props.item.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{props.item.Title}</h4>
              <p>{props.item.Year}</p>
            </div>
          </div>
        </div>
      </Link>
      </div>
 


    


    )
}