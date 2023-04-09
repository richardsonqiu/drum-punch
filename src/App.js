import React, { useState } from 'react';
import "./styles/global.css";
import Drum from "./components/Drum";
import drumKits from "./data/drumKits";

function App() {
  const [selectedKitName, setSelectedKitName] = useState(drumKits.find((kit) => kit.kitName === 'Original'));
  const handleKitChange = (e) => {
    setSelectedKitName(e.target.value);
  }

  return (
    <div>
      <h1>Drum Punch</h1>
      <label>Select a drum kit: </label>
      <select name="" id="" value={selectedKitName} onChange={handleKitChange}>
        {
          drumKits.map((kit) => (
            <option key={kit.kitName} value={kit.kitName}>
              {kit.kitName}
            </option>
          ))
        }
      </select>
      <Drum kit={drumKits.find((kit) => kit.kitName === selectedKitName.kitName)}/>
    </div>
  );
}

export default App;