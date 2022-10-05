//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

const cars = (manufacturer, model_name, ...arguments) => {
  let carProperties = {
    manufacturer,
    model_name,
    color: arguments[0],
    optional_feature: arguments[1],
  };
  return carProperties;
};

let carObjectsValues = cars(
  "BMW",
  "5 Series",
  (color = "black"),
  (optional_feature = "hybrid")
);
console.log(carObjectsValues);
