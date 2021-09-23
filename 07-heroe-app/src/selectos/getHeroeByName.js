import { heroes } from "../data/heroes";

const getHeroeByName = (name = '') => {
    if(name === '')
        return [];

    name = name.toLocaleLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
};

export default getHeroeByName;