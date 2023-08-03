import React, { useState } from "react";
import useWebSocket from "react-use-websocket";
import { Box, ThemeProvider } from "@mui/system";

export default function SignalSx({ color }) {
  let signalColor;
  if (color === 0) {
    signalColor = "#FF0000"; //RED
  } else if (color === 1) {
    signalColor = "#00FF00"; // GREEN
  } else {
    signalColor = "#007FFF"; // BLUE
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: signalColor,
            dark: "#0059B2",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 20,
          height: 20,
          bgcolor: "primary.main",
          borderRadius: "50%",
        }}
      />
    </ThemeProvider>
  );
}
