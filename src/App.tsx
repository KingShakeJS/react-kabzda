import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/pageTitle/PageTitle";


// остановился
function App() {

    return (
        <div>
            <PageTitle title={'App component'}/>

            <Accordion
                titleValue={'menu'}
                collapsed={true}
            />
            <Accordion
                titleValue={'users'}
                collapsed={false}
            />

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}


export default App