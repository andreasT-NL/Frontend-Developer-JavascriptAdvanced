////// Opdracht A
const addTheWordCool = function (array) {
    array.push('cool');
    return array;
};
console.log(addTheWordCool(['nice', 'awesome', 'tof']));
// resultaat: ["nice", "awesome", "tof", "cool"]

////// opdracht B
const amountOfElementsInArray = function (fruits) {
    return fruits.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// resultaat: 3

////// opdracht C
const selectBelgiumFromBenelux = function (landen) {
    return landen[0];
};
console.log(selectBelgiumFromBenelux(['Belgie', 'Nederland', 'Luxemburg']));
// resultaat: "Belgie"

////// opdracht D
const lastElementInArray = function (lastElement) {
    return lastElement[lastElement.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

////// opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
// const impeachTrumpSlice = function (array) {
//     array.splice(0, 1);
//     return array;
// };
const impeachTrumpSplice = function (array) {
    array.splice(0, 1);
    return array;
};
// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

////// opdracht F
const stringsTogether = function (array) {
    return (array.join(' '));
};
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

////// opdracht G
const combineArrays = function (array1, array2) {
    let array3 = array1.concat(array2);
    return array3;
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
  // resultaat: [1,2,3,4,5,6]