import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const RanqueadaExercicio = () => {
  const [contaASerFeita, setContaASerFeita] = useState("");

  return (
    <div className="w-full">
      <Card>
        <CardContent>
          <div>
            <h3 className="text-xl font-bold text-blue-700">
              Realize o seguinte cálculo:
            </h3>
            <p>Quanto é {contaASerFeita}</p>
          </div>
          <div>
            <Button variant="emerald">Verificar!</Button>
            <Button variant="blue">Próximo cálculo!</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RanqueadaExercicio;
