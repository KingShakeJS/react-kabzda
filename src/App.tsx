import React from 'react';
import './App.css';

function App() {

    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>

        </div>
    );
}


export const Rating = () => {

    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
};

export const Accordion = () => {


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


export const AppTitle = () => {
    return (<>App component</>)
};


export const Star = () => {
    return (
        <div>
            star
        </div>
    );
};

export default App