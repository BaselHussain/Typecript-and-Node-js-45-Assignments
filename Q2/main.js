// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” 
var Name = "Eric";
console.log("Hello ".concat(Name, " would you like to learn some python today?"));
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join("");
}
var ans = titleCase("basel is very handsome");
console.log(ans);
