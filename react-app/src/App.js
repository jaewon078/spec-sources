import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header.js'
import ListItem from './Components/List_Item.js'
import Form from './Components/Form.js'

function App() {
  return (
    <div>
      <Header/>
      <h1 id="top_header"><center>Spectator's Sources</center></h1>
      <div>
        <Form/>

        <ListItem num = "1" name = "Presbo" email = "presbo@columbia.edu"/>
        <ListItem num = "2" name = "John Jay Mouse" email = "mouse@columbia.edu"/>
        <ListItem num = "2" name = "Water Bottle Man" email = "water@columbia.edu"/>

      </div>
    </div>
  );
}

export default App;
