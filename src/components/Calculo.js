import React from "react";
import { useGlobalState } from "../context/GlobalState";
import { useState, useEffect } from "react";

function Calculo() {
  const { transactions } = useGlobalState();
  const { addTransaction } = useGlobalState();

  const subAmountComida = transactions.map(
    (transactions) => transactions.amount
  );

  const totalComidas = subAmountComida.reduce((acc, item) => (acc += item), 0);

  // ASI SE ENVIA LOS DATOS AL OCALSTORAGE
  useEffect(() => {
    localStorage.setItem("totalComidas", JSON.stringify(totalComidas));
  }, [totalComidas]);

  useEffect(() => {
    localStorage.getItem("totalComidas");
  }, [totalComidas]);

  return (
    <div>
      <b>Total en comidas: </b>

      <b className="formBebidas">$ {totalComidas} </b>
    </div>
  );
}

export default Calculo;
