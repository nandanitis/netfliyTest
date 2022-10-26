import React from "react";

import { useEffect, useState } from "react";
import { useMoviesContext } from "../hooks/useMoviesContext";
import { Link } from "react-router-dom";

import MovieForm from "../components/movieform";
import Modal from "../Modal/Modal";
import "./movies.css";



const Movies = () => {

  const {movies, dispatch} = useMoviesContext()
   const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:"SET_MOVIES", payload:json})
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async(_id) =>{
    const response = await fetch('/api/movies/'+_id,{
      method:'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:"DELETE_MOVIE", payload:json})
    }
  }


  return (
    <div id="container">
    <div className="margin-Top">
      <div id="section">
        <div id="content">
          <button className="addMovie" onClick={() => setShow(true)}>
            Add Movie
          </button>
          <Modal title="Add A New Movie" onClose={() => setShow(false)} show={show}>
            <MovieForm onClose={() => setShow(false)} />
          </Modal>

          <div className="post">
            {/* post cards */}
            {movies &&
              movies.map((movie) => (
                <div className="postCards" key={movie._id}>
                  <a href="article.html">
                    <Link to={`/api/movies/${movie._id}`} movie={movie}>
                      <img src={movie.posterUrl} />
                      <h1 className="postTitle">{movie.title}</h1>
                      <div className="movie-infoo">
                        <span> {movie.year} </span>||
                        <span> {movie.runtime + "min."} </span>
                        <div>{movie.genres.join(", ")}</div>
                      </div>
                    </Link>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Movies;
