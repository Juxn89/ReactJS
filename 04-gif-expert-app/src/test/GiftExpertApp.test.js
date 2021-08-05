import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import React from 'react';
import GiftExpertApp from '../giftExpertApp';

describe('Test on GiftExpertApp', () => {
    test('Should show it correctly ', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show a category list', () => {
        const categories = ['Samurai X', 'Makoto Shishio'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    });
});