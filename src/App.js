import React, { useState } from 'react';
import "./styles/global.css";
import Drum from "./components/Drum";
import drumKits from "./data/drumKits";

function App() {
  const [selectedKitName, setSelectedKitName] = useState(data[0].name);
  const handleKitChange = (e) => {
    setSelectedKitName(e.target.value);
  }

  return (
    <div>
      <h1>Drum Punch</h1>
      <label>Select a drum kit:</label>
      <select name="" id="" value={selectedKitName} onChange={handleKitChange}>
        {drumKits.map((kit) => {
          <option key={kit.name} value={kit.name}>
            {kit.name}
          </option>
        })}
      </select>
      <Drum kit={drumKits.find((kit) => kit.name === selectedKitName)}/>
    </div>
  );
}

export default App;
