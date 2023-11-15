"use strict";
// implementing the protocol 
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class FaceBook {
    constructor(cameraMode, filter, burst, reels) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.reels = reels;
    }
    createStory() {
        console.log("Creating Story");
    }
}
