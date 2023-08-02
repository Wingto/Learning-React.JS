import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BasicWS from "./BasicWS";

//import SwtichWS from "./SwtichWS";
//import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BasicWS />
  </StrictMode>
);
