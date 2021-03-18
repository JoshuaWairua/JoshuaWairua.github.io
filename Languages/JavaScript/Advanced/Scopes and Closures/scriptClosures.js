// ------------------------------------------CLOSURES--------------------------------------------------------
// JS (has a feature) creates a scope chain. When creating a function object, the compiler remembers the scope chain where the function was declared or assigned. 
// It does not matter where you pass or call the function object, the function has a snapshot (a pointer NOT a copy) to the actual variables of the scope chain
// DEFINITION: a closure is a function that remembers its scope during the time of declaration(even if it is executed in a different scope or file)
// variables in functions are created for each function execution. i.e., When you execute a function (below) twice, it generates/creates two different variables of 'b' that are assigned the value 20;
// when functions are created, they remember the state of the scope they were created in;  

var a = 10;
function outer() {
    var b = 20;
    var inner = function() {
        console.log(a);
        console.log(b);
    }       // here (in the declaration) the inner variable was assigned to it is a function object which also remembers the scope informtion it was created in. The function has pointers (NOT duplications) to the variables 'a' and 'b' in the global scope and in the outter scope.
    return inner;
}
outer();        //returns the 'inner' function without calling it
console.log('calling the outer function which returns the \'UNCALLED\' inner function>>>> ', outer());
var innerFn = outer();         //assigning the called outer/uncalled inner function to a variable
console.log('logging the same \'UNCALLED\' function that was assigned to a differnt variable>>>>>>>>', innerFn);          

innerFn(); //here, the function outer does not exist anymore because it has already been executed, but the inner function accesses(has a reference to) the variable 'b' which is in the 'outer' function scope because of closures
console.log('logging the called function', innerFn());


// closures in callbacks
a = 10;

// wait for 2 seconds
var fn = function() {
    console.log('waited for 2 seconds' ,a);
}           // since your source code did not call the function fn, it was called somewhere else (probably in a library that has the setTimeout feature) and the function had the scope information of where it was declared hence knows the value of the variable 'a'
setTimeout(fn, 2000);
console.log('i came after setTimeot but i couldn\'t wait 2 seconds for it to execute' )




// ---------------------------------------The Module Pattern----------------------------------------------------
// the main point of closures is the module pattern
// The module pattern is used in JS because it has no private or public features
// Since you cannot make a property in an object private in JS, you create closure variables so that using functions is the only way to remember and access the variables


function createPerson() {
    var firstName = "Josh";
    var lastName = "Mwaura";
    var objPrsn = {
        getFisrtName() {
            return firstName;
        },          // the only way that the function 'getFirstName' accesses firstName is through closures
        getLastName() {
            return lastName;
        },
        setFirstName(name) {
            firstName = name;
        },
        setLastName(name) {
            lastName = name;
        }
    };
    return objPrsn;
}
var person = createPerson();

// console.log(person.firstName);       //you cannot access person.firstName because it is not a property defined on the object 'objPrsn' itself

console.log('the only way to access fistName' ,person.getFisrtName());
person.setLastName("Wairua");
console.log('the only way to set/edit lastName', person.getLastName());


