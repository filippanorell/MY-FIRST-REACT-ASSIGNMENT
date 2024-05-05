import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
import "./index.css";

const App = () => {
  return (
      <BrowserRouter>
      <Header />   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
