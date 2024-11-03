import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {RaringValueType, Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/pageTitle/PageTitle";

import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";


// остановился
function App() {
    const [ratingValue, setRatingValue] = useState<RaringValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)
    return (
        <div className={'App'}>


            <PageTitle title={'App component'}/>

            <Accordion
                titleValue={'menu'}
                collapsed={collapsed}
                onChange={() => setCollapsed(!collapsed)}
            />

            {/*<UncontrolledAccordion*/}
            {/*    titleValue={'users'}*/}
            {/*/>*/}

            {/*<UncontrolledRating/>*/}

            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />

            {/*<OnOff*/}
            {/*    on={on}*/}
            {/*    setOn={setOn}*/}
            {/*/>*/}

            <div>
                <UncontrolledOnOff
                    onChange={setOn}
                />
                {
                    on.toString()
                }
            </div>

        </div>
    );
}


export default App