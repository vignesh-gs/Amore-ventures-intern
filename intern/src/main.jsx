import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
