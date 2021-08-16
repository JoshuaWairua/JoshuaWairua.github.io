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
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@ninjas.com', 'Yoshi');
userOne.login();
userTwo.logout();
userOne.updateScore();
console.log('User One>>>', userOne);
console.log('User Two>>>', userTwo);


//------------------------------------ Method chaining------------------------------------------------
userOne.login().updateScore().updateScore().logout(); // to avoid returning undefined, we aim to return (in lin 9, 13, & 18) an instance of the object in order to chain methods
