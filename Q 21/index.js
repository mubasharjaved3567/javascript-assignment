//They think of something you could store in a JavaScript Object. 
//Write a program that creates Objects containing these items.

const engineerObj = () => {
  let engineer = new Object();
  engineer.name = "Mubashar";
  engineer.fatherName = "Javed";
  engineer.experience = "2 year";
  return engineer;
};
console.log(engineerObj());
