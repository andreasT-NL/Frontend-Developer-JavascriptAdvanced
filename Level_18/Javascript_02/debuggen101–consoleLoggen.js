const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //hier moeten console.logs komen
    // console.log("All objects:", person);
    // console.log("This is:", person.name);
    // console.log('year of birth:', 2021 - person.age);
    // console.log(person.name, 'is a', person.profession);
    if (person.age > 50) {
        console.log('person is older than 50', person.name);
    };
};