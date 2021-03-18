// idealy JS is an interpreted language- we execute the source code NOT the compiled code
// the browser executes the code without compiling the source code, it iis interpreted
// before interpreting the source code, the browser compiles not to create an intermediary file but to take note of certain things that it needs to get things done. This happens in a fraction of a second. So JS is both a compilation and interprated programming language


// -----------------------------the compilation step---------------------------------------
// think of the compilation step as a bookkeeping/accounting step, where the compiler keeps a record of all the variables being used and where they are being used

// the compilation step (in this context of scopes) is only concerned about variable declaration

let a = 0;      // the compilation step just looks at 'var a' and registers it as a global variable 'a' in the global scope
let b = 20;     //the compilation step just looks at 'var a' and registers it as a global variable 'b' in the global scope
console.log(a + b);     // the compilation does not see any variable in this line so it ignores it

function myFunc() {     // the compilation step just looks at 'myFunc' and registers it as a global variable in the global scope
    let c = b;          // the compilation step just looks at 'c' and registers it as a local variable in the 'myFunc' local scope
    console.log(a + b);
}
myFunc();

// in JS functions are objects that are a form of variable declaration

let myName = "Josh";    // the compiler just looks at 'var myName' and registers it as a global variable 'myName' in the global scope

function greet(name) {      //the compiler just looks at 'greet' and registers it as a global variable 'greet' in the global scope  // the compilation step also looks at 'name' and registers it as a local variable, 'name' in the 'greet' scope
    console.log(`Hello ${name}`);   
}
greet(myName);



//---------------------------------the interpretation/execution step----------------------------------
// the execution step just looks at what is needed to be done and executes
// The interpreter is not going too worry about the VARs and the declarations
// when the interpreter needs to find which variables to use, it looks at the scope chain that was created during the compilation step. 

var myName2 = "Hudson";     // #!. the execution step looks at the 'myName2 = "Hudson";' part. It assigns the string 'Hudson' to the variable 'myName' which it found registered in the global scope 
function greet2(name2) {        // #4. After the function is called, it is executed,. The interpreter assigns the argument 'myName2' to the implicit variable 'name2' found in the greet scope.  
    console.log(`Morning ${name2}`);        // #5. 'console' is an object reference which is tNOT found in the 'greet' scope and goes a level up the scope chain, which is the global scope hence finds it. It then passes in the arguments and finds the variable 'name' in the 'greet' scope. It then executes. 
}       // #2. nothing happens in the function declaration
greet2(myName2);     // #3. the execution step looks at the 'greet2(myName2);' part. It found 'greet2' and 'myName2' registered in the global scope. It then calls the first variable 'greet2', which is a function and passes in the second 'myName2', which is an argument. 

// the Global Scope Problem
let a1 = 20;
function myFn() {
    let b = a;
    console.log(b);
    c = 100;        //when the interpreter gets to this line, it doesn't find the variable 'c' declared neither in the 'myFn' scope nor the global scope respectively. By default the interpreter will create a variable 'c' in the global scope. This is because it is a write operation.
    //console.log(d);       // when the interpreter gets to this line, it doesn't find the variable 'd' declared neither in the 'myFn' scope nor the global scope respectively. By default the interpreter will bring an error. This is because it is a read operation.
}
myFn();
// the solution to the Global Scope problem above is to declare using the keywords 'var', 'let', & 'const'



// ----------------------------------------HOISTING---------------------------------------------
// when you declare variables in JS, it is as almost they are hoisted/moved to the top because of the compilation and interpretation steps; the compiler gets to the variables before interpretation
// hoisting is advantagious in recursive functions since you would not know which function to declare first

var ba = da;        // although the compiler put the variable 'da' in the chain scope(It does not give an error because the variable 'da'exists), the interpreter will find it in the scope having the value 'undefined' at this point in time. The interpreter then assigns the value 'undefined' to the variable'ba' 
console.log('before assignment:', ba);        // the interpreter will log 'undefined'. 
var da = 200;           // the interpreter assigns the value '200' to the variable 'da'
console.log('after assignment:', da);        // the interpreter will log '200'

funcA();
function funcA() {
    console.log("this is funcA");
}       // hoisting does NOT work in function expressions, but only in function declarations // N?b: a function declaration resuts in a function object being created in the compilation step itself.



// -----------------------------------------STRICT MODE-----------------------------------------------------
