// Creating an object with class constructor
class User {
    email: string
    name: string
    readonly city: string = "Paris"
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

const shubrato = new User("shubrato", "shubrato@gmail.com" );
// shubrato.city = "Dhaka";
console.log(shubrato);



