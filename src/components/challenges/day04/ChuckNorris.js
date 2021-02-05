import React, {useState} from 'react';

const ChuckJokes = () => {
const [joke, setJoke] = useState("");

function fetchJokes() {
  const URL = "https://api.chucknorris.io/jokes/random";

  fetch(URL)
  .then((res) => res.json())
  .then((json) => setJoke(json.value));
  
  }
  return ( 
    <div>
     {joke} <button onClick={fetchJokes}>Chuck Joke</button>
    </div>
  )
}

    

  
  export default ChuckJokes; 