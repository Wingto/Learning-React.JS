import "./styles.css";
import React, { useState } from "react";
import useWebSocket from "react-use-websocket";
//import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import SignalSx from "./SignalState";

export default function SwtichApp() {
  const [state, setState] = useState("NO");
  // 默认一个数值给钩子

  // 按键触发的一个方法： 变更字符和触发ws的连接方法
  // 变更字符
  function handleToggle() {
    setState(!state);
  }
  //websocket的连接和断开
  const WS_url = "ws://127.0.0.1:8000";
  const connection = useWebSocket(state ? WS_url : null, {
    onOpen: () => {
      console.log("connected!");
    },
    onClose: () => {
      console.log("disconnect!");
    },
  });

  //const sendDataToTouchDesigner = () => {
  //  const dataToSend = JSON.stringify({
  //    message: "Hello TouchDesigner!",
  //  });
  //  sendMessage(dataToSend);
  //};
  // set toggle label
  
  //<Button variant="contained" onClick={sendDataToTouchDesigner}>
  //SendMSG
  //</Button>

  return (
    <div>
      <h1>Hello Hycloud</h1>
      <Switch variant="contained" onClick={handleToggle}>
        {state ? "NO" : "OFF"}
      </Switch>

      <SignalSx />
    </div>
  );
}
