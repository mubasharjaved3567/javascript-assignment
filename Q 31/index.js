//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

const isEmptyCheck = (userNames) => {
  if (userNames.length === 0) {
    console.log("We need to find some users!");
  }
};
let userNamesArray = [];
isEmptyCheck(userNamesArray);
