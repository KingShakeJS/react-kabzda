import React, {useState} from 'react';
import './App.css';
import {Accordion, itemType} from "./components/accordion/Accordion";
import {RaringValueType, Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/pageTitle/PageTitle";

import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";



function App() {

    const [ratingValue, setRatingValue] = useState<RaringValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    const [items, setItems] = useState<itemType[] >([
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ])
    const setItemsHandler = (value: string) => {

    }
    return (
        <div className={'App'}>


            <PageTitle title={'App component'}/>

            <Accordion
                titleValue={'menu'}
                collapsed={collapsed}
                onChange={() => setCollapsed(!collapsed)}
                items={items}
                onClick={setItemsHandler}
            />

            {/*<UncontrolledAccordion*/}
            {/*    titleValue={'users'}*/}
            {/*/>*/}

            <UncontrolledRating
                onChange={(value: RaringValueType) => {
                }}
            />

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