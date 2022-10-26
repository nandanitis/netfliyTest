import { useState } from "react";
import "./movieForm.css";

import {useMoviesContext} from  '../hooks/useMoviesContext'

const MovieForm = (props) => {
  const{dispatch} = useMoviesContext()
  const [jsonn,setJsonn] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(null);



  const handleSubmit = async (e) => {
    
    e.preventDefault();
    let obj = JSON.parse(jsonn);
    if(password==="1237"){
      const response = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify(obj),
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
        console.log(" New Movie added: ", json);
        dispatch({type: 'CREATE_MOVIE', payload: json})
        props.onClose();
      }
    }else{
       let  wrong = document.getElementById('passwordWrong');
       wrong.innerHTML="Password is Wrong"
       wrong.style.color = "red";

    }

    
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Movie Title:</label>
      <textarea
        className="enterJson"        
        onChange={(e) => setJsonn(e.target.value)}
        value={jsonn}
      />

      <label>Password :</label>
      <input 
        type="text" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        
      />
      <div id="passwordWrong"></div>

      <button className="buttonToAdd" >Add Movie</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MovieForm;
