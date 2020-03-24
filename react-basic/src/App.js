import React, {Component} from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component{
  state = {
    persons: [
        {name: 'max', age: '28'},
        {name: 'Tony', age: '22'},
        {name: 'manu', age: '27'}
    ],
      otherState: 'some other value'
  };

  switchNameHandler = () => {
    console.log('was clicked!');
    this.setState({ persons: [
            {name: 'xxxx', age: '28'},
            {name: 'sss', age: '22'},
            {name: 'ssds', age: '27'}
        ]})
  };

    render() {
        return (
            <div className="App">
                <h1>Hello, React app</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>


            </div>
        );
    }
};

export default App;
