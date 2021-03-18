// encapsulating is capturing everything that means to be a user in one object 'capsule'

let user = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in')
    },
    logout() {
        console.log(this.email, 'has logged out')
    }
};
console.log(user.name);
console.log(user);
console.log(user.logout());






 

