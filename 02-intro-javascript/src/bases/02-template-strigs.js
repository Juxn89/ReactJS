// Template-String
const nombre = 'Juan';
const apellido = 'Gómez';
const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

const nombreCompleto_TS = `${nombre} ${apellido}`;
console.log(nombreCompleto_TS);

const nombreCompleto_TS1 = `
${nombre}
${apellido}
${1+1}
`;
console.log(nombreCompleto_TS1);

function getSaludo(nombre){
    return 'Hola ' + nombre;
};
console.log(`Este es un texto: ${getSaludo(nombre)}`);