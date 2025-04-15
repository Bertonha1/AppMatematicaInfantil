import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Divisao from "./pages/Divisao";
import Multiplicacao from "./pages/Multiplicacao";
import Soma from "./pages/Soma";
import Subtracao from "./pages/Subtracao";
import Ranqueada from "./pages/Ranqueada";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 flex flex-col items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/divisao" element={<Divisao></Divisao>}></Route>
        <Route
          path="/multiplicacao"
          element={<Multiplicacao></Multiplicacao>}
        ></Route>
        <Route path="/soma" element={<Soma></Soma>}></Route>
        <Route path="/subtracao" element={<Subtracao></Subtracao>}></Route>
        <Route path="/ranqueada" element={<Ranqueada />}></Route>
      </Routes>
    </div>
  );
}
