import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import {expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';

import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test on custom hook useFetchGifs', () => {
    const category = 'Makoto Shishio';

    test('Should return initial state', async () => {
        // const {data, loading} = useFetchGifs(category);
        /* 
            Para usar renderHook es necesario instalar: React Hooks Testing Library
        */
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs(category) );        
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    test('Should return a imgs\' array and loading in false', async () => {
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs(category) );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);
    });
});