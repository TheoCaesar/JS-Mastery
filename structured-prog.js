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

/**
 * Loops - For, for in & while Loops
 * 
 */

console.log("-------- For Loops  -------")

for (let i = 0; i < 10; i++) {
    console.log("i => ", i)
}

student = {
    name: "Tom Sawyer",
    age: 22, 
    class: "Grade 12",
    GPA: 3.89
}
console.log(`-------- For ___ In (Student ${student})Loops -   -------`)

for (const varKey in student) {
    if (Object.hasOwnProperty.call(student, varKey)) {
        // const element = object[varKey];
        console.log(varKey, student[varKey])
    }
}

console.log("-------- For Each Loops -------")

names = ["Tom", "jenkins", "Delgado", "Ricky", "Sawyer"]
names.forEach(nameObj => {
    console.log(nameObj.toUpperCase())
});

console.log("-------- For Of Loops -------")
for (varName of names) {
    console.log(varName)
}

console.log("----- While Loops ----")

let i = 10; 
while (i > 5) {
    console.log("i => ", i--);
}

/**
 * Structured Programming - Sequences, Selection & Loops
 * A simple program that gets a word from a string
 * then creates a new string containing the same word
 * there's a catch though the word now has to be uppercase in new string
*/

var myStr = "Today is going to be a good day!"
console.log("myStr = ", myStr);

var myStrUpper = myStr.toUpperCase();
console.log ("myStrUpper = ", myStrUpper);

//substr(startIndex, charCount)
var startInd = myStr.search("good");
var charCount = "good".length;

var subStr = myStr.substr(startInd,charCount)
console.log("subStr = ",subStr)

//substring(startIndex, endIndex)
var endInd = startInd + charCount //- 1)
var subString = myStr.substring(startInd, endInd)
console.log("subString = ",subString)

//new string
var newStr = myStr.replace(subString, subString.toUpperCase());
console.log(newStr);


/** LOOPS
 * make an arr called foods & put four food items in the array
 * Use String literal syntax to log variable (myStr) which may be food related
 * followed by a space and tehn the first element of foods array.
 */

var myStr = "I am really craving for some ";
var foods = ["Jollof", "Omelette", "French Fries", "Noodles"];


// for loop
console.log("\n---for Loop---")
for (let i = 0; i < foods.length; i++){
    console.log(myStr, foods[i]);
}

//while looop
console.log("\n---while Loop---")
var x = 0; 
while(x < foods.length) {
    console.log(`${myStr} ${foods[x]}`)
    x++;
}

// for of  - loop through arrays
console.log("\n---for of Loop---")
for (let food of foods) {
    console.log(myStr + food);
}

// forEach
console.log("\n---forEach Loop---")
foods.forEach(
    food => {
        console.log(myStr, food);
    }
)


/**Loop + Selection
 * have your script convert food item to uppercase
 * if index of said food item is even
 */
console.log("\nLOOPS & SELECTION");
foods.forEach(food => {
    (foods.indexOf(food) % 2 === 0) ? console.log(myStr, food.toUpperCase()): console.log(myStr, food);;
})
