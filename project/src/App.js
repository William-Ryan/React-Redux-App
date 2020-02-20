import React from 'react';
import './App.css';
import NamesForm from "./components/NamesForm"
import NamesList from "./components/NamesList"

function App() {
  return (
    <div className="App">
      <h1>Game Of Thrones Characters</h1>
      <NamesForm />
      <NamesList />
    </div>
  );
}

export default App;
