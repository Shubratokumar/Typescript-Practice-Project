// interface for taking photos
// interface is not the definition this the things we must have in order to have it. 
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}
// implementing the protocol 
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}
}
class FaceBook implements TakePhoto, Story {
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