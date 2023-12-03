// Abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    // use abstract in case of compulsory
    abstract getSepia(): void
    // optional
    getReelCount(): number{
        // here are some complex calculations
        return 5
    }
}
class Instagram1 extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,        
    ){        
        // console.log(this.cameraMode);  this is wrong
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        super(cameraMode, filter)
        // console.log(this.cameraMode); this is completely ok 
    }
    getSepia(): void {
        console.log("Sepia is here");
        
    }
}

// we cannot create an instance of an abstract class
// const sk1 = new TakePhoto();

// we can do so with extends class of the abstract class
const sk = new Instagram1("test", "test", 7);

