import React, { useState } from 'react';
import { ReactDOM } from "react"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncseries } from '../movie/movieSlice';
import './Navbar.css'
export default function Navbar()
{
    const dispatch=useDispatch();
    /*const[term,search]=useState("")

     const submithandle=(e)=>{
        e.preventDefault()

        dispatch(fetchAsyncMovies(e.target.value));
        dispatch(fetchAsyncseries(e.target.value));
      
    }*/
   
        const [term, setTerm] = useState("");
    
        const submitHandler = (e) => {
          e.preventDefault();
          if (term === "") return alert("Please enter search term!");

          dispatch(fetchAsyncMovies(term));
          dispatch(fetchAsyncseries(term));
          setTerm("");
        };
    return(
        <div className='navbar'>
       
     <img className='nimg' src={require("./tmoviesofficial.jpg")} alt="dd" />
       <div className='search'>
      < form onSubmit={submitHandler}>
          <input
          className="inp"
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className='.bt'>SEARCH</button>
        </form>


        </div>
        <h1 className='ntx'>MovieMania</h1>
      
        </div>
    )
}

/*   <form onSubmit={submitHandler}>     
        
 <input  type="text" placeholder="search movies or shoes" onChange={(e)=>submitHandler(e.target.value)} />
<button*   type='submit'>SEARCH</button*/