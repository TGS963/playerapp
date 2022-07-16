import React, { useState, useRef } from "react";
//components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
//styles
import "./styles/app.scss"
//dataset
import data from "./data"

function App() {
  //reference
  const songref = useRef(null);
  const [song, setsong] = useState(data());
  const [current, setcurrent] = useState(song[0]);
  const [isplaying, setisplaying] = useState(false);
  const [songtime, setsongtime] = useState({current: 0, duration: 0});
  const [libopen, setlibopen] = useState(false);

  const timehandler = (e) => {
    setsongtime({...songtime, current: e.target.currentTime, duration: e.target.duration});
  }

  const endhandler = async () => {
    let currentindex = song.findIndex((s) => s.id === current.id)
    await setcurrent(song[(currentindex + 1) % song.length])
    if (isplaying) {
      songref.current.play()
    }
  }

  return (
    <div className={`App ${libopen ? 'libactive' : ''}`}>
      <Nav libopen = {libopen} setlibopen = {setlibopen}/>
      <Song currentsong = {current}/>
      <Player isplaying = {isplaying} setisplaying = {setisplaying} songref = {songref} songtime = {songtime} setsongtime = {setsongtime} songs = {song} setcurrent = {setcurrent} current = {current} setsong = {setsong}/>
      <Library songs = {song} setcurrent = {setcurrent} songref = {songref} isplaying = {isplaying} setsong={setsong} libopen = {libopen}/>
      <audio onTimeUpdate = {timehandler} onLoadedMetadata = {timehandler} ref={songref} src={current.audio} onEnded = {endhandler} />
    </div>
  );
}

export default App;
