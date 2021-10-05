import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

const args = {
    location: {
        pathname: '/dc'
    }
}
Storage.prototype.setItem = jest.fn();

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('debe de mostrar el login si no está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente si está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Juan'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
    });
});