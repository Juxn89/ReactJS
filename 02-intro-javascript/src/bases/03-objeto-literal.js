const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5425656,
        lat: 14.2562,
        lng: 34.56463
    }
};
console.log(persona);
console.table(persona);

const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2);
persona.nombre = 'Peter';
console.log(persona);

const persona3 = {...persona};
console.log(persona3);