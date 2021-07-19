import getHeroById from './08-imp-exp';

export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {           
            const h1 = getHeroById(id);
            if(h1 !== undefined)
                resolve(h1);
            else
                reject ('No se pudo encontrar el héroe');
        }, 1500);
    });
};