"use strict";
// Creating an object with class constructor
class User {
    constructor(name, email) {
        this.city = "Paris";
        this.name = name;
        this.email = email;
    }
}
const shubrato = new User("shubrato", "shubrato@gmail.com");
// shubrato.city = "Dhaka";
console.log(shubrato);
