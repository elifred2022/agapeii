import React from "react";
import { useState, useEffect } from "react";

function InformesBebida(props) {
  // la props viene del componente CapDataComida
  const [newTotal, setNewTotal] = useState("");

  return (
    <>
      <h2>Total en bebidas ordenadas</h2>

      <b className="yellow">Total bebidas: $ {props.newAcumBebida} </b>
    </>
  );
}

export default InformesBebida;
