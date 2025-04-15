import React from "react";
import SubtracaoExercicio from "../components/SubtracaoExercicio";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Subtracao = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <div className="text-center">
        <h2 className="font-extrabold text-3xl text-blue-600">
          Exercícios de Subtração
        </h2>
      </div>
      <div className="w-1/2 ">
        <SubtracaoExercicio></SubtracaoExercicio>
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

export default Subtracao;
