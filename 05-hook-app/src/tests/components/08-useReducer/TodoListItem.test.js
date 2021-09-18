import React from 'react';
import {shallow} from 'enzyme';
import ToDoListItem from '../../../components/08-useRedurec/ToDoListItem';
import { demoTodos } from "../../fixtures/demoTodos";
import { toHaveBeenCalledWith } from '@testing-library/jest-dom';

describe('Pruebas en <TodoListItem/>', () => {    
    test('debe de mostrarse correctamente', () => {        
        const wrapper = shallow(<ToDoListItem todo={demoTodos[0]} index={0} todos={demoTodos} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la función handleDelete', () => {        
        const handleDelete = jest.fn();
        const wrapper = shallow(<ToDoListItem todo={demoTodos[0]} index={0} todos={demoTodos} handleDelete={ handleDelete }/>);

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
    });

    test('debe de mostrar el texto correctamente', () => {        
        const wrapper = shallow(<ToDoListItem todo={demoTodos[0]} index={0} todos={demoTodos} />);
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('debe de tener la clase complete si el TODO.done = true', () => {    
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<ToDoListItem todo={todo} index={0} todos={demoTodos} />);
        const p = wrapper.find('p');

        expect(p.hasClass('complete')).toBe(true);
    });
});