import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleMovie.css";
import Modal from "../Modal/Modal";
import ReviewsForm from "../components/reviewsForm";
import TvreviewsForm from "../components/tvreviewsForm";

const SingleTvshow = () => {
    const [movie, setMovie] = useState(null);
    const [review, setReview] = useState(null);
    const [show, setShow] = useState(false);
  
    const { id } = useParams();
  
  
    useEffect(() => {
      const fetchMovie = async () => {
        const response = await fetch(`https://moviewars2.herokuapp.com/api/tvshows/${id}`);
        const json = await response.json();
  
        if (response.ok) {
          setMovie(json["tvshow"]);
          let reviewFilter = json["review"].filter(
              (review) => review.title === json["tvshow"]["title"]
              );
              console.log(reviewFilter);
              setReview(reviewFilter);
            }
        };
        
        fetchMovie();
    }, []);
    
    return (
      <div className="container">
        {movie && (
          <div className="box">
            <img className="movieImage" src={movie.posterUrl} alt="" />
            <h1>
              Movie Name : <span className="titleSpan">{movie.title}</span>
            </h1>
            <div className="details">
              <span>Release: {movie.year}</span>
              <span>Seasons :{movie.runtime}</span>
            </div>
            <h3 className="plot">
              PLOT : <span>{movie.plot}</span>{" "}
            </h3>
  
            <div className="reviewStarts">
              
            <h1 className="reviewTitle">Reviews for the Movie : </h1>
            <button className="addReview" onClick={() => setShow(true)}>
              Add Review
            </button>
            </div>
  
            <Modal title="Add A New Review" onClose={() => setShow(false)} show={show}>
              {<TvreviewsForm  onClose={() => setShow(false)} />}
            </Modal>
            <div className="ALL-Reviews">
  
            
            {review &&
              review.map((review) => (
                <div className="review-details" key={review._id}>
                  
                  <h4 className="userReview">User : {review.name}</h4>
                  <p>
                    <strong>Review Given: </strong>
                    {review.rating}
                  </p>
                  <p>
                    <strong> {review.reviewGiven} </strong>
                   
                  </p>
                  <p>{review.createdAt}</p>
                </div>
              ))}
          </div>
          </div>
        )}
      </div>
    );
}

export default SingleTvshow