// Abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
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
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia is here");
        
    }
}

const sk = new Instagram1("test", "test", 7);

