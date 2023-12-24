/**
 * Functions 
 * - call & definitons (no need for declarations?)
 * - parameters
 * - return
 * - anonymous functions (function expressions)
 * - arrow functions
 * - fxns v methods - functions belonging to Objects (classes): 
 *                    all fxns belong to an object; even user defined fxns belong to window obj
 */

function doSomething() {
    var firstname = "Tom"; 
    var lastname = "Huddlestone";
    return firstname +" " +  lastname;
}

var fullname = doSomething();
console.log(doSomething()); //return fullname

function checkAge() {
    var age = prompt("Key in your age...","");

    if (age < 18) {
        console.log("Ages less than 18 can't vote");
        let i = 0;
        while(i < 10) {
            console.log(`Here is ${i}`);
            i++;
        }
    } else if (age >= 18) {
        console.log("you're eligible to vote")
    } else {
        console.log("You didn't enter a number!");
    }
}

// checkAge();

//PARAMETERS
function add(num1, num2) {
    return num1+num2;
}

// console.log(add(4,5));
function calcMax(num1, num2) {
    return (num1-num2 > 0) ? num1 : num2;
}

function calcMin (num1, num2) {
    return (num1-num2 < 0) ? num1 : num2;
}

//function to find range of possible random values
function randIntRange(val1, val2) {
    var max = calcMax(val1,val2);
    var min = calcMin(val1,val2);

    var numofVals = max - min + 1;
    var randomInt = Math.floor(Math.random()*numofVals) + min
    return randomInt;
}

console.log("random value within 5 & 10 => ", randIntRange(5, 10));

//application - return a random food item
foods = ['fante fante', 'waakye', 'jollof', 'beans', 'croissant']

console.log(foods[randIntRange(0, foods.length - 1)]);

/**anonymous functions/ function expressions 
 * assigning funcitons to variables
 * the anonymous bit means our function will lack a name
 * and we will need to execute it by teh variable name - with fxn parenthesis
*/  
var sayHello = function(){
    var name = prompt("Hi there, what's your name?");
    window.alert("Good morning " + name + ", so nice to meet you!")
}
// sayHello()

//arrow functions
sayHi = () => { console.log("hi there :?")}
sayHi();

//arrow functions with param
caps = (str)=> {
    return str.toUpperCase();
}

console.log(caps("Merry Christmas"))