import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [ personsSates, setPersonsSates ] = useState({
        persons: [
            {name: 'max', age : 25},
            {name: 'mini', age : 20},
            {name: 'manu', age : 22}
        ],
        otherState: 'some other value',
        showPersons: false
    });

    const switchNameHandler = (newName) => {
        setPersonsSates({
            persons: [
                {name: newName, age : 25},
                {name: '2', age : 20},
                {name: '3', age : 22}
            ]
        });
    };

    const nameChangeHandler = (event) => {
        setPersonsSates({
            persons: [
                {name: event.target.value, age : 25},
                {name: '2', age : 20},
                {name: '3', age : 22}
            ]
        });
    };

    const togglePersonsHandler = () => {
        const doesShow = personsSates.showPersons;
        setPersonsSates({ persons: [
                {name: 'max', age : 25},
                {name: 'mini', age : 20},
                {name: 'manu', age : 22}
            ],showPersons: !doesShow });

    };

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (personsSates.showPersons) {
        persons = (
            <div>
                <Person
                    name={personsSates.persons[0].name}
                    age={personsSates.persons[0].age}
                    changed={nameChangeHandler}
                />
                <Person
                    name={personsSates.persons[1].name}
                    age={personsSates.persons[1].age}
                    click={() => switchNameHandler('new')}
                >My Hobbies: Racing
                </Person>
                <Person
                    name={personsSates.persons[2].name}
                    age={personsSates.persons[2].age}
                />
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Hello, React app</h1>
            <button
                onClick={togglePersonsHandler}
                style={style}
            >Switch Name
            </button>
            {/*<button onClick={this.switchNameHandler.bind(this, 'new')}>Switch Name</button>*/}
            {persons}
        </div>
    );
};

export default App;
