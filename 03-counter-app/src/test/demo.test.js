describe('Test on demo.test.js', () => { // describe sirve para agrupar varias pruebas
    test('strings should be equals', () => {  // prueba como tal, siempre debe de tener al menos un expect
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
        expect(mensaje).toBe(mensaje2);
    });
});