
// A las arrow function no se les asigna un this propio, sino que heredan el this del contexto superior
const plus = ( a, b ) => {
    return a + b;
}

// Cuando tiene un return implicito se pueden omitir las llaves y el salto de linea
const minus = (a,b) => a - b;

console.log( plus(5,10) );
console.log( minus(10, 2) );