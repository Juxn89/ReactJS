//const arreglo = new Array();
//const arreglo = [];
const arreglo = [1, 2, 3, 4];
/*arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);*/

const arreglo2 = arreglo;
arreglo2.push(5);
console.log(arreglo);
console.log(arreglo2);

const arreglo3 = [...arreglo, 6];
console.log(arreglo3);

const arreglo4 = arreglo3.map((v) => console.log(v*2) );