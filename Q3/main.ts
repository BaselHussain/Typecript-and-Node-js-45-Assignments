// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
var personName:string="basel"
console.log(personName.toUpperCase());

var personName2:string="BASEL";
console.log(personName2.toLowerCase());





function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
       
    }
    return sentence.join("");
    
}
    var ans=titleCase("basel is very handsome")
    console.log(ans);