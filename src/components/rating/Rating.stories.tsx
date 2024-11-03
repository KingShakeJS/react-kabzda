import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {RaringValueType, Rating} from "./Rating";
import {useState} from "react";


export default {
    title: 'Rating stories',
    component: Rating
}


export const EmptyRating = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={0}
        />
    )
}

export const Rating1 = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={1}
        />
    )
}

export const Rating2 = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={2}
        />
    )
}

export const Rating3 = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={3}
        />
    )
}

export const Rating4 = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={4}
        />
    )
}


export const Rating5 = () => {
    return (
        <Rating
            onClick={(a) => a}
            value={5}
        />
    )
}

export const ChangeRating = () => {
  const [rating, setRating]= useState<RaringValueType>(5)
    return (
        <Rating
            onClick={setRating}
            value={rating}
        />
    )
}
