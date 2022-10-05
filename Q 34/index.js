//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.

let pizza = ["bihari kabab", "chicken fajita", "pepperoni"];
const favPizza = (pizzaList) => {
  for (let i = 0; i < pizzaList.length; i++) {
    console.log(`I like ${pizzaList[i]} pizza`);
  }
  console.log("I really love pizza!");
};

favPizza(pizza);
