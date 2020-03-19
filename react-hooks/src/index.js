import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';


const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []);
    return element;
};

const App = () => {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
          <h1 ref={title}>Hi</h1>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
