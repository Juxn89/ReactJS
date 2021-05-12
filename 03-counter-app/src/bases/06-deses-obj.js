// Desentructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre, edad, clave} = persona;
console.log(nombre, edad, clave);

const {clave: alias} = persona;
console.log(alias);

/*************************************/
const retornaPersona = (usuario) => {
    console.log(usuario);
};

retornaPersona(persona);

const retornaPersona2 = ({nombre, clave, rango = 'Capitán'}) => {
    console.log(nombre, clave, rango);
};

retornaPersona2(persona);


const usesContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng : {
            lat: 14.4654,
            lng: -12.545
        }
    }
};
const avenger = usesContext(persona);
const {nombreClave, anios} = usesContext(persona);
console.log(avenger);
console.log(nombreClave, anios);

const {latlng:{lat, lng}} = usesContext(persona);
console.log(lat, lng);