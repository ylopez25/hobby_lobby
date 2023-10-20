import React from "react";
import "../components/Focus.css";
// import Timer from "../components/Timer.js";
import Timer from "../components/Timer";
import Settings from "../components/Settings";
import {useState} from "react";
import SettingsContext from "../components/SettingsContext";

export default function Focus() {
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
  
    return (
      <main className = "main">
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    );
}
