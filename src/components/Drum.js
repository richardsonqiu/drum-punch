import DrumPad from "./DrumPad";
import React, { useEffect } from 'react';

function Drum({ kit }) {
  const handleKeyDown = (e) => {
    console.log(e);
    const pad = kit.kitPads.find((pad) => pad.padKey.includes(e.key));
    if (pad) {
      const audio = new Audio(pad.padAudioSrc);
      console.log(pad.padAudioSrc);
      audio.currentTime = 0.05;
      audio.play();
    }
  }

  if (!kit) return;

  return (
    <div style={{backgroundColor: "#555"}} tabIndex={0} onKeyDown={handleKeyDown}>
      {kit.kitName}
      {
        kit.kitPads.map((pad) => (
          <>
            <h1>{pad.padName}</h1>
            <DrumPad key={pad.padName} pad={pad.padName}/>
          </>
          
        ))
      }
    </div>
  )
}

export default Drum;