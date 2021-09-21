import React from 'react';
import HeroeList from '../heroes/HeroeList';

const MarvelScreen = () => {
    return (
        <>
            <h1>MarvelScreen</h1>
            <hr/>
            <HeroeList publisher={"Marvel Comics"}/>
        </>
    );
}

export default MarvelScreen;