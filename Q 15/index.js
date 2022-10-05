//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

let friendsToInvite = ["Zargham", "Shahbaz", "Usman"];
friendsToInvite.map(name => {
  console.log(`${name} I would like to invite you on dinner  `);
});
console.log(`${friendsToInvite[2]} cannot make it to the dinner!`);
friendsToInvite[2] = "Ali";

friendsToInvite.map(name => {
  console.log(`${name} I would like to invite you on dinner  `);
});
