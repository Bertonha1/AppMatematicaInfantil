import React from "react";
import SomaExercicio from "../components/SomaExercicio";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Soma = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <div className="text-center">
        <h2 className="font-extrabold text-3xl text-blue-600">
          Exercícios de Soma
        </h2>
      </div>
      <div className="w-1/2 ">
        <SomaExercicio></SomaExercicio>
      </div>
      <div>
        <Link title="Voltar para o menu principal" to={"/"}>
          <Button variant="yellow" title="Voltar para o menu principal">
            Voltar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Soma;
