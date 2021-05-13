const personajes = ['Goku', 'Veget', 'Trunks'];
const [p1] = personajes;

const [, , p3] = personajes;


export const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();


// TAREA
const usesState = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
};

const arr = usesState('Goku');

arr[1]();

// 1. el primer valor de arr se llamará nombre
// 2. se llamará setNombre

const [nombre, setNombre] = arr;

setNombre();