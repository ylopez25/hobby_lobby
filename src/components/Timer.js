import React from "react";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Timer() {
  const percentage = 66;
  return (
    <div 
    style={{ width: 200, height: 200 }}>
      Timer
      <CircularProgressbar
        value={percentage}
        // text={minutes + ':' + seconds}
        styles={buildStyles({
        textColor:'#fff',
        // pathColor:mode === 'work' ? red : green,
        tailColor:'rgba(255,255,255,.2)',
      })} />
    </div>
  );
}
