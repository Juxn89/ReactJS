import React, {useState}  from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../components/hooks/useForm';

describe('', () => {
    const initialForm = {
        name: 'juan',
        email: 'gb.jc@outlook.com'
    }

    test('should return a default form', () => {        
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should change value form (change name)', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act( () => {
            handleInputChange(
                { target: {
                    name: 'name',
                    value: 'Carlos'
                } }
            );
        });

        const [values] = result.current;
        expect(values.name).toEqual('Carlos');
        expect(values).toEqual({...initialForm, name: 'Carlos'});
    });

    test('should reset the form', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        act( () => {
            handleInputChange(
                { target: {
                    name: 'name',
                    value: 'Carlos'
                } }
            );
            
            reset(initialForm);
        } );

        expect(values).toEqual(initialForm);
    });    
} );