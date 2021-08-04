import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import AddCategory from "../components/AddCategory";

describe('Test on <AddCategory />', () => {
    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    } );

    test('Should show it correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);;
    });

    test('Shouldn\'t send information on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Shoul call setCategories and clear textbox', () => {
        const value = 'Makoto Shishio';
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        // 4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});