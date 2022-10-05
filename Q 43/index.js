//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.

const show_magicians = (magicianNames) => {
  magicianNames.map((name) => console.log(name));
};
const make_great = (magicianArray) => {
  let modifiedArray = magicianArray.map((name) => `The Great ${name}`);
  return modifiedArray;
};

let magicianArray = ["Ali", "Usman", "Umar", "Abubakar"];
console.log(make_great(magicianArray));
show_magicians(magicianArray);
