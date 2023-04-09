import DrumPad from "./DrumPad";
import React, { useEffect } from 'react';

function Drum(props) {
  const { kit } = props;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    const pad = kit.kitPads.find((pad) => pad.padKey === e.key);
    console.log(pad);
    if (pad) {
      const audio = new Audio(pad.padAudioSrc);
      console.log(pad.padAudioSrc);
      audio.currentTime = 0;
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