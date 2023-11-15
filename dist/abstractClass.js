"use strict";
// Abstract class
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelCount() {
        // here are some complex calculations
        return 5;
    }
}
class Instagram1 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia is here");
    }
}
// we cannot create an instance of an abstract class
// const sk1 = new TakePhoto();
// we can do so with extends class of the abstract class
const sk = new Instagram1("test", "test", 7);
