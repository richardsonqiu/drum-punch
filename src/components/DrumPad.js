import "../styles/drumPad.css"
import React from 'react';
import { useEffect } from "react";

function DrumPad({kit}) {
  let audio = new Audio("audio/snare8.wav");

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    console.log("clicked: ", e.key);

    if (e.key === " ") {
      audio.play();
    }
  }


  return (
    <div>
      <button className="drumpad">
        <label className="drumpad-label">{kit}</label>
      </button>
    </div>
  )
}

export default DrumPad;