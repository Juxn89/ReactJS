import heroes from '../datos/heroes';

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
};

export const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
};