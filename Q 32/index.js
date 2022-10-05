//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

const isEmptyCheck = (current, newUser) => {

    for (let i = 0; i < newUser.length; i++) {
      let nameExist = current.find((name) => name.toLowerCase() === newUser[i].toLowerCase())
      if (nameExist) {
        console.log("the person will need to enter a new username.")
      } else {
        console.log("username is available.")
      }
    }
  };
  let current_users = ["jhon", "bravo", "mick", "joffar", "buttler"];
  let new_users = ["sam", "abdulhaddi", "mick", "JHON"]
  isEmptyCheck(current_users, new_users);
  