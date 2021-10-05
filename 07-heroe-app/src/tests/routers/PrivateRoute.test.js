import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

const args = {
    location: {
        pathname: '/dc'
    }
}
Storage.prototype.setItem = jest.fn();

describe('Pruebas en <PrivateRoute />', () => {
    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuntenticated={true} component={ () => <span>Listo!</span> } {...args}/> 
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');
    });

    test('debe de bloquear el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuntenticated={false} component={ () => <span>Listo!</span> } {...args}/> 
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
    });
});