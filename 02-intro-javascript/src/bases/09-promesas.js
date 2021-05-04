import getHeroById from './bases/08-imp-exp';
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {

        //console.log('2 segundo después');
        //resolve();
       
        const h1 = getHeroById(2);
        //resolve(h1);
        reject('No se pudo encontrar el el héroe');
    }, 2000);
});

promesa.then((heroe) => console.log(heroe));
promesa.catch((err) => console.warn(err));
*/


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {           
            const h1 = getHeroById(id);
            if(h1 !== undefined)
                resolve(h1);
            else
                reject ('No se pudo encontrar el héroe');
        }, 2000);
    });
}


getHeroeByIdAsync(12)
    .then((heroe) => console.log(heroe))
    .catch((err) => console.log(err));