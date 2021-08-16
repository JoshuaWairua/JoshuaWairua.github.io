var number = 5; // inline comment

/* 
this is 
a 
multi line
comment

*/


// DATA TYPES
/*
1. Undefined - something that has not been defined i.e., a variable that has not been set/assigned to something
2. null - means nothing. i.e., setting something to nothing 
3. boolean - means true or false 
4. string - any text
5. symbol - an immutable primitive value that is unique
6. number
7. object - stores key-value pairs
 
*/

// VARIABLE
// varianles allow computers to store and manipulate data in a dynamic fashion
// variable is a label to point to the data

var myName = "Josh" 
myName = "Wairua"

let ourName = "freecodecamp"
const pi = 3.14

// var can be used throughout the whole program
// let can only be used in the scope that it is declared in 
// const cannot change
// let keyword does NOT allow for declaration of variables with the same name in the same scope

// when declaring a variable with the 'var' keyword, it is declared globally or locally when declared inside a function
function checkScope0() {
    "use strict";
        if(true) {
            var i = "block scope";
            console.log("Block scope is: ", i);
        }   
        console.log("Function scope is: ", i);
        return i;
    }
    checkScope0();

//  let keyword's scope is limited to the block (inside the curly braces) statement or expression that it was declared in 
function checkScope() {
"use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope is: ", i);
    }   
    console.log("Function scope is: ", i);
    return i;
}
checkScope();


// storing variables using the assignment operator
var a  // we are declaring variable 'a'/ uninitialized variable 
var b = 12; // here we are declaring 'b' and assigning 12 to 'b'

console.log(a, b); 

// initializing variables with assignment operator
var c = 30;     // here we are initializing the declared variable 'c' with '=30'

var myFiirstName = "Joshua"; // we generally declare variables using camelCase

c = c + 1; //incrementing numbers
console.log(c, 'incremented c');
b--; //decrementing numbers
console.log(b, "decremented b")

var remainder
remainder = 11 % 3;  // the remainder operator is often used to determine whether a number is either even or odd

c = c + 60; // compound assignment with augmented addition. we are adding the value to the variable and assigning the answer to the same variable 
b += 90; //   shortcut for the same as above

var myLastName = "Mwaura";  //creating a string. "Mwaura" is known as a string literal

var myStr = "the caretaker asked, \"have you paid yor rent?\" i nodded." // escaping quotes in strings
/*  we use backslash to esccape characters e.g., 

\' - single quote
\" - double quote
\\ - backslash
\n - newline
\r - carriage return
\t - tab
\b - backspace

\f - form feed
*/

var combinedString = "First line\n\tSecond line\nThird line"
console.log(combinedString); 

var longString = "I come first. " + "I come second.";  //concatenating strings with plus operator
var string4 = "I am the one.";
string4 += " I am the two.";    // concatenating strings with plus equals operator
console.log(string4);

var anAdjective = "awesome";
var ourStr = "freeCodeCamp is "
ourStr += anAdjective;      //appending a variable to a string

console.log(ourStr);

lastNameLength = myLastName.length;    //finding length of strings
console.log(lastNameLength);

firstLetterOfLastName = myLastName[0];     // bracket notation is a way to get a character at a specific  index in a string 
// JS uses zero based indexing to count 
var lastLetterofLastName = myLastName[myLastName.length - 1];       // using length to find the last character of a string 
console.log(lastLetterofLastName);



// WORD BLANKS

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("cat", "fluffy", "ran", "quickly"));
console.log(wordBlanks("dog", "scary", "pounced", "dangerously"));

// Storing Multiple values with arrays
// arrays allow you to store several pieces of data in one place
// elements in an array can be any data type
var nyArray = ["Joshuwa", 24];

var ourArray = [["sing", 49], [ "jump", 390.03]];       //nested\multi-dimensional arrays
var myData = ourArray[0];
console.log(myData); // accessing arrays with indexes
var myData2 = ourArray[0][1];
console.log(myData2);

ourArray[1][0] = "choir";
console.log(ourArray);


ourArray.push(["humming", 9808]);        // appending data to the end of an array using the .push() function
console.log(ourArray, "appended with push function");

ourArray.pop();         // the .pop() function removes the last element of an array
console.log(ourArray, "removed last element with pop function");

ourArray.shift()        // the .shift() functions removes the first element of an array
console.log(ourArray, "removed first element with pop function");

ourArray.unshift("not an array");       // the .unshift() function prepends data to the beginning of the array
console.log(ourArray, "prepended with unshift function");



// FUNCTIONS
// functions allow us to create reusable code

function ourReusableFunction() {
    console.log("Yoo HOO!!");
}

ourReusableFunction();

function ourFunctionWithArgs(num1, num2) {
    console.log(num1 - num2)
} // parameters are variables that act as placeholders for the values that are to be input to a function when it is called
ourFunctionWithArgs(0, 98);
// passing values to functions with arguments 


// SCOPE AND FUNCTIONS
// scope refers to the visibility of variables 
// variables which have been defined outside a function block have global scope (they can be seen everywhere in the code including inside the function block itself)
// variables that have been declared within a function and the function parameters have a local scope
// the local variable takes precedence over the global variable i.e., a local variable that has the same name as a global variable will have precedence within the function that it is declared in 
// the 'return' keyword is used to return values from a function
// if you do not use the 'return' keyword in a function, the function returns an undefined value  


var changed = 0;
function change(sum) {
    return (sum +5) / 3; 
}
changed = change(10);// assigning a returned value to a variable 


// STAND IN LINE
// a queue is an abstract data structure where items are kept in order. New items can be added to the back of the queue and old items taken out through the front of the queue

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();         // the shift() function removes the first item in an array and returns that same item that was removed 
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));          // the JSON.stringify() function makes the array a string
console.log(nextInLine(testArr, 67));
console.log("After: " + JSON.stringify(testArr))

// BOOLEAN
function namelessFunc() {
    //............. bla bla bla
    return false;
}
namelessFunc();     // returns false 

function testEqualty(num) {
    if (num == 12) {    // comparison with the equality operator is mostly used in if statements
        return " is equal to 12";
    }
    return " is not equal to 12";
}
console.log(testEqualty(10));

// the strict equality operator does not convert to the same type 
/*
3 == 3;         will give true
3 === '3'       will give false because they are not of the same type
3 == '3'        will give true since it converts the type
*/

// if statements are used to make decisions in code
function testLogicalOr(val) {
    if (val < 10 || val > 20) {         // Or logical operator. We are checking whether the value i between 10 and 20
        return "Outside";
    }
    return "inside";
}

console.log(testLogicalOr(21))

// the && logical operator checks whether the two conditions are true at the same time 
// think about the order of the if statementsn because some conditions might not give the desired output 

// SWITCH STATEMENT
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
        default: 
            answer = "wrong answer, Try again"
    }
    return answer;
}
console.log(caseInSwitch(9));

// multiple identical options in switch statements
function sequentialSizes(val) { 
    var answer = "";
    switch(val) {
        case 1:
        case 2: 
        case 3: 
            answer = "low";
            break;
        case 4:
        case 5: 
        case 6: 
            answer = "Medium";
            break;
        case 7:
        case 8: 
        case 9: 
            answer = "High";
            break; 
    }
    return answer;
}
console.log(sequentialSizes(6));

// returning boolean values from functions without using if statements
function isLess(a, b) {
    return a < b;
}
console.log(isLess(8, 90));


// OBJECTS
// objects are just like arrays only that you access the data through properties instead of indices
// properties can be any data type
var ourDog = {
    "name": "Camper",
    "number of legs": 4,
    "number of tails": 1,
    "friends": ["everything!"],
    1996: "Year of Birth" 
};

var dogName = ourDog.name;      // accessing an object property through the dot notation 
var dogFriend = ourDog["number of tails"];        //accessing an object property through the bracket notation. Used when the property name has a space in it  
var dogLegs = ourDog['number of legs'];
// accessing object properties with variables
var bYear = 1996;
var dogDay = ourDog[bYear];

ourDog.name = "Foxy";       //updating object properties 
ourDog.bark = "Woof!"        // adding new object properties
delete ourDog["number of tails"];       // deleting properties from object

// testing objects for properties
function checkObj(checkProp) {
    if (ourDog.hasOwnProperty(checkProp)) {     // the hasOwnProperty() is a method that checks whether an object has such a property
        return ourDog[checkProp];
    } else {
        return "Not Found!";
    }
}
console.log(checkObj("hello"));


var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];         //  accessing nested objects/ sub properties of an object
console.log(gloveBoxContents);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dundelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1];        // accessing nested arrays
console.log(secondTree);


// LOOPS
// loops allow you to run the same code multiple times. 

// a while loop runs while a specified condition is true and stops when it is no longer true
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log("while loop :", myArray);

// a for loop 
var evenArray1 = [];
for (var i = 0; i < 10; i += 2) {       // the initialization starts; the condition has to be true for the loop to run; what to do after each iteration
    evenArray1.push(i);
}
console.log("for loop: ", evenArray1);

var ourArray2 = [9, 10 ,11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray2; i++) {           // iterating over an array using the for loop
    ourTotal += ourArray2[i];
}
console.log(ourTotal);

// do... while loops unlike the while loops will always run one time before it checks the condition 
var myArray3 = []; 
var i = 10;
do {
    myArray3.push(i);
    i++;
} while (i < 5)
console.log("do while loop: ", i, myArray3);

var randomNumberBtwn0and19 = Math.floor(Math.random() * 20);        // finding random numbers. Math.floor() rounds down to the nearest whole number
console.log(randomNumberBtwn0and19);

// the parseInt function takes in a string and turns it into an integer
function convertToInteger(str) {
    return parseInt(str)
}
console.log("use of parseInt: ", convertToInteger("56"));

// the conditional ternary operator
// condition ? statement-if-true : statement if false;
function checkEqual(a, b) {
    return a === b ? true : false;
    // gives same result as return a ===b;
}
console.log("ternary operator", checkEqual(1, 2));

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0.106));

// USE STRICT
// "use strict";  is used to catch common mistakes and unsafe actions in JS source code by activating strict mode

// ARROW FUNCTIONS
// use arrow functions to write concise anonymous functions
/*var magic = function() {
    return new Date();
}
is the same as the arrow function below
*/
let magic = () => new Date();   // no need for curly brackets and return keyword since we are returning one value 

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log("concatinating arrays in an arrow function: ", myConcat([1, 2], [3, 4, 5]));


// HIGHER ORDER FUNCTIONS
// higher order functions take other functions as arguments for processing collections of data
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// DEFAULT PARAMETERS
// the default parameter kicks in when the argument is not specified or undefined
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log("Default parameter inactive: ", increment(5, 2));
console.log("Default parameter active: ",increment(5));


// THE REST OPERATOR
// the rest operator is three dots ...
// used in function parameters
// the rest operator allows you to create a function that takes a variable number of arguments

/*
function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
};

gives the same result as the function below
*/
function sum(...args) {          // the rest operator... takes everything passed into it and converts them into an array called args  
    return args.reduce((a, b) => a + b, 0);
};

console.log("use of rest operator: ", sum(1, 2, 3, 4));         // now we can pass in any number of arguments unlike the function commented out above which was constrained to three arguments


// the SPREAD OPERATOR
// looks like the rest operator, three dots ...
// unlike the rest operator, the spread operator expands an already existing array or spreads out an array
// it takes an array and spreads it to its individual parts
// used to evaluate arrays in-place

const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
(function() {
    arr4 = arr3;
    arr3[0] = 'potato';
})();
console.log(arr4); 

const arr5 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr6;
(function() {
        // we want arr6 top be a copy of arr5
    arr6 = [...arr5];            //the spread operator spreads out the contents of array 'arr5' into the array 'arr6'. Hence arr6 is not equal to arr5 but equal to the contents of arr5 
    arr5[0] = 'potato';
})();
console.log("application of spread operator: ", arr6); 


// DESTRUCTURING ASSIGNMENTS
// destructuring assignments are a special syntax for neatly assigning values taken directly from an object into a variable 
// use of Destructuring Assignments to assign variables from objects

var voxel = {
    x: 3.6,
    y: 7.4,
    z: 6.54
};

/*
this was the old way of assigning each individual element of an object to a variable 
var x = voxel.x;    // x = 3.6
var y = voxel.y;    // y = 7.4
var z = voxel.z;    // z = 6.54
*/

const { x, y, z } = voxel;
console.log("Destructuring assignments: ", y);

const { x : a1, y : b1, z : c1 } = voxel;          // a = 3.6, b= 7.4, c = 6.54    //the use of destructuring assignments where variables a, b & c are created and assigning them to the values of x, y, z from the object
console.log("use of destructuring assignment on objects: ", a1);

// use of Destructuring Assignments to assign variables from arrays
// unlike destructuring of objects, you cannot specify which elements from an array to go into a variable. Instead, it goes in order
const [x1, y1, , , m1] = [1, 2, 3, 4, 5, 6];       // this is how we destructure assignment number 5 (which is at the 4th index in the array) to variable m.
console.log("use of destructuring assignment on arrays: ", x1,y1, m1);

let a3 = 8, b3 = 6;
(() => {
    "use strict";
    [a3, b3] = [b3, a3];
})();
console.log(a3);
console.log(b3);

// Destructuring in functions
// you can use destructuring to pass am object as a function's parameters
const friendOfMe = {
        "name": "Kelvin",
        "age": 25,
        "vocation": "Programmer"
        }
/*
 let findFriend = (objFriend) => {
    var { name, age, vocation } = friendOfMe;
    console.log(name + " is my friend. He is " + age + " years old and works as a " + vocation);
}

 is the same as the function below
*/

let findFriend = ({ name, age, vocation }) => {
    console.log(name + " is my friend. He is " + age + " years old and works as a " + vocation);
}
findFriend(friendOfMe);


// TEMPLATE STRINGS
const string1 = "Hello, my name is ";
const name = "Josh";
console.log(string1 + name);

console.log("Use of template strings: ", `Hello my name is ${name}`)        // the use of template strings


// Writing concise object literal declarations using simple fields
/* const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
}

to avoid repetion of the same key-value names use the function below
to   
*/

const createPerson = (name, age, gender) => ( { name, age, gender} );
console.log(createPerson("Joshua Wairua II", 90, "Male"));

const personArr = (name, age, gender) => ( [name, age, gender] );
console.log(personArr("Joshua Wairua II", 90, "Male"));


// Using class syntax to define a constructor function
/*
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}       // a constructor function
var zeus = new SpaceShuttle('Jupiter');         //the older way to create/instantiate an object using the new keyword  

the new way of creating objects using class syntax is shown below
*/

class SpaceShuttle {
    constructor(targetPlanet, boost) {
    this.targetPlanet = targetPlanet;
    this._boost = boost;        // private variables are not supposed to be accessed poutside the class they are declared in. private variable in objects start with _. They get set when you construct the object
    }
    get  booster() {
        return this._boost;
    }       // getter functions are created to get/ return the value of an object's private variable to the user without the user directly accessing the object's  private variable
    set  booster(updateBoost) {
        this._boost = updateBoost;
    }
} 
var zeus = new SpaceShuttle('Jupiter', 'affirmative');

console.log(zeus.targetPlanet);
