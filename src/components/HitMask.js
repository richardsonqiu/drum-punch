import React, { useEffect } from 'react';
// import "../styles/drumPad.css";
// import "../styles/drums.css";
import "../styles/hitMask.css";

function HitMask({ pressedPads }) {
  return (
    // <svg className="hitMask" xmlns="http://www.w3.org/2000/svg" width="1395" height="844" viewBox="0 0 1395 844">
    <svg className="hitMask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1395 844">
      {pressedPads["snare"] && <ellipse id="snare" className="snare" cx="476.5" cy="581.5" rx="122.5" ry="121.5" />}
      {pressedPads["hihat"] && <ellipse id="hihat" className="hihat" cx="230" cy="592" rx="144" ry="148" />}
      {pressedPads["tom1"] && <circle id="tom1" className="tom1" cx="620" cy="352" r="92" />}
      {pressedPads["tom2"] && <circle id="tom2" className="tom2" cx="859.5" cy="373.5" r="113.5" />}
      {pressedPads["floor"] && <circle id="floor" className="floor-tom" cx="1057" cy="566" r="144" />}
      {pressedPads["ride"] && <ellipse id="ride" className="ride" cx="1147" cy="326" rx="174" ry="183" ss />}
      {pressedPads["crash"] && <ellipse id="crash" className="crash" cx="370" cy="309" rx="172" ry="151" />}
      {pressedPads["kick"] && <ellipse id="kick" className="kick" cx="733.5" cy="107.5" rx="184.5" ry="10.5" />
      }
    </svg>
  )
}

export default HitMask;