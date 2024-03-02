//Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames:string[]=["Basel","Eric","ALishba","Wajahat","Admin"];
for(var i=usernames.length-1;i>=0;i--){
    usernames.pop()
}if(usernames.length===0){
    console.log("We need to find some users")
}
//Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users:string[]=["Rameesha","Ayesha","Zayyan","Mubashir","Huzaifa"];
var current_users_lower:string[]=current_users.map((curVal:string)=>curVal.toUpperCase())
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users:string[]=["MUBASHIR","Huzaifa","Shaheer","Zia","Riaz"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for(var i=0;i<new_users.length;i++){
    if(current_users_lower.includes(new_users[i].toUpperCase())){
        console.log(`Sorry ${new_users[i]} You will need to enter a new username`)
    }else{
            console.log(`${new_users[i]}, this username is available`)
        }
}
// Q33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var numbers:number[]=[1,2,3,4,5,6,7,8,9];
// • Loop through the array. Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for(var i=0;i<numbers.length;i++){
if(numbers[i]===1){
    console.log(`${numbers[i]}st`)
}else if(numbers[i]===2){
    console.log(`${numbers[i]}nd`)
}else if(numbers[i]===3){
    console.log(`${numbers[i]}rd`)
}else{
    console.log(`${numbers[i]}th`)
}
}
// Q34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza
var favouritePizza:string[]=["Fajita","Arabian hot","Italian cheese"];
for(var i=0;i<favouritePizza.length;i++){
    console.log(`${favouritePizza[i]}`)
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for(var i=0;i<favouritePizza.length;i++){
    console.log(`I really like ${favouritePizza[i]} pizza`)
}
console.log("I really love pizza!");

//Q35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
var animals:string[]=["Snakes","Crocodile","lizard"];
for(var animal of animals){
    console.log(animal);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
for(var animal of animals){
    console.log(`${animal} is a very dangerous animal`)
}
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nThese all are reptiles");

//Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:string,message:string){
    console.log(`The size of the shirt is ${size} and the message printed on it will be "${message}"`)
}
make_shirt("large","Basel");

//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string="large",message:string="I love typescript"){
    console.log(`The size of the shirt is ${size} and the message printed on it will be "${message}"`)
}
make_shirt();
make_shirt("medium");
make_shirt("small","I need another one");

//Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}.`)
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Chicago","America");

// Q39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city:string,country:string):string{
    return `"${city},${country}"`
}
var ans=city_country("Karachi","Pakistan")
var ans2=city_country("Duabi","UAE")
var ans3=city_country("Bejing","China")
console.log(ans);
console.log(ans2);
console.log(ans3);

// Q40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist:string,title:string):{artist:string,title:string}{
var dictionaries={
    artist:artist.charAt(0).toUpperCase()  + artist.slice(1),
    title:title.charAt(0).toUpperCase() + title.slice(1)
};
return dictionaries;}
var album=make_album("ali","teri yaaden")
console.log(album);
album=make_album("basel","o maahi")
console.log(album);
album=make_album("atif","tu hi")
console.log(album);