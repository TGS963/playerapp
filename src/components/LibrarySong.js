import React from "react";

const LibrarySong = ({song, songs,  setcurrent, songref, isplaying, setsong}) => {
    const libsonghandler = async () => {
        await setcurrent(song)
        if (isplaying) {
            songref.current.play()
        }
        setsong(newsong)
    }
    const newsong = songs.map((s) => {
        if (s.id === song.id) {
            return {...s, active:true}
        }
        else{
            return {...s, active:false}
        }
    })

    return(
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={libsonghandler}>
            <img src={song.cover} alt = "cover art" />
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;