// Generics 
// examples for reference
const score: Array<number> = [];
const names: Array<string> = [];

// defined types for identity 
function identityOne(val: boolean | number): boolean | number {
    return val
}

// defined any type for identity
function identityTwo(val: any): any {
    return val
}

// specific types for identity; <Type> is almost like any type
function identityThree<Type>(val: Type): Type {
    return val // this function will return the same type that takes as argument
}
identityThree("sk"); // valid
identityThree(true); // valid
identityThree(6); // valid

// short form of Type
function identityFour<T>(val: T): T {
    return val 
}

// also valid
interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({brand:"rfl" , type: 5})