import React from 'react';
import useCounter from '../hooks/useCounter';

import './Counter.css'

const CounterWithCustomHook = () => {
    const initialState = 10;
    const {state, increment, decrement, reset} = useCounter(initialState);
    return(
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>
            <button onClick={ () => increment(2) } className="btn">+1</button>
            <button onClick={ () => reset(initialState) } className="btn">Reset</button>
            <button onClick={ () => decrement(2) } className="btn">-1</button>
        </>
    );
}

export default CounterWithCustomHook;