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
console.log("---for Loop---")
for (let i = 0; i < foods.length; i++){
    console.log(myStr, foods[i]);
}

//while looop
console.log("---while Loop---")
let i = 0; 
while(i < foods.length) {
    console.log(`${myStr} ${foods[i]}`)
    i++;
}

// for of  - loop through arrays
console.log("---for of Loop---")
for (let food of foods) {
    console.log(myStr + food);
}

// forEach
console.log("---forEach Loop---")
foods.forEach(
    food => {
        console.log(myStr, food);
    }
)
