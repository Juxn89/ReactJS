import React, { useState } from 'react';

import Small from './Small';
import useCounter from '../hooks/useCounter';

import '../02-useEffect/effect.css';

const Memorize = () => {
    const {state:counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return(
        <>
            <h1>Counter <Small value={counter}/> </h1>
            <hr/>
            <button className="btn btn-outline-primary" onClick={ () => increment(1)}>+1</button>
            <button className="btn btn-primary m-1" onClick={ () => setShow(!show) }>Show/Hide {JSON.stringify(show)} </button>
        </>
    );
}

export default Memorize;