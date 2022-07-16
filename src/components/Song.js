import React from "react";

const Song = ({currentsong}) => {
    return(
        <div className="song">
            <img src={currentsong.cover} alt = "cover art" />
            <h1>{currentsong.name}</h1>
            <h2>{currentsong.artist}</h2>
        </div>
    );
}

export default Song;