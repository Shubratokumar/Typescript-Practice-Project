"use strict";
// Creating an object with class constructor
// class User {
//     // anything not defined with private keyword are public
//     public email: string
//     name: string
//     // not accessible use private keyword
//     private readonly city: string = "Paris"
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
// writing classes in professional way
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "Paris";
    }
}
const shubrato = new User("shubrato", "shubrato@gmail.com", "9534");
