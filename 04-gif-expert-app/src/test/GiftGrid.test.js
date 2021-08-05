import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import React from 'react';
import GiftGrid from '../components/GiftGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs'); // simula una llamada al archivo indicado en la ruta.

describe('Test on GiftGrid', () => {
    const category = 'Makoto Shishio';

    test('Should show it correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GiftGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show items when is loaded useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhos/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GiftGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GiftGridItem').length).toBe(gifs.length);
    });
});