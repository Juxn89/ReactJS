import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Test on <PrimeraApp/>', () => {
    test('', () => {
        const saludo = 'Hola, soy Goku';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    });
});