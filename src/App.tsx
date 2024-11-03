import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {RaringValueType, Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/pageTitle/PageTitle";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";


// остановился
function App() {
    const [ratingValue, setRatingValue] = useState<RaringValueType>(0)

    return (
        <div className={'App'}>
            <OnOff/>


            <PageTitle title={'App component'}/>

            <Accordion
                titleValue={'menu'}
                collapsed={true}
            />

            {/*<UncontrolledAccordion*/}
            {/*    titleValue={'users'}*/}
            {/*/>*/}

            {/*<UncontrolledRating/>*/}

            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />


        </div>
    );
}


export default App