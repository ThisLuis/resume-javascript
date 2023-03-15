const named = 'Deadpool';
const real = 'Wade Winston';

// Dentro de los ${} puedo ejecutar js

const normal = named + ' ' +real;
const template = `${named} ${real}`;

console.log(template);

// Template string imprime tambien los saltos de linea
const html = `
    <h1>Hola</h1>
    <p>Mundo</p>
`;

console.log(html);

