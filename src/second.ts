// interface for taking photos
// interface is not the definition this the things we must have in order to have it. 
interface TakePhotos {
    cameraMode: string;
    filter: string;
    burst: number;
}
// another interface for camera mode
interface FrontCamera {
    isFrontCamera: boolean;
    filter: string;
    burst: number;
    burstMode: boolean;
}

interface Story {
    createStory(): void;
}
// implementing the protocol 
class Instagram implements TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}
}
class FaceBook implements TakePhotos, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public reels: string
    ){}
    createStory(): void {
        console.log("Creating Story");        
    }
}