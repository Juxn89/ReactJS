// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
//saludar = 30;

const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
};

//Función de flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;   
};

const saludar4 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
        uid: 'ACF231',
        username: 'ElBarto'
});

// Tarea
function getUsuarioActivo(nombre){
    return {
        uid: 'ABD452',
        username: nombre
    }
}
const usuarioActivo = getUsuarioActivo('Juan');

/*
    1. Transformar a función de flecha
    2. Tiene que retornar un objeto implícito
    3. Pruebas
*/

export const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABD452',
    username: nombre
});
const usuarioActivo2 = getUsuarioActivo2('Juan');