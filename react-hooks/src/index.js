import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target)
    };
    return {value, onChange};
};


const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello </h1>
            <input placeholder="Name" {...name}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
