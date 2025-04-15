import React, { useState } from "react";
import RanqueadaExercicio from "../components/RanqueadaExercicio";
const Ranqueada = () => {
  const [pontos, setPontos] = useState(0);
  const [tempoMedio, setTempoMedio] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className="flex flex-col bg-white p-4 rounded-md text-center text-blue-600 w-1/2">
        <h2 className="font-bold text-3xl">Ranqueada!</h2>
      </div>
      <div className="flex flex-col bg-white p-4 rounded-md text-start  text-blue-600 w-1/2">
        <h3 className="font-bold text-2xl">Pontos: {pontos}</h3>
        <h3 className="font-bold text-2xl">Tempo médio: {tempoMedio}</h3>
      </div>

      <div className="w-1/2">
        <RanqueadaExercicio></RanqueadaExercicio>
      </div>
    </div>
  );
};

export default Ranqueada;
