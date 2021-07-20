import React from 'react';
// import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Test on <PrimeraApp/>', () => {
    /* Se comenta porque ahora se empleará Enzyne */
    // test('', () => {
    //     const saludo = 'Hola, soy Goku!';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Test on <PrimeraApp/>', () => {
        const saludo = 'Hola, soy Goku!';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Should show subtitle sent by props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'subtitulo desde test!';        

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        const textoParrafo = wrapper.find('h3').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    });
});