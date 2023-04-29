import DrumPad from "./DrumPad";
import HitMask from "./HitMask";
import React, { useState, useEffect } from 'react';
import "../styles/drums.css";

function Drum({ kit }) {
  const [pressedPads, setPressedPads] = useState({
    "hihat": false,
    "snare": false,
    "tom1": false,
    "tom2": false,
    "floor": false,
    "kick": false,
    "ride": false,
    "crash": false
  });

  const handleKeyDown = (e) => {
    const pad = kit.kitPads.find((pad) => pad.padKey.includes(e.key.toLowerCase()));
    if (pad) {
      setPressedPads(prevPads => ({
        ...prevPads,
        [pad.padName]: true
      }));
      const audio = new Audio(pad.padAudioSrc);
      audio.currentTime = 0.03;
      audio.play();
    }
  }

  const handleKeyUp = (e) => {
    const pad = kit.kitPads.find((pad) => pad.padKey.includes(e.key.toLowerCase()));
    if (pad) {
      setPressedPads(prevPads => ({
        ...prevPads,
        [pad.padName]: false
      }));
    }
  }

  const handleClick = (e) => {
    const pad = kit.kitPads.find((pad) => pad.padName === e.target.innerText);
    if (pad) {
      const audio = new Audio(pad.padAudioSrc);
      audio.currentTime = 0.03;
      audio.play();
    }
  }

  if (!kit) return;

  return (
    <div tabIndex={1} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onClick={handleClick} className="drum-kit">
      <HitMask pressedPads={pressedPads} />
      <img src="/img/drumkit.png" className="drum-kit-bg" />
    </div>
  )

}

export default Drum;