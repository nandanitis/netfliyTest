import { useState, useEffect } from "react";
import "./reviewsForm.css";

import { useParams } from "react-router-dom";

const ReviewsForm = (props) => {
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [reviewGiven, setreviewGiven] = useState("");
  const { id } = useParams();

  const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMovie = async () => {
          const response = await fetch(`/api/movies/${id}`);
          const json = await response.json();
          if (response.ok) {
            setMovie(json["movie"]);
          }
        };
        fetchMovie();
      }, []);


      const handleSubmit = async (e) => {
        e.preventDefault();
        let title=movie.title;
        const review = { name,title, rating, reviewGiven };
    
        const response = await fetch(`/api/movies/${id}`, {
          method: "POST",
          body: JSON.stringify(review),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
    
        if (!response.ok) {
          setError(json.error);
        }
        if (response.ok) {
          setError(null);
          setName('');
          setreviewGiven('');
          setRating('');
          console.log(" New Review added: ", json);
          props.onClose();
        }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Name :</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />

      <label>Your Rating :</label>
      <input
        type="number"
        min="1"
        max="10"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        required
      />

      <label>Review :</label>
      <input
        type="text"
        onChange={(e) => setreviewGiven(e.target.value)}
        value={reviewGiven}
        required
      />

      <button className="buttonToAdd">Add Review</button>
      {error && <div className="errorr">{error}</div>}
    </form>
  );
};

export default ReviewsForm;
