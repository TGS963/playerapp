import { v4 as uuidv4 } from "uuid";

function NCSmusic() {
    return[
        {
            name: "Legendary [Cinematic Piano] (No Copyright Music)",
            cover: "https://i.pinimg.com/originals/34/30/a0/3430a061b7435ef0c58b1eff94453556.jpg",
            artist: "OBmusic",
            audio: "https://cdn.pixabay.com/audio/2022/01/05/audio_656f5574c1.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Happy Mood and Ukulele (Version 60s)",
            cover: "https://i.pinimg.com/originals/f8/21/05/f8210529b87d0f2ba86a0e2ff762befa.jpg",
            artist: "Lesfm",
            audio: "https://cdn.pixabay.com/audio/2021/10/26/audio_e88513f463.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default NCSmusic;