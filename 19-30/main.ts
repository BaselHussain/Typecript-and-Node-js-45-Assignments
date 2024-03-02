// The array of two guest remaining from Q17 is 
var guest:string[]=["Rameesha","Basel"]
console.log(`${guest.length}` ,"people will come to dinner");
// Q20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var country:string[]=["Pakistan","America","Switzerland","India"];
console.log("List of Country:",country);
//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type CarTypes={company:string,isUsed:boolean,year:number}
var car:CarTypes={company:"Honda",isUsed:true,year:2022};
console.log(car);
// Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var names:string[]=["Basel","Wajahat","Alishba"];
console.log(names[3]);
console.log(names[0]);

//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

const car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

var Car="subaru";
console.log("Is Car == 'subaru'?  predict True.")
console.log(Car == 'subaru')

console.log("Is Car != 'honda'?  predict True.")
console.log(Car != 'honda')

console.log("Is Car == 'Subaru'?  predict False.")
console.log(Car == 'Subaru')

console.log("Is Car == 'SUBARU'?  predict False.")
console.log(Car == 'SUBARU')

console.log("Is Car.length == 6?  predict True.")
console.log(Car.length == 6);

console.log("Is Car.length != 10?  predict True.")
console.log(Car.length != 10);

console.log("Is Car.length == 10?  predict False.")
console.log(Car.length == 10);

console.log("Is 3<2?  predict False.")
console.log(3<2);

console.log("Is 76>23?  predict False.")
console.log(76>23);

console.log("Is 76>=87?  predict False.")
console.log(76>=87);

//Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var name_1:string="Basel";
var name_2:string="Basel Hussain";
var name_3:string="Mr.BaselHussain";
if(name_1===name_2){
    console.log("Name1 and name2 are Equal")
}
else if(name_1===name_3){
console.log("Name1 and name3 are equal")
}
else if(name_2===name_3){
    console.log("Name2 and name3 are  equal")
}
else{
    console.log("Names are not equal")
}

if(typeof name_1===typeof name_2){
    console.log("Names are equal")
}
else if(typeof name_1===typeof name_3){
    console.log("Names are equal")
}
else if(typeof name_2===typeof name_3){
    console.log("Names are equal")
}
else{
    console.log("Names are not equal")
}
 
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var age_1:number=18;
var age_2:number=25;
if(age_1=18){
    console.log("You are adult")
}
if(age_2 !=18){
console.log("Are you adult?")
}
if(age_1<age_2){
    console.log("Younger")
}
if(age_2>age_1){
    console.log("Elder")
}
if(age_1>=18){
    console.log("You are eligible for vote")
}
if(age_2<=25){
    console.log("Get married as soon as possible")
}

// • Tests using "and" and "or" operators
if(age_1===18 && age_2<30){
console.log("You are eligible for marriage")
}
if(age_1===18 || age_2===26){
    console.log("You can give vote")
}
// • Test whether an item is in a array
var country:string[]=["Pakistan","India","America","switzerland"]
if(country.includes("America")){
    console.log("America is in the list")
}

// • Test whether an item is not in a array
if(!country.includes("Japan")){
    console.log("Japan is not in the list")
}

//Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color:string="green";
if(alien_color==="green"){
    console.log("Player just earned 5 points")
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if(alien_color==="red"){
    console.log("no output")
}
//Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • Write one version of this program that runs the if block and another that runs the else block.
if(alien_color==="green"){
    console.log("Player just earned 5 points for shooting alien")
}else{
console.log("Player just earned 10 points")
}

var alien_color:string="yellow";
if(alien_color==="green"){
    console.log("Player just earned 5 points for shooting alien")
}else{
console.log("Player just earned 10 points")
}
//Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var alien_color:string="green";
if(alien_color==="green"){
    console.log("Player  earned 5 points ")
}else if(alien_color==="yellow"){
console.log("Player just earned 10 points")
}else{
    console.log("Player earned 15 points")
}
// • If the alien is yellow, print a message that the player earned 10 points.
var alien_color:string="yellow";
if(alien_color==="green"){
    console.log("Player  earned 5 points ")
}else if(alien_color==="yellow"){
console.log("Player just earned 10 points")
}else{
    console.log("Player earned 15 points")
}
// • If the alien is red, print a message that the player earned 15 points.
var alien_color:string="red";
if(alien_color==="green"){
    console.log("Player  earned 5 points ")
}else if(alien_color==="yellow"){
console.log("Player  earned 10 points")
}else{
    console.log("Player earned 15 points")
}

// Q28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
var age:number=1;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
var age:number=3;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
var age:number=4;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
var age:number=18;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
var age:number=25;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}
// • If the person is age 65 or older, print a message that the person is an elder.
var age:number=78;
if(age<2){
    console.log("Person is baby")
}else if(age>=2&&age<4){
    console.log("Person is toddler")
}else if(age>=4&&age<13){
    console.log("Person is a kid")
}else if(age>=13&&age<20){
    console.log("Person is a teenager")
}else if(age>=20&&age<65){
    console.log("Person is an adult")
}else{
    console.log("Person is elder")
}

//Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var favoriteFruits:string[]=["Mango","apple","kivi"];
if(favoriteFruits.includes("Mango")){
    console.log("You really like Mango")
}
if(favoriteFruits.includes("orange")){
    console.log("orange")
}
if(favoriteFruits.includes("apple")){
    console.log("You really like apple")
}

//Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user
var usernames:string[]=["Basel","Eric","ALishba","Wajahat","Admin"];
for(var i=0;i<usernames.length;i++){
    if(usernames[i]==="Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`)
    }
}


