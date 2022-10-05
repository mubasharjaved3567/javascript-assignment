//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

const colorTest = (color) => {
    let alien_color = color;
    if (alien_color === "green") {
      console.log("the player just earned 5 points for shooting the alien");
    } else {
      console.log("the player just earned 10 points.");
    }
  };
  
  colorTest("green");
  colorTest("red");
  