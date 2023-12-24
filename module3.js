/*
    a simple script to log strng to console
*/

//create variable for string
var helloMsg = "Hello there! How are you?"
// console.log(helloMsg);

var colors = ['red', 'orange', 'blue', 'yellow', 'grey'];
randomIndex = Math.floor(Math.random() * colors.length);

selectedColor = colors[randomIndex]
console.log("-------- If Else If Statements -------")
if (selectedColor == "red") {
    console.log("Selected Color is red");
} else if (selectedColor == 'orange') {
    console.log("Selected Color is orange")
} else if (selectedColor == 'blue') {
    console.log("Selected Color is blue")
} else if (selectedColor == 'yellow') {
    console.log("Selected Color is yellow")
} else console.log("Selected Colour is grey")


console.log("-------- Switch Statements -------")
switch(selectedColor) {
    case "red": console.log(selectedColor , " ==> ", "Selected Color is red");break;    
    case "blue": console.log(selectedColor , " ==> ", "Selected Color is blue");break;
    case "orange": console.log(selectedColor , " ==> ", "Selected Color is orange");break;
    case "yellow": console.log(selectedColor , " ==> ", "Selected Color is yellow");break;
    case "orange": console.log(selectedColor , " ==> ", "Selected Color is orange");break;

    default: console.log(selectedColor , " ==> ", "selected color is grey")
}