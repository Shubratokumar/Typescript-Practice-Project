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
    readonly city: string = "Paris"
    constructor(
        public name: string,
        public email: string,
        private userId: string
    ) {
    }
}

const shubrato = new User("shubrato", "shubrato@gmail.com", "9534");



