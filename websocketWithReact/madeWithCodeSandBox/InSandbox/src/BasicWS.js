import React, { useState } from "react";
import useWebSocket from "react-use-websocket";
import SignalSx from "./SignalState";
import { Button } from "@mui/material";

function BasicWS() {
  const URL = "ws://127.0.0.1:8000";;

  const [isOpen, setIsOpen] = useState(false);

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSockete,
  } = useWebSocket(URL, {
    onOpen: () => {
      console.log("opened");
      setIsOpen(true);
    },

    shouldReconnect: (CloseEvent) => true,
    //它用于判断当 WebSocket 连接关闭时是否应该尝试重新连接。
  });

  const SendMsg = () => {
    sendMessage("Hello SendMSG");
  };
  const sendJsonMsg = () =>{
      sendJsonMessage()
  }

  return (
    <div>
      <h1>Send msg via websocket into TouchDesigner</h1>
      <Button variant="text" cnClick={SendMsg}>
        Send
      </Button>
      <SignalSx color={isOpen ? 1 : 0} />
    </div>
  );
}

export default BasicWS;
