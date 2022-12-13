import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.js'
import List from './Components/List_Item.js'
import Form from './Components/Form.js'
import React, { useState, useEffect } from 'react';

const initialList = [{ name: "Presbo", email: "presbo@columbia.edu" }, { name: "John Jay Mouse", email: "mouse@columbia.edu" }, { name: "Water Bottle Man", email: "water@columbia.edu" }]



function App() {
  const [Movie_List, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/sources", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setMovieList(json.data);
      })
      .catch(error => console.log(error))
  }, []);

  function handleDelete(movieName) {
    fetch(`http://localhost:8080/api/deleteSource/${movieName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setMovieList(json.data);
      })
      .catch(error => console.log(error))
  }

  function handleAdd(Title, Email) {
    fetch("http://localhost:8080/api/addSource", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 5,
        name: Title,
        email: Email
      }),
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setMovieList(json.data);
      })
      .catch(error => console.log(error))
  }


  return (
    <div>
      <Header />
      <h1 id="top_header"><center>Spectator's Sources</center></h1>
      <div>
        <Form handleAdd={handleAdd} />

        <List movie_list={Movie_List} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
