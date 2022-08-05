import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { RefreshContextProvider } from "./context/RefreshContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RefreshContextProvider>
      <App />
    </RefreshContextProvider>
  </React.StrictMode>
);
