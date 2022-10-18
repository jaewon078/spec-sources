import React, {useState} from 'react';

function Form({handleAdd }) {
    const [MovieTitle, setMovieTitle] = useState("");
    const [Email, setEmail] = useState(""); 
    return (
        <form>
          <span>
            <label class="upper_text" for="name">Source Name:   </label>
          </span>
          <span>
            <input class="upper_box" type="text" id="name" onChange = {(e) => setMovieTitle(e.target.value) }/>
          </span>
          <span>
            <label class="upper_text" for="email">Source Email:</label>
          </span>
          <span> 
            <input class="upper_box" type="email" id="email" onChange = {(e) => setEmail(e.target.value)}/>
          </span>
          <button class="green_button" type = "button" onClick = {() => handleAdd(MovieTitle, Email)}>ADD</button>
        </form>
    );
}

export default Form;