// Callbacks funcion que se llama como argumento

// Ejemplo de callback

setTimeout( function() {
    console.log('Esperamos un segundo');
}, 1000);

const getUserById = ( id, callback ) => {

    const user = {
        id,
        name: 'Luis Nieves',
    };

    setTimeout( () => {
        callback(user);
    }, 1500);
}

getUserById(10, ( user ) => {
    console.log(user.id);
    console.log(user.name.toUpperCase());
});