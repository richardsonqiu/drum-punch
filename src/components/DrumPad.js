import React, { useEffect } from 'react';
// import "../styles/drumPad.css";
import "../styles/drums.css";

function DrumPad({ pad }) {

  return (
    <>
      <label className="drum-pad-label">{pad.padName}</label>
    </>
  )
}

export default DrumPad;