// JS is an OOP programming language

// creating an employee object
let emp1 = {};
emp1.firstName = "Michael";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "Regional Manager";

let emp2 = {};
emp2.firstName = "Jane";
emp2.lastName = "Marrie";
emp2.gender = "F";
emp2.designation = "Human Resource Manager";

// one way to create objects is to use functions to avoid repetition of code when creating new objects
function createEmployeeObject(firstName, lastName, gender, designation) {
    let newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
}
let emp3 = createEmployeeObject("Josh", "Mwaura", "M", "IT Manager");


// example 2 of use of functions to create objects

function createBicycle(cadence, speed, gear) {
    let newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
};
let bicycle1 = createBicycle(50, 20, 4);
let bicycle2 = createBicycle(20, 5, 1);



// creating objects using the constructor method
// By convenion, the constructor name should start with an uppercase letter
function Bicycle(cadence, speed, gear) {
    //  let this = {}; is created by the constuctor
    // to access the object properties, we use the 'this' keyword
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    // return this; is creted by the constructor
}
// you call the function as a constructor function using the 'new' keyword not as aregular function
let bicycle3 = new Bicycle(50, 20, 4);
 


// using the 'this' keyword
function Student(studentID, startYear, endYear, course, project) {
    this.studentID = studentID;
    this.startYear = startYear;
    this.endYear = endYear;
    this.Course = course;
    this.project = project;
    this.introduceNumberPrjct = function() {
        this.project += 1;
    }
}
// calling the function in constructor mode
let student1 = new Student(1234, 2015, 2022, "Mathematics and Computer Science", 0);
// student1.introduceNumberPrjct();

function Lecturer(name) {
    this.name = name;
}

let kamotho = new Lecturer("Kamotho");
kamotho.introduceNumberPrjctToStudent = student1.introduceNumberPrjct;
// how to use the 'this' keyword in another object to manipulate another object
// below, by using the call property on the function, the 'this' reference is pointing to the object 'student1' instead of 'kamotho' instance
// you can call a function using the .call() property. i.e., functionName.call(); You then can pass in an object as an argument that you want to bind it to. Doing so will make the 'this' reference refers to the object passed in instead of the function. i.e., functionName.call({objectName}). the 'this' keyword will refer to the 'objectName' object
kamotho.introduceNumberPrjctToStudent.call({student1});



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PROTOTYPES

// we use prototypes to create objects. This can be compared to classes in other languages
// prototypes builds a sort of a blueprint/template that influences/creates various objects
// in other languages, objects are synonimous to an instance of a class
// every time you create a function  the JS engine creates two objects. One is an object for the function itself and the other for the prototype

function foo1() {
    console.log("HELLO");
}
// there is an object for the function 'foo1' and the prototype. 
// To access the prortype object, you access the 'prototype' property. i.e., function.prototype
console.log('the prototype object created for the function foo1' ,foo1.prototype);

// you can create a new object using the 'new' keyword on the function
let myObj = new foo1();
console.log('myObj is an empty object created from the foo1 function', myObj);
// the JS engine creates a '__proto__' property for every object that is created using the 'new' keyword on a function
// the '__proto__' property points to an Object. This object is the prototype object of the foo1 function
// the prototype Object cannot apply when the 'new' keyword is not used on the function

// creating a property on the prototype object to prove that the '__proto__' property of 'myObj' pointsto the 'foo1.prototype' object
foo1.prototype.test = "This is the prototype object of foo1";
console.log('created property on the foo1\'s prototype object >>>> ' , foo1.prototype.test);
console.log('the new object created references the prototype object >>>>>>' , myObj.__proto__.test);
console.log('proven>>>', foo1.prototype === myObj.__proto__);


// TO BE CONTINUED
// search and continue from this video>>> C:\Users\Joshua\Desktop\Josh\Programming\JavaScript\Advanced Objects\Objects and Prototypes In-depth 12 - Introducing the prototype - YouTube.mkv