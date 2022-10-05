//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.

let friendsToInvite = ["Zargham", "Shahbaz", "Usman"];
friendsToInvite.unshift("Ali");
friendsToInvite.push("Aleem");
friendsToInvite.splice(2, 0, "Zeeshan");

console.log("Hey guys, looks like the dinner table won't arrive in time for dinner. only two peoples are invite for dinner.",friendsToInvite);

for (let i = 0; i <= friendsToInvite.length; i++) {
  if (friendsToInvite.length === 2) {
    break;
  } else {
    console.log(`${friendsToInvite.pop()} I can't invite you `);
  }
}

friendsToInvite.map((name) => {
  console.log(`${name} You are still invited `);
});
friendsToInvite.splice(friendsToInvite.length - 2, 2);
console.log(friendsToInvite);
