import React from 'react';
import {shallow} from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../../components/hooks/useFetch';
import useCounter from '../../../components/hooks/useCounter';

jest.mock('../../../components/hooks/useFetch');
jest.mock('../../../components/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
    beforeEach( () => {
        useCounter.mockReturnValue({
            state: 10
        });
    } );

    test('debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrarse la información', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Fernando',
                    quote: 'Hola Mundo'
                }
            ],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
        console.log(wrapper.html());
    });    
});