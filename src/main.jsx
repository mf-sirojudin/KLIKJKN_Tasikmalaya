import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/typography.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>
);