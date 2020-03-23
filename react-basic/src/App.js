import React from 'react';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
      <h1>Hello, React app</h1>
      <Person name="jenny" age="20"/>
        <Person name="manu" age="28">My Hobbies: Racing</Person>
      <Person name="tony" age="27"/>
    </div>
  );
}

export default App;
