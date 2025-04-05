import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import SomaExercicio from "./components/SomaExercicio";

export default function App() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Aprendendo Matemática!</h1>

      {view === "home" && (
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <h2 className="text-2xl font-semibold mb-2">Soma</h2>
              <Button onClick={() => setView("soma")}>Começar</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <h2 className="text-2xl font-semibold mb-2">Subtração</h2>
              <Button onClick={() => setView("subtração")}>Começar</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <h2 className="text-2xl font-semibold mb-2">Multiplicação</h2>
              <Button onClick={() => setView("multiplicação")}>Começar</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <h2 className="text-2xl font-semibold mb-2">Divisão</h2>
              <Button onClick={() => setView("divisão")}>Começar</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {view !== "home" && (
        <div className="text-center flex flex-col items-center gap-4 mt-6">
          <h2 className="text-2xl mb-4 text-blue-800">
            Modo: {view.charAt(0).toUpperCase() + view.slice(1)}
          </h2>

          {/* Aqui entra o exercício específico */}
          {view === "soma" && <SomaExercicio />}

          {/* Você pode colocar os outros exercícios aqui depois:
              view === "subtração" && <SubtracaoExercicio /> etc. */}

          <Button onClick={() => setView("home")}>Voltar</Button>
        </div>
      )}
    </div>
  );
}
