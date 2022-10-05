//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

const colorTest = (color) => {
  let alien_color = color;
  if (alien_color === "green") {
    console.log("tthat the player earned 5 points");
  } else if (alien_color === "yellow") {
    console.log("the player earned 10 points.");
  } else if (alien_color === "red") {
    console.log("the player earned 15 points.");
  }
};

colorTest("green");
colorTest("yellow");
colorTest("red");
