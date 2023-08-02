import "./styles.css";
import React from "react";
import useWebSocket from "react-use-websocket";

// in server ip: 127.0.0.1:8000

export default function App() {
  //ws URL
  const ws_URL = "ws://127.0.0.1:8000";
  useWebSocket(ws_URL, {
    onOpen: () => {
      console.log("websockets connection！");
    }
  });

  return (
    <div className="App">
      <h1>HyCloud client switch</h1>
    </div>
  );
}
