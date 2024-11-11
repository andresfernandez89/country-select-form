import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error(
    "No API_BASE_URL environment variable found. Please refer to README.md for more info.",
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
