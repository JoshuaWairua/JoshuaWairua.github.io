
// ------------------------------------------Class Inheritance----------------------------------------------
// you can associate the same functionalities and properties of one class in another and add extra functionality and properties using class inheritance
// you do not need another constructor in the class that extends anotheer class
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
};

// inheriting 'User' class
class Admin extends User{
    deleteUser(user) {
        users = users.filter(u => {            
            return u.email != user.email; // by returning false, the user will be filtered out of the 'users' array
        });
    }
};
let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@ninjas.com', 'Yoshi');
let admin = new Admin('josh@ninjas.com', 'Josh');
let users = [userOne, userTwo, admin];

console.log('User One>>>', userOne);
console.log('User Two>>>', userTwo);
userOne.login();
userOne.updateScore();
userTwo.logout();

console.log('users before deletion>>>', users)
admin.deleteUser(userTwo);
console.log('users after deletion>>>', users);

