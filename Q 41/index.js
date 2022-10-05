//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

const show_magicians = (magicianNames) => {
  magicianNames.map((name) => console.log(name));
};
let magicianArray = ["Ali", "Usman", "Umar", "Abubakar"];
show_magicians(magicianArray);
