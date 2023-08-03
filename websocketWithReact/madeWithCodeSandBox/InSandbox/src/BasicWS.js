import React, { useState } from "react";
import useWebSocket from "react-use-websocket";
import SignalSx from "./SignalState";
import { Container, Button,TextField } from "@mui/material";


const URL = 'ws://127.0.0.1:8000';

function TextForm({ sendMessage }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log('You wrote:', text);
    sendMessage(text);
  };

  return (
    <div>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="text" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
}

function BasicWS() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    sendMessage,
    // other properties from useWebSocket
  } = useWebSocket(URL, {
    onOpen: () => {
      console.log('opened');
      setIsOpen(true);
    },
    shouldReconnect: (CloseEvent) => true,
  });

  return (
    <div>
      <h1>Send msg into TouchDesigner</h1>
      <TextForm sendMessage={sendMessage} />
    </div>
  );
}

export default BasicWS;