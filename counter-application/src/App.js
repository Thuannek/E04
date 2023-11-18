import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Todoapp from "./todoapp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<Todoapp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;