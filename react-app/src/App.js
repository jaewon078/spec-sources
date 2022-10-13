import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header.js'
import List from './Components/List_Item.js'
import Form from './Components/Form.js'

function App() {
  return (
    <div>
      <Header/>
      <h1 id="top_header"><center>Spectator's Sources</center></h1>
      <div>
        <Form/>

        <List/>
      </div>
    </div>
  );
}

export default App;
