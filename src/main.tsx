import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import "./globals.css";

const rootelement = document.getElementById("root");
createRoot(rootelement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
