import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MovieForm from "../components/movieform";
import Modal from "../Modal/Modal";
import "./movies.css";



const Tvshow = () => {

  const [tvshows,settvshows] = useState('');
   const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`/api/tvshows`);
      const json = await response.json();

      if (response.ok) {
        settvshows(json);
        console.log(json);
      }
    };

    fetchMovies();
  }, []);



  return (
    <div id="container">
     <div className="margin-Top">
      <div id="section">
        <div id="content">
          <button className="addMovie" onClick={() => setShow(true)}>
            Add TV Show
          </button>
          <Modal title="Add A New Movie" onClose={() => setShow(false)} show={show}>
            <MovieForm onClose={() => setShow(false)} />
          </Modal>

          <div className="post">
            {/* post cards */}
            {tvshows &&
              tvshows.map((tvshow) => (
                <div className="postCards" key={tvshow._id}>
                  <a href="article.html">
                    <Link to={`/api/tvshows/${tvshow._id}`} tvshow={tvshow}>
                      <img src={tvshow.posterUrl} />
                      <h1 className="postTitle">{tvshow.title}</h1>
                      <div className="movie-infoo">
                        <span> {tvshow.year} </span>||
                        <span> {tvshow.runtime + " Season"} </span>
                        <div>{tvshow.genres.join(", ")}</div>
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

export default Tvshow;
