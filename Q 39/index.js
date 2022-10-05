//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:

const city_country = (cityName, country) => {
  return `${cityName}, ${country}`;
};

let cityNameInString = city_country("Lahore", "Pakistan");
console.log(cityNameInString);
