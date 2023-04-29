import React, { useState } from 'react';
import "./styles/global.css";
import Drum from "./components/Drum";
import TimelinePanel from "./components/TimelinePanel/TimelinePanel";
import drumKits from "./data/drumKits";
// import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [selectedKitName, setSelectedKitName] = useState("Trap");
  const handleKitChange = (e) => {
    setSelectedKitName(e.target.value);
  }

  return (
    <div className="drum">
      <div className="top-menu">
        <h1 className="drum-name">Drum Punch</h1>
        <div className="select-wrapper">
          <label>Select a drum kit: </label>
          <select name="kit-selection" id="kit-selection" value={selectedKitName} onChange={handleKitChange}>
            {
              drumKits.map((kit) => (
                <option key={kit.kitName} value={kit.kitName}>
                  {kit.kitName}
                </option>
              ))
            }
          </select>
        </div>

      </div>

      <div className="drum-container">
        <Drum kit={drumKits.find((kit) => kit.kitName === selectedKitName)} className="drum" />
      </div>

      <TimelinePanel></TimelinePanel>

    </div>
  );
}

export default App;