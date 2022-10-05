//Seeing the World: Think of at least five places in the world you’d like to visit.

const placesToVisit = ["Turkey", "Norway", "KSA", "Italy", "UK"];

console.log(placesToVisit);
const sortedArray = [...placesToVisit].sort((a, b) =>  a.localeCompare(b));
console.log(sortedArray);
console.log(placesToVisit);
let sortedArrayReverse = [...sortedArray].reverse();
console.log(sortedArrayReverse)
console.log(placesToVisit);
let reverseTheOrignalArray = [...placesToVisit].reverse()
console.log(reverseTheOrignalArray)
let reverseTheOrignalArrayAgain = [...reverseTheOrignalArray].reverse()
console.log(reverseTheOrignalArrayAgain)
const sortedOrignalArray = [...reverseTheOrignalArrayAgain].sort((a, b) =>  a.localeCompare(b));
console.log(sortedOrignalArray)
const sortedOrignalArrayReverse = [...sortedOrignalArray].sort((a, b) =>  b.localeCompare(a));
console.log(sortedOrignalArrayReverse)

