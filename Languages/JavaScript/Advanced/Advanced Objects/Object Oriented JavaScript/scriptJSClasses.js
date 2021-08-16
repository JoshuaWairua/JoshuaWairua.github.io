// --------------------------JS CLASSES------------------------------------------------------------

// if we want more than one user object, we use a JS 'class'
// CLasses in JS are like blueprints
// under the hood, JS does not use classes, instead it uses prototypes. the Classes used in JS is just syntactic sugar

//------------------------------ Class Constructors----------------------------------------------------

// a constructor function constructs/creates the new objects based on the 'class'
// methods are created outside the constructor function (only the object properties are defined inside) 
// DO NOT place a comma after the constructor function
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this; // to avoid returning undefined, we aim to return an instance of the object in order to chain methods
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this; // to avoid returning undefined, we aim to return an instance of the object in order to chain methods
    }
}
/* 
the new keyword: 
    1. creates a new empty object
    2. sets the value of 'this' to be the new empty object
    3. calls the constructor method
*/
let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@ninjas.com', 'Yoshi');
userOne.login();
userTwo.logout();
userOne.updateScore();
console.log('User One>>>', userOne); // when you log the user on the console and expand the '__proto__' property, you will find the 'login' and 'logout' methods
console.log('User Two>>>', userTwo);
