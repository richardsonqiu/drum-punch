import DrumPad from "./DrumPad";
import React from 'react';
import drumKits from "../data/drumKits";

function Drum(kit) {
  return (
    <div>
      <DrumPad kit={kit.pads[0]}/>
      <DrumPad kit={kit.pads[1]}/>
      <DrumPad kit={kit.pads[2]}/>
    </div>
  )
}

export default Drum;