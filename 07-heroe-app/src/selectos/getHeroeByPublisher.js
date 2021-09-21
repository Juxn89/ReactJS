import { heroes } from '../data/heroes';

const getHeroeByPublisher = (publisher) => {
    const validaPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validaPublishers.includes(publisher))
        throw new Error(`Publisher "${publisher}" no es correcto.`);
    
    return heroes.filter(heroe => heroe.publisher === publisher);
}

export default getHeroeByPublisher;