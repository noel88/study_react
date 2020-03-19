import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, [number]);
    return (
        <div className="App">
          <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
