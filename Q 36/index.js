//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it.

const make_shirt = (size, text) => {
  console.log(
    `Size of my shirt is ${size} and ${text} should be printed on shirt`
  );
};

make_shirt("large", "Metaverse is future");
