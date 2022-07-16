import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setcurrent, songref, isplaying, setsong, libopen}) => {
    return(
        <div className={`library ${libopen ? 'libopen' : ''}`}>
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong song = {song} songs = {songs} setcurrent = {setcurrent} songref = {songref} isplaying = {isplaying} setsong={setsong}/>
                ))}
            </div>
        </div>
    )
}

export default Library;