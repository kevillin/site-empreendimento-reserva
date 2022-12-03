import React from "react";
import { Route, Routes } from "react-router-dom";
import Financiamento from "./components/Financiamento";
import Visitas from "./components/Visitas";
import Construtora from "./components/Construtora";
import Documentacao from "./components/Documentacao";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/financiamento" element={<Financiamento />} />
        <Route exact path="/visitas" element={<Visitas />} />
        <Route exact path="/construtora" element={<Construtora />} />
        <Route exact path="/documentacao" element={<Documentacao />} />
      </Routes>
    </div>
  );
}

export default App;
