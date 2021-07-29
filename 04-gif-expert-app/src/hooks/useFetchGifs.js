import { useEffect, useState } from "react";
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    const [images, setImages] = useState([]);
    useEffect(() => {
        getGift(category).then(img => {
            setState({
                data: img,
                loading: false
            });
        });
    }, [category]);

    return state; // {data: [], loading: true}
}