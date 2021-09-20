import React from 'react';
import { mount, shallow } from 'enzyme';

import { demoTodos } from '../../fixtures/demoTodos';
import ToDoApp from '../../../components/08-useRedurec/ToDoApp';
import { act } from '@testing-library/react';

describe('Pruebas en <ToDoApp />', () => {
    const handleAddToDO = jest.fn();
    const wrapper = shallow(<ToDoApp />);
    Storage.prototype.setItem = jest.fn(() => {});

    test('debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {
        const wrapper = mount(<ToDoApp/>);
        act( () => {
            wrapper.find('ToDoAdd').prop('handleAddToDO')(demoTodos[0]);
            wrapper.find('ToDoAdd').prop('handleAddToDO')(demoTodos[1]);
        } );

        expect(wrapper.find('h1').text().trim()).toBe('ToDoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('debe de eliminar un TODO', () => {
        wrapper.find('ToDoAdd').prop('handleAddToDO')(demoTodos[0]);
        wrapper.find('ToDoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('ToDoApp (0)');
    });
});