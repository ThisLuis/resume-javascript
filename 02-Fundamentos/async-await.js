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

const id = 10;

const getInfoUser = async( id ) => {
    try {
        const employee = await getEmployer(id);
        const salary = await getSalary(id);
        return `El salario del empleado: ${ employee } es de: ${ salary }`;
    } catch (error) {
        return error
    }
};

getInfoUser(id)
    .then( msg => {
        console.log('TODO BIEN!!!');
        console.log(msg);
    })
    .catch( err => {
        console.log('TODO MAL!!!');
        console.log(err);
    });


// Cuando usamos el throw mandamos a llamar el reject de la funcion asyncrona(catch)
// Cuando usamos el return 