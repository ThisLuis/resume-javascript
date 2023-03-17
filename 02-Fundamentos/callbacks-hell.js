const employers = [
    {
        id: 1,
        name: 'Luis'
    },
    {
        id: 2,
        name: 'Karen'
    },
    {
        id: 3,
        name: 'Jorge'
    },
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    },
];

const getEmployer = ( id, callback ) => {
    const employer = employers.find( (e) => e.id === id);
    if(employer) {
        // Si no hay ningun error mandamos null para que el callback se ejecute correctamente
        callback(null, employer)
    } else {
        callback(`El empleado con el id: ${id} no existe`);
    }
    
}

getEmployer( 1, ( err, employer ) => {
    if( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(employer);
});