///////// opdracht A
let superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan2 = superheroes.find(function (hero) {
    return hero.name === 'Spiderman';
});
console.log(findSpiderMan2);
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

///////// opdracht B
const array = [1, 2, 3];
const doubleArrayValues = array.forEach((number) => {
    console.log(number * 2);
});
const doubleArrayValues2 = array.map((number) => {
    return number * 2;
});
// console.log(doubleArrayValues([1,2,3]));
console.log(doubleArrayValues2);
// result should be [2, 4, 6]

///////// opdracht C
// const containsNumberBiggerThan10 = containsNumberBiggerThan10.some((array) => {
//     return array > 10;
// });
// console.log(containsNumberBiggerThan10);
// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
// // result should be true
// containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]);
// // result should be false


///////// opdracht D
let isItalyInTheGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const findCountry = isItalyInTheGreat7.some((country) => {
    return country === 'Italy';
});
console.log(findCountry);
// result should be true

///////// opdracht E
const numbers = [1, 4, 3, 6, 9, 7, 11];
numbers.forEach((v, i, numbers) => {
    numbers[i] = v * 10;
});
console.log(numbers);

// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

///////// opdracht F
let age = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const isBelow100 = age.every((number) => {
    return number < 100;
});
console.log(isBelow100);
// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

///////// opdracht G
let peopleAge = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const sumArray = peopleAge.reduce((currentTotal, age) => {
    return age + currentTotal;
}, 0)
console.log(sumArray);
// console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118