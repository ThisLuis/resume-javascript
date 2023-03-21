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

// Convert to promise...
// const getEmployer = ( id, callback ) => {

//     const employee = employers.find( e => e.id === id );

//     if( employee ) {
//         callback( null, employee );
//     } else {
//         callback(`El empleado con id ${ id } no existe`);
//     }
// }

const getEmployer = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const employee = employers.find( (e) => e.id === id)?.name;

        ( employee )
            ? resolve( employee )
            : reject( `No existe empleado con id ${id}` );
    });

}

const getSalary = () => {
    return new Promise( (resolve, reject ) => {
        const salary = salaries.find( (s) => s.id === id)?.salary;

        ( salary )
            ? resolve( salary )
            : reject( `El salario con id: ${ id } no existe ` );

    });
}

// getEmployer(id)
//     .then( employee => console.log( employee ))
//     .catch( err => console.log(err) )

// getSalary(id)
//     .then( salary => console.log( salary ))
//     .catch( err => console.log( err ))

// Don't X
// getEmployer(id)
//     .then( employee => {

//         getSalary( id )
//             .then( salary => {
//                 console.log('El empleado: ', employee, ' tiene un salario de: ', salary);
//             })
//             .catch( err => console.log(err))
//     })
//     .catch( err => console.log(err))


// Chain promises ...
const id = 2;
let name_employee;
getEmployer(id)
    .then( employee => {
        name_employee = employee;
        return getSalary( id ); // No olvidar el return para poder encadenar la promesa
    })
    .then( salary => console.log('El empleado: ', name_employee, ' tiene un salario de: ', salary))
    .catch( err => console.log( err ));