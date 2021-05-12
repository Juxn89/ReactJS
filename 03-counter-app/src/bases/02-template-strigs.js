// Template-String
const nombre = 'Juan';
const apellido = 'Gómez';
const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto_TS = `${nombre} ${apellido}`;

const nombreCompleto_TS1 = `
${nombre}
${apellido}
${1+1}
`;

export function getSaludo(nombre = 'Carlos'){
    return 'Hola ' + nombre + '!';
}