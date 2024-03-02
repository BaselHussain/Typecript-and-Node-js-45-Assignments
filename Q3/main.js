var personName = "basel";
console.log(personName.toUpperCase());
var personName2 = "BASEL";
console.log(personName2.toLowerCase());
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
}
var ans = titleCase("basel is very handsome");
console.log(ans);
