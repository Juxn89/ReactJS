import React, { useLayoutEffect, useRef, useState } from 'react';
import '../02-useEffect/effect.css';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';
import './layout.css';

const LayoutEffect = () => {
    const {state:counter, increment} = useCounter(1);
    
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    const refP = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(refP.current.getBoundingClientRect());

    }, [quote]);
    return (
        <>
            <div>
                <h1>LayoutEffect!</h1>
                <hr/>
                <blockquote className="blockquote text-right">
                    <p className="mb-0" ref={refP}>{quote}</p>
                </blockquote>

                <pre>
                    {JSON.stringify(boxSize, null, 3)}
                </pre>

                <button className="btn btn-primary" onClick={ () => increment(1)}>
                    Next quote
                </button>
            </div>
        </>
    );
}

export default LayoutEffect;