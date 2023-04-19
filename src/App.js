import React, { useState } from 'react';
import "./styles/global.css";
import Drum from "./components/Drum";
import drumKits from "./data/drumKits";
// import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [selectedKitName, setSelectedKitName] = useState("Trap");
  const handleKitChange = (e) => {
    setSelectedKitName(e.target.value);
  }

  return (
    <div className="drm">
      <h1 className="drum-nme">Drum Punch</h1>
      <label>Select a drum kit: </label>
      {/* <Dropdown variant="success" id="dropdown-basic" value={selectedKitName} onChange={handleKitChange}>
        <Dropdown.Toggle>
          Choose Kit
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            drumKits.map((kit) => (
              <Dropdown.Item>{kit.kitName}</Dropdown.Item>
            ))
          }
        </Dropdown.Menu>

      </Dropdown> */}
      <select name="kit-selection" id="kit-selection" value={selectedKitName} onChange={handleKitChange}>
        {
          drumKits.map((kit) => (
            <option key={kit.kitName} value={kit.kitName}>
              {kit.kitName}
            </option>
          ))
        }
      </select>
      <div className="drum-contain">
        <Drum kit={drumKits.find((kit) => kit.kitName === selectedKitName)} className="drum" />
      </div>

    </div>
  );
}

export default App;