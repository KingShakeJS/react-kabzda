import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/pageTitle/PageTitle";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";


// остановился
function App() {

    return (
        <div>
            <OnOff/>



            <PageTitle title={'App component'}/>

            <Accordion
                titleValue={'menu'}
                collapsed={true}
            />
            <UncontrolledAccordion
                titleValue={'users'}
            />

            <UncontrolledRating/>

            <Rating value={0}/>


        </div>
    );
}


export default App