import { getHeroeByIdAsync } from "../bases/09-promesas";
import heroes from '../datos/heroes';

describe('Promise\'s test', () => {
    test('getHerorByIdAsync should retorn a Heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {                
                exppect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('should get a error if heroe doesn\'t exists', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .catch(err => {
            exppect(error).toBe('No se pudo encontrar el héroe!');
            done();
        })
    });
});