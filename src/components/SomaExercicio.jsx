import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function SomaExercicio() {
  const [num1, setNum1] = useState(gerarNumero());
  const [num2, setNum2] = useState(gerarNumero());
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);

  function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1;
  }
  

  function verificarResposta() {
    const correto = num1 + num2;
    setResultado(Number(resposta) === correto);
  }

  function novaConta() {
    setNum1(gerarNumero());
    setNum2(gerarNumero());
    setResposta("");
    setResultado(null);
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-blue-700">Quanto é {num1} + {num2}?</h2>

        <input
          type="number"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          className="border border-gray-300 rounded-xl p-2 text-center text-lg"
          placeholder="Digite sua resposta"
        />

        <div className="flex gap-2 justify-center">
          <Button onClick={verificarResposta}>Verificar</Button>
          <Button onClick={novaConta}>Nova conta</Button>
        </div>

        {resultado === true && (
          <p className="text-green-600 font-bold text-lg">✅ Acertou! Muito bem!</p>
        )}
        {resultado === false && (
          <p className="text-red-500 font-bold text-lg">❌ Tente novamente!</p>
        )}
      </CardContent>
    </Card>
  );
}
