//Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

const colorSuccessTest = () => {
  let alien_color = "green";
  if (alien_color === "green") {
    console.log("the player just earned 5 points");
  } else {
    return;
  }
};

const colorFailTest = () => {
  let alien_color = "red";
  if (alien_color === "green") {
    console.log("the player just earned 5 points");
  } else {
    return;
  }
};

colorSuccessTest();
colorFailTest();
