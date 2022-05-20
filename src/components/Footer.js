import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/Slices/AddToCart';

export default function Footer() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch()



    function muFunctionCheck() {
        console.log('global data ', state);
    }
    return (
        <div>
            <h2>Hello world howa re </h2>

            <button onClick={muFunctionCheck}>Click to dispatch</button>


        </div>
    )
}
