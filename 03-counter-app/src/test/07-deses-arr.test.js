import '@testing-library/jest-dom';
import { retornaArreglo } from '../bases/07-deses-arr';

describe('Test on Desectructuration', () => {
    test('should return a string and a number', () => {
        const [letras, numeros] = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});