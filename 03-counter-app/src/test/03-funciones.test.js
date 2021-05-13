import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo2 } from "../bases/05-funciones";

describe('Test on 05-funciones', () => {
    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ACF231',
            username: 'ElBarto'
        };

        const user = getUser();
        expect(userTest).toEqual(user);
    });

    test('getUsuarioActivo2 should return an object with parameter', () => {        
        const name = 'Juan';
        const $object = {
            uid: 'ABD452',
            username: name
        };
        const $object2 = getUsuarioActivo2(name);
        expect($object).toEqual($object2);
    });
});