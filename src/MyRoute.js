import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FormCreate from "./components/FormCreate";

const MyRoute = () => {
    return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/create" element={<FormCreate />} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default MyRoute;