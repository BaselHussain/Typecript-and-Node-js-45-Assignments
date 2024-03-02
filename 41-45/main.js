// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// show_magicians(["eric","john","Mark"]);
// Q42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "The Great";
    }
}
var magicians = ["eric", "john"];
make_great(magicians);
show_magicians(magicians);
//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " " + "The Great");
    }
    return greatMagicians;
}
var magicians3 = ["eric", "john"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    console.log("Your sandwiches are here sir");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
sandwich(["cheese", "capsicum"]);
sandwich(["beef", "italian"]);
sandwich(["chicken", "club"]);
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// type car={manufacturer:string,model:string,[key:string]:any;
// function createCar(manufacturer:string,model:string,optional:Record<string,any>){
// return{
//     manufacturer,model,...optional
// }
// }
// var myCar=createCar("toyota","axio",{color:"black", year:2023});
// console.log(myCar);
function createHanzala(manufacturer, model) {
    return {
        manufacturer: manufacturer,
        model: model
    };
}
var myCar = createHanzala("toyota", "axio");
console.log(myCar);
