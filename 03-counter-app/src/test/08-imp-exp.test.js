import { getHeroeById, getHeroesByOwner } from "../bases/08-imp-exp";
import heroes from "../datos/heroes";

describe('Test on 08-imp-exp', () => {
    test('should return a heroe by id', () => {
        const id = 1;
        const $heroe = getHeroeById(id);
        
        const heroeData = heroes.find(a => a.id === id);
        expect(heroeData).toEqual($heroe);
    });
    test('should return undefine if heroe doesn\'t exist', () => {
        const id = 10;
        const $heroe = getHeroeById(id);
        expect($heroe).toBe(undefined);
    });
    test('should return DC\'s heroes', () => {
        const owner = 'DC';
        const $heroes = getHeroesByOwner(owner);
        const $heroesDC = heroes.filter(h => h.owner === owner);
        expect($heroes).toEqual($heroesDC);
    });
    test('should return number of Marvel\'s heroes', () => {
        const owner = 'Marvel';
        const $heroes = getHeroesByOwner(owner).length;        
        expect($heroes).toBe(2);
    });
});