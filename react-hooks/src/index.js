import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

const useConfirm = (message, callback) => {
    if (typeof callback !== 'function') {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        }
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log('Delete the world');
    const confirmDelete = useConfirm("are you sure?", deleteWorld);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
