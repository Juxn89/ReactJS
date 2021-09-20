import React from 'react';
import { shallow } from 'enzyme';

import { demoTodos } from '../../fixtures/demoTodos';
import ToDoAdd from '../../../components/08-useRedurec/ToDoAdd';

describe('Pruebas en <TodoAdd />', () => {
    const handleAddToDO = jest.fn();

    const wrapper = shallow(<ToDoAdd handleAddToDO={handleAddToDO}/>);

    test('debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar el handleAddToDO', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddToDO).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar el handleAddToDO', () => {
        const value = 'Aprender ReactJS';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        
        expect(handleAddToDO).toHaveBeenCalledTimes(1);
        expect(handleAddToDO).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddToDO).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});