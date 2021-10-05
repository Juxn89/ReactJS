import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim().exists()).toBe('Juan');
    });
});