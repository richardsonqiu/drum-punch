import DrumPad from "./DrumPad";
import React, { useEffect } from 'react';

function Drum({ kit }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [kit]);

  const handleKeyDown = (e) => {
    const pad = kit.kitPads.find((pad) => pad.padKey.includes(e.key));
    if (pad) {
      const audio = new Audio(pad.padAudioSrc);
      console.log(pad.padAudioSrc);
      audio.currentTime = 0.05;
      audio.play()
    }
  }

  return (
    <div>
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