import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../components/hooks/useCounter';

describe('Test on useCounter', () => {
    test('Should return default values', () => {
        const { result } = renderHook( () => useCounter() );
        
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Should return 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        
        expect(result.current.state).toBe(100);
    });

    test('must increment state by one', () => {
        const { result } = renderHook( () => useCounter(100) );
        const {increment} = result.current;

        act( () => {
            increment(1);
        });

        const {state} = result.current;
        expect(state).toBe(101);
    });    

    test('must decrement state by one', () => {
        const { result } = renderHook( () => useCounter(100) );
        const {decrement} = result.current;

        act( () => {
            decrement(1);
        });

        const {state} = result.current;
        expect(state).toBe(99);
    });

    test('must reset the state', () => {
        const { result } = renderHook( () => useCounter(100) );
        const {increment, reset} = result.current;

        act( () => {
            increment(1);
            reset(100);
        });

        const {state} = result.current;
        expect(state).toBe(100);
    });
});