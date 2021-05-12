// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
//saludar = 30;

const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'), saludar2('Naruto'));

//Función de flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;   
};

console.log(saludar3('Vegeta'));

const saludar4 = (nombre) => `Hola, ${nombre}`;
console.log(saludar4('Krilin'));

const getUser = () => ({
        uid: 'ACF231',
        username: 'ElBarto'
});

console.log(getUser());

// Tarea
function getUsuarioActivo(nombre){
    return {
        uid: 'ABD452',
        username: nombre
    }
}
const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);

/*
    1. Transformar a función de flecha
    2. Tiene que retornar un objeto implícito
    3. Pruebas
*/

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABD452',
    username: nombre
});
const usuarioActivo2 = getUsuarioActivo2('Juan');
console.log(usuarioActivo2);
