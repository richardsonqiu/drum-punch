import Draggable from "react-draggable";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import "../../styles/track.css";
import "../../styles/timelinePanel.css";


function Track() {
  const [curPosition, setCurPosition] = useState(0);
  const [audioFiles, setAudioFiles] = useState([]);

  const handleDrop = (acceptableFiles) => {
    setAudioFiles([...audioFiles, ...acceptableFiles]);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "audio/*",
  })

  const PositionCursor = ({ curPosition }) => {
    return (
      <Draggable axis="x" bounds="parent" position={{ x: curPosition, y: 0 }}>
        <div style={{ position: "absolute", height: "100%", width: 5, backgroundColor: "red" }} />
      </Draggable>
    )
  }

  return (
    <div className="track">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop</p>
        ) : (
          // <p>Drag 'n' drop some audio files here or click to select files</p>
          <p>track</p>
        )}
      </div>
    </div>
  )


}

export default Track;