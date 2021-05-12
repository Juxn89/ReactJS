import '@testing-library/jest-dom';
import {getSaludo} from '../../src/bases/02-template-strigs';

describe('Tests on 02-template-string.js', () => {
    test('getSaludo should return "Hola Juan!"', () => {
        const nombres = 'Juan';
        const saludo = getSaludo(nombres);

        expect(saludo).toBe('Hola ' + nombres + '!');
    });
    test('getsaludo should return "Hoa Carlos!" if there isn\'t argument nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    });    
});