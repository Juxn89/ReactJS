import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './showIncrement';
import '../02-useEffect/effect.css';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    }, [ setCounter ] );

    useEffect( () => {
        
    },  [increment]);

    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <br/>
            <ShowIncrement increment={increment}/>
        </>
    );
}

export default CallbackHook;