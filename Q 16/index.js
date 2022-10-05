//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.

let friendsToInvite = ["Zargham", "Shahbaz", "Usman"];
friendsToInvite.map((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
console.log(`I got bigger tabel for dinner`);
friendsToInvite.unshift("Ali");
friendsToInvite.push("Zubair");
friendsToInvite.splice(2, 0, "Ahmad");

console.log("Second set of instruction")
friendsToInvite.map((name) => {
  console.log(`${name} I would like to invite you on dinner  `);
});
