import React from 'react';
import { Config } from '../commun';

const GiftGrid = ({category}) => {
    const getGift = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Samurai X&limit=10&api_key=${Config.apiKeyGiphy}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifts = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifts);
    }

    getGift();

    return (
        <>
            <h3>{category}</h3>
        </>
    );
}

export default GiftGrid;