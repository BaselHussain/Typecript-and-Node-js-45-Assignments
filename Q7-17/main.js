"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q7 & Q8 
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// author:Basel Hussain
// date:28/02/2024
// Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message 
var favoriteNumber = 8;
var message = "My favourite number is ".concat(favoriteNumber);
// revealing my favorite number.
console.log(message);
// Q11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Mubashir", "Hanzala", "Hammad", "Zayan"];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);
// Q12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(Names[0], "is my friend");
console.log(Names[1], "is my friend");
console.log(Names[2], "is my friend");
console.log(Names[3], "is my friend");
// Q13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.
var transportaion = ["car", "bike", "bus", "aeroplane"];
transportaion.map(function (curVal) { return console.log("I would like to own a ".concat(curVal)); });
//Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Rabia", "Imran", "Bushra",];
guest.map(function (curVal) { return console.log("Dear ".concat(curVal, ", you are invited to the dinner")); });
// Q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("".concat(guest[0], " can not attend"));
guest.splice(0, 1, "Basel");
console.log(guest);
guest.map(function (curVal) { return console.log("Dear ".concat(curVal, ", you are invited to the dinner")); });
//Q17: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guest.map(function (curVal) { return console.log("Dear ".concat(curVal, ", I found a new table so I am inviting more people")); });
// • Add one new guest to the beginning of your array.
guest.unshift("Rameesha");
console.log(guest);
// • Add one new guest to the middle of your array. 
guest.splice(2, 0, "Wajahat");
console.log(guest);
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guest.push("Alishba");
console.log(guest);
// • Print a new set of invitation messages, one for each person in your list.
// guest.map((curVal:string)=>console.log(`Dear ${curVal}, you are invited to the dinner`));
// Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guest.map(function (curVal) { return console.log("Dear ".concat(curVal, ", I can invite only two people for dinner")); });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (var i = guest.length - 1; i >= 2; i--) {
    var removedGuest = guest.pop();
    console.log("Sorry ".concat(removedGuest, " I am sorry I can\u2019t invite you to dinner."));
}
console.log(guest);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guest.forEach(function (curVal) { return console.log("Dear ".concat(curVal, " you are still invited")); });
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// for(var i=guest.length-1;i>=0;i--){
//     guest.pop()
// }
// console.log(guest);
var newGuest = guest;
exports.default = newGuest;
