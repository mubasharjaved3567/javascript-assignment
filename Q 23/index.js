//Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:


const conditionalTests = () => {
    let studentObject = {
         name : "Mubashar",
         fatherName : "Javed",
         age : 25,
         city : "Faisalabad",
         country : "Pakistan",
    }


  console.log("Is name == 'Mubashar'? I predict True.");
  console.log(studentObject.name === "Mubashar");

  console.log("Is fatherName == 'Javed'? I predict True.");
  console.log(studentObject.fatherName === "Javed");

  console.log("Is age  == 25 ? I predict True.");
  console.log(studentObject.age === 25);

  console.log("Is city == 'Faisalabad'? I predict True.");
  console.log(studentObject.city === "Faisalabad");

  console.log("Is country == 'Pakistan '? I predict Ture.");
  console.log(studentObject.country == "Pakistan");

  console.log("Is country == 'canada'? I predict False.");
  console.log(studentObject.fatherName === "canada");

  console.log("Is city == 'lahore'? I predict False.");
  console.log(studentObject.city == "lahore");

  console.log("Is age == '25'? I predict False.");
  console.log(studentObject.fatherName == "25");

  console.log("Is fatherName == 'Zubair'? I predict False.");
  console.log(studentObject.fatherName === "Zubair");

  console.log("Is name == 'Zargham'? I predict False.");
  console.log(studentObject.fatherName == "Zargham");
};
conditionalTests();
