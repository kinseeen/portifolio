import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import EcomStore from "./pages/EcomStore.jsx";
import Auctionarious from "./pages/Auctionarious.jsx";
import CssFrameworks from "./pages/CssFrameworks.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="ecom-store" element={<EcomStore />} />
          <Route path="auctionarious" element={<Auctionarious />} />
          <Route path="css-frameworks" element={<CssFrameworks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
