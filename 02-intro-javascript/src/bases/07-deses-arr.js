const personajes = ['Goku', 'Veget', 'Trunks'];
const [p1] = personajes;
console.log(p1);
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA
const usesState = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
};

const arr = usesState('Goku');
console.log(arr);
arr[1]();

// 1. el primer valor de arr se llamarĂ¡ nombre
// 2. se llamarĂ¡ setNombre

const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();