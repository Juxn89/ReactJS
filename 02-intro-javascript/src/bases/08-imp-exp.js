//import { heroes } from './data/heroes';
import heroes, {owner} from '../data/heroes';
//console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
};
//console.log( getHeroeById(2) );

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
};
//console.log(getHeroesByOwner('DC'));

//console.log(owner);

export {
    getHeroeById as default,
    getHeroesByOwner
}