import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({isplaying, setisplaying,  songref, songtime, setsongtime, songs, setcurrent, current, setsong}) => {
    //Handler
    const songhandler = () => {
        if (isplaying) {
            songref.current.pause();
            setisplaying(!isplaying);
            return;
        }
        songref.current.play();
        setisplaying(!isplaying);
    }

    const activesonghandler = (np) => {
        const newsong = songs.map((s) => {
            if (s.id === np.id) {
                return {...s, active:true}
            }
            else{
                return {...s, active:false}
            }})
            setsong(newsong)
    }
    
    const slidehandler = (e) => {
        songref.current.currentTime = e.target.value;
        setsongtime({...songtime, current: e.target.value});
    }
    const gettime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    const skiphandler = async (direction) => {
        let currentindex = songs.findIndex((song) => song.id === current.id)
        switch (direction) {
            case 'next':
                await setcurrent(songs[(currentindex + 1) % songs.length])
                activesonghandler(songs[(currentindex + 1) % songs.length])
                break;
            case 'previous':
                if ((currentindex - 1) === -1){
                    await setcurrent(songs[songs.length - 1])
                    activesonghandler(songs[songs.length - 1])
                    break;
                }
                await setcurrent(songs[(currentindex - 1) % songs.length])
                activesonghandler(songs[(currentindex - 1) % songs.length])
                break;
            default:
                break;
        }
        if (isplaying) {
            songref.current.play()
        }
    }
    return(
        <div className={"player"}>
            <div className="time-stuff">
                <p>{gettime(songtime.current)}</p>
                <input min={0} max={songtime.duration || 0} value={songtime.current} onChange={slidehandler} type="range"/>
                <p>{gettime(songtime.duration)}</p>
            </div>
            <div className="controls">
                <FontAwesomeIcon onClick={() => {skiphandler('previous')}} className = "skip-back" size="2x" icon = {faAngleLeft}/>
                <FontAwesomeIcon onClick={songhandler} className = "play" size="2x" icon = {isplaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => {skiphandler('next')}} className = "skip-next" size="2x" icon = {faAngleRight}/>
            </div>
        </div>
    );
}

export default Player;