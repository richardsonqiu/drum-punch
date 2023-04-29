import Timeline from "./Timeline";
import TrackLayers from "./TrackLayers";
import Track from "./Track";
import Control from "./Control";
import CurrentPositionIndicator from "./CurrentPositionIndicator";
import Time from "./Time";
import TrackControlLayers from "./TrackControlLayers";
import "../../styles/timelinePanel.css";
import { useState } from 'react';
import Draggable from "react-draggable";

function TimelinePanel() {
  const [panelWidth, setPanelWidth] = useState(200);

  function handleDrag(e) {
    setPanelWidth(e.clientX);
  }

  return (
    <div className="timelinePanel">
      <div className="leftPane" style={{ width: `${panelWidth}px` }}>
        <div className="timePanel">
          <Time></Time>
        </div>
        <div className="trackControlLayers">
          <TrackControlLayers></TrackControlLayers>
        </div>
      </div>
      <div style={{ width: '0px' }}>
        <Draggable axis="x" positionOffset={{ x: -panelWidth, y: 0 }} defaultPosition={{ x: panelWidth, y: 0 }} onDrag={handleDrag}>
          <div className="widthControl"></div>
        </Draggable>
      </div >

      <div className="rightPane">
        <div className="controls">
          <Control></Control>
        </div>
        <div>
          <Timeline></Timeline>
        </div>
        <TrackLayers></TrackLayers>
      </div>

      {/* <CurrentPositionIndicator></CurrentPositionIndicator> */}
    </div >
  )
}

export default TimelinePanel;