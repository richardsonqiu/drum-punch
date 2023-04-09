import React, { useEffect } from 'react';
import "../styles/drumPad.css";

function DrumPad(pads) {
  // console.log(props);
  // const { pads } = props;

  // useEffect(() => {
  //   document.addEventListener('keydown', detectKeyDown, true)
  // }, [])

  // const detectKeyDown = (e) => {
  //   console.log(pads);
  //   const selectedPad = pads.find((pad) => pad.padKey === e.key);

  //   const audio = new Audio(selectedPad.src);
  //   console.log("clicked: ", e.key);
  //   audio.currentTime = 0;
  //   audio.play();
  // }

  return (
    <div>
      {/* {
          pads.pad.map((pad) => (
            <button className="drumpad">
              <label key={pad.padName} className="drumpad-label">{pad.padName}</label>
            </button>
          ))
      } */}
    </div>
  )
}

export default DrumPad;