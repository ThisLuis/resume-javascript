const deadpool = {
    named: 'Wade',
    last_name: 'Winston',
    power: 'Healting',
    //age: 50,
    getName(){
        return `${this.named} ${this.last_name} ${this.power}`
    }
}


function printHero({ named, last_name, power, age }) {
    console.log(named, last_name, power, age);
}

// printHero( deadpool );

const heroes = [ 'Deadpool', 'Superman', 'Batman' ];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3 ] = heroes;

console.log(h3);
