import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="mx-auto min-w-44 max-w-48">
        <img src={"../../../public/logo.svg"} alt="logo"></img>
      </div>
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Aprendendo Matemática!
      </h1>
      <div className="mb-4">
        <Card>
          <CardContent>
            <h2 className="font-bold text-3xl">Jogar Ranqueada!</h2>
            <Link to={"/ranqueada"}>
              <Button>Jogar!</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-semibold mb-2">Soma</h2>
            <Link to={"/soma"}>
              <Button>Começar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-semibold mb-2">Subtração</h2>
            <Link to={"/subtracao"}>
              <Button>Começar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-semibold mb-2">Multiplicação</h2>
            <Link to={"/multiplicacao"}>
              <Button>Começar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-semibold mb-2">Divisão</h2>
            <Link to={"/divisao"}>
              <Button>Começar</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
