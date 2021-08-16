// --------------------------------------------PROTOTYPE-------------------------------------------
// you can emulate classes using by creating a constructor function
// initializing a variable using the new keyword creates a new object 
// every object type has a prototype
// the prototype is like a map of that object type containing the functionality/methods
//  the '__proto__' property points to the prototype and knows how to use the methods. Hence these methoods are not repeated on each different "user" instance. 


// creating a 'User' constructor function without the 'constructor' keyword
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

// accessing the prototype
// the prototype can only be accessed on the constructor function i.e., 'User' and not in the instances of the object type i.e., 'userOne'. THe instance of the object only has the '__proto__' property that points to the prototype
// line 19 below replaces the need for defining the method inside the 'User' constructor function above
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}
// another advanage of defining methods outside the constructor function as shown above is to allow for inheritancee
function Admin(...args){
    // console.log(args); //gives an array of the parameters [rest parameter]. In this csae, whichever parameters/arguments of the instance of the 'Admin' class, will be stored up in an array
    User.apply(this, args); //the 'this' keyword references the new object created // you can also use '.call' istead of '.apply' to inherit another class //the reason for using the rest parameter is to pass them as arguments in the User class
    this.role = 'super admin'; //adding another property in the 'Admin' class
}


// -----------------------------------------prototype inheriance----------------------------------
Admin.prototype = Object.create(User.prototype); //inheriting the methods of 'User's' prototype; we are basing the 'Admin' prototype on the 'User' prototype
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email; //if it returns false then we filter out that user from the array 
    });
}; //creating a method directly to the 'adminwo' prototype 

let userOne = new User('hudson@ninja.com', 'Hudson');
let userTwo = new User('jane@ninja.com', 'Jane');
let admin = new Admin("yvonne@ninja.com", "Yvonne");
let users = [userOne, userTwo, admin];

console.log(userOne);// here, the 'userOne' object's methods are found in the object itself rather than the '__proto__' property. This is because the methods/functions i.e., 'login' are defined inside the constructor function; unlike in the example of classes 
userTwo.login(); // accessing the methods in the '__proto__' property as if they are attached to the object itself. We are not accessing the method using 'userTwo.prototype.login();'

console.log(admin); 

