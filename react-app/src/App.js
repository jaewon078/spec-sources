import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.js'
import List from './Components/List_Item.js'
import Form from './Components/Form.js'
import React, {useState} from 'react';

const initialList = [{name: "Presbo",email: "presbo@columbia.edu"}, {name: "John Jay Mouse", email: "mouse@columbia.edu"},{name: "Water Bottle Man", email: "water@columbia.edu"}]



function App() {
  const [Movie_List, setMovieList] = useState(initialList); 

  function handleDelete(movieIndex){
    const updatedList = Movie_List.slice(0, movieIndex).concat(Movie_List.slice(movieIndex + 1))
    setMovieList(updatedList)
  }
  function handleAdd(Title, Email ){
    const updatedList = Movie_List.concat([{name: Title, email: Email}])
    setMovieList(updatedList)
  }
  return (
    <div>
      <Header/>
      <h1 id="top_header"><center>Spectator's Sources</center></h1>
      <div>
        <Form handleAdd = {handleAdd}/>

        <List movie_list = {Movie_List} handleDelete = {handleDelete}/>
      </div>
    </div>
  );
}

export default App;
