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
    private _courseCount = 1
    readonly city: string = "Paris"
    constructor(
        public name: string,
        public email: string,
        private userId: string
    ) {
    }
    // private methods
    private deleteToken(){
        console.log("Token deleted");        
    }

    // Using getter/setter
    get getAppleEmail(): string {
        return `apple ${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount
    }
    // in setter no need to return and set the type of value / there should be nothing return type in setter
    set courseCount(courseNum) {
        // logics here
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than zero or should be more than one")
        }
        this._courseCount = courseNum

    }
}

const shubrato = new User("shubrato", "shubrato@gmail.com", "9534");



