import React from 'react';
import './App.css';

function App() {
    debugger
    return (
        <div>
            App component
            <Rating/>
            <Accordion/>
        </div>
    );
}


export const Rating = () => {
    debugger

    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    );
};

export const Accordion = () => {
    debugger

    return (
        <div>

            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </div>
    );
};


export default App