import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
    const user = {
        user: 'JuanG',
        email: 'juan.gomez@gmail.com'
    };

    test('debe de mostrar correctamente el componente', () => {
        const wrapper = mount(
            <UserContext.Provider value={{user}}>
                <HomeScreen />
            </UserContext.Provider> 
        );

        expect(wrapper).toMatchSnapshot();
    });
});