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
    const employer = employers.find( (e) => e.id === id)?.name;
    if(employer) {
        // Si no hay ningun error mandamos null para que el callback se ejecute correctamente
        callback(null, employer)
    } else {
        callback(`El empleado con el id: ${id} no existe`);
    }
    
}
const id = 3;

const getSalary = ( id, callback ) => {
    const salary = salaries.find( (e) => e.id === id)?.salary;
    if( salary ) {
        callback( null, salary );
    } else {
        callback(`No existe salario para el id ${id}`);
    }
}

getEmployer( 3, ( err, employer ) => {
    if( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalary(id, ( err, salary ) => {
        if( err ) {
            return console.log(err);
        }
        console.log('El empleado: ', employer, ' tiene un salario de: ', salary);
    });

});

// getSalary(id, ( err, salary ) => {
//     if( err ) {
//         console.log('Error!')
//         return console.log(err);
//     }

//     console.log('Salario existe');
//     console.log(salary);
// });


// ?