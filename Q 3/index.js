//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let personName = "Mubashar";
const toTittleCase = (personName) => {
  let nameArray = personName.toLowerCase().split("");
  for (let i = 0; i < nameArray.length; i++) {
    nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
  }
  return nameArray.join(" ");
};
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTittleCase(personName));
