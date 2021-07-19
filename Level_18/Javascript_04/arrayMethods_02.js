///////// opdracht A
let superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === 'Spiderman';
    });
};
console.log('Where is Spiderman?', findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

///////// opdracht B
const doubleArrayValues = function (array) {
    return array.map(function (number) {
        return number * 2;
    });
};
console.log('Array doubled is:', doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

///////// opdracht C
const containsNumberBiggerThan10 = function (array) {
    return array.some(number => {
        return number > 10;
    });
};
console.log('I am bigger then 10:', containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log('I am bigger then 10:', containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false


///////// opdracht D
const isItalyInTheGreat7 = function (array) {
    return array.some(function (country) {
        return country === 'Italy';
    });
};
console.log('Italy is part of the Great 7:', isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

///////// opdracht E
const tenfold = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
};
//or with .map method
const tenfoldMap = function (array) {
    return array.map(function (number) {
        return number * 10;
    });
};
console.log('times ten:', tenfold([1, 4, 3, 6, 9, 7, 11]));
console.log('times ten .map:', tenfoldMap([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

///////// opdracht F
const isBelow100 = function (array) {
    return array.every(function (number) {
        return number < 100;
    });
};
console.log('everyone is younger than 100:', isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));
// result should be: false

///////// opdracht G
const bigSum = function (array) {
    return array.reduce(function (currentTotal, age) {
        return age + currentTotal;
    }, 0);
};
console.log('total big Sum is:', bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118