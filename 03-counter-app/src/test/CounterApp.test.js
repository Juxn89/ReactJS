import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Test on CounterApp', () => {
    let wrapper = shallow(<CounterApp/>);

    /* beforeEach se ejecuta antes de cada prueba  */
    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Should show <CounterApp/>', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show 100 as default value', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const element = wrapper.find('h2').text();
        expect(element).toBe(value.toString());
    });

    test('Should increase with the button +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const element = wrapper.find('h2').text();
        expect(element).toBe('11');
    });

    test('Should decrease with the button -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const element = wrapper.find('h2').text();

        expect(element).toBe('9');
    });

    test('Should set default value withn button reset', () => {
        const value = 105;
        const wrapper = shallow(<CounterApp value={value}/>);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const element = wrapper.find('h2').text();

        expect(element).toBe(value.toString());
    });
})