import React from "react";
import { useGlobalState } from "../context/GlobalState";
import { useState } from "react";

function Calculo() {
  const { transactions } = useGlobalState();
  const { addTransaction } = useGlobalState();
  // const [resultadoBebidasB, setResultadoBebidasB] = useState();

  // localStorage.setItem("resultadoBebidasB", resultadoBebidasB); // para guardar en el local storage
  //setResultadoBebidasB(""); // para limpiar el campo del input

  const subAmountComida = transactions.map(
    (transactions) => transactions.amount
  );

  const totalComidas = subAmountComida.reduce((acc, item) => (acc += item), 0);

  const resultadoComidas = totalComidas;

  //const resultadoBebidasB = resultadoBebidas;

  //  props.createNewBebida([resultadoBebidasB, subAmountBebida]);
  //addTransaction([resultadoBebidasB]); // esto viene del context globalstate
  localStorage.setItem("totalComidas", resultadoComidas);

  // resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <div>
      <b>Total en comidas: </b>

      <b className="formBebidas">$ {resultadoComidas} </b>
    </div>
  );
}

export default Calculo;
