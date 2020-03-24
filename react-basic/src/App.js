import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const App = props => {

    const [ personsSates, setPersonsSates ] = useState({
        persons: [
            {name: 'max', age : 25},
            {name: 'mini', age : 20},
            {name: 'manu', age : 22}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsSates({
            persons: [
                {name: '1', age : 25},
                {name: '2', age : 20},
                {name: '3', age : 22}
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hello, React app</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsSates.persons[0].name} age={personsSates.persons[0].age}/>
            <Person name={personsSates.persons[1].name} age={personsSates.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsSates.persons[2].name} age={personsSates.persons[2].age}/>


        </div>
    );
};

export default App;
