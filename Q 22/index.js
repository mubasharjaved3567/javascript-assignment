//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

const indexErrFunc = () => {
  let testArray = ["name", "fatherName", "age", "education"];
  console.log(testArray[6])
};
console.log(indexErrFunc());
