import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <div class="header">
        <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" height="60" alt="Spec Logo" />
      </div>
      <h1 id="top_header"><center>Spectator's Sources</center></h1>
      <div>
        <form>
          <span>
            <label class="upper_text" for="name">Source Name:   </label>
          </span>
          <span>
            <input class="upper_box" type="text" id="name" />
          </span>
          <span>
            <label class="upper_text" for="email">Source Email:</label>
          </span>
          <span>
            <input class="upper_box" type="email" id="email" />
          </span>
          <button class="green_button">ADD</button>
        </form>

        <div class="whiteBoxMain">
          <span class="dark_blue">1</span>
          <span class="dark_blue authorName">Presbo</span>
          <span class="email">presbo@columbia.edu</span>
          <button class="red_button">DELETE</button>
        </div>

        <div class="whiteBoxMain">
          <span class="dark_blue">2</span>
          <span class="dark_blue authorName">John Jay Mouse</span>
          <span class="email">mouse@columbia.edu</span>
          <button class="red_button">DELETE</button>
        </div>

        <div class="whiteBoxMain">
          <span class="dark_blue">3</span>
          <span class="dark_blue authorName">Water Bottle Man</span>
          <span class="email">water@columbia.edu</span>
          <button class="red_button">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
