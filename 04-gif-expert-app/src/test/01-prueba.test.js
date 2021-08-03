import React from 'react';
import { GiftGridItem } from '../components/GiftGridItem'
import { shallow } from "enzyme";

describe('Test on <GiftGridItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GiftGridItem title={title} url = {url}/> );

    test('Sould show the component', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have image equals to url and alt from props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Should have animate_fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});