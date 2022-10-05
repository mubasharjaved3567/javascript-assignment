//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.

const fruitsTest = () => {
  let favFruits = ["Mango", "Strabery", "Banana"];
  if (favFruits.includes("Date")) {
    console.log("You really like Date!");
  }
  if (favFruits.includes("Mango")) {
    console.log("You really like Mango!");
  }
  if (favFruits.includes("Apple")) {
    console.log("You really like Apple!");
  }
  if (favFruits.includes("Strabery")) {
    console.log("You really like Strabery!");
  }
  if (favFruits.includes("Banana")) {
    console.log("You really like Banana!");
  }
};

fruitsTest();
