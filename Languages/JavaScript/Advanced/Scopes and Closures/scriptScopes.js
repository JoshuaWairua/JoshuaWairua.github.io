// ------------------------------------SCOPE-------------------

// a scope dictates a  portion of a program that a particular variable is accessible/ makes sense
// it is good practice to declare variables within a particular scope that it is needed so that it is discarded outside that particular scope
// Unlike C and Java programming languages, it does not necessarily mean that curly braces create a new scope
// in JS, scoping is MOSTLY based on functions not block scoping i.e., an if block does not create a new scope

var name = 'Josh';
const allocateDepartment = () => {
    if (name === 'Josh') {          //the variable 'name' is accessible inside the function scope
        var department = "IT";
    }
    console.log('inside:', department) // the variable is only accesible within the function scope
}

allocateDepartment();
console.log(name);
//console.log('outside:', department);     //the variable is not accesible outside the function scope

// a method argument creates a local variable of local scope/ a method argument is creaing a new variable
let jina = "Mwaura";
function printGreeting(jina) { // a new variable 'jina' is created that is accessible within the function scope. This created variable overshhadows the global scope variable 'jina' on line 22
    console.log("Hello " + jina);
}
printGreeting("Yvonne Mwema");

// the problem with the function below on line 30 is that it is like creating a variable in the global scope. One might be using a library or another programmer might have the same name of the function 
function sum() {        //the 'sum' function is a global variable/function
    let a = 10;
    let b = 20;
    console.log(a+b);
} // this will not run until you call he function
sum();

// To solve this issue we use IIFE(Immediately Invoked Function Expression). It helps by not polluting the global space
(function() {
    let a = 10;
    let b = 20;
    console.log(a + b);
})();


// -------------------------------READ AND WRITE OPERATIONS---------------------------------------------

// read and write operations in variables
let c = 10; // this is a write operation on the variable 'c'
console.log('read', c) //this is reading the variable 'c'

let d = 10;
let e;
e = d; // this is a read (d) and write (e) operation 

function salamu(name) { //write on the variable 'name'
    console.log(name); //read
}
salamu("Hadija"); //write

//read and write operations affects how JS deals with certain errors and executions
// in JS you can write on a variable that was not declared, but you CANNOT read a variable without first declaring it 
func = 100; // a write operation on a variable that was not declared
// console.log(sijadeclare);    // a read operation on a variable that was not declared

// every global variable is a property on the global object depending on the runtimei.e., window object and global object on the browser and node runtimes respectively
// There is only ONE global Object
