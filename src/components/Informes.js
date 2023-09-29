import React from "react";
import { useState, useEffect } from "react";

function Informes(props) {
  // la props viene del componente CapDataComida
  const [newTotal, setNewTotal] = useState("");

  return (
    <>
      <h2>Total en comidas ordenadas</h2>

      <b className="yellow">Total Comidas: $ {props.newAcumComida} </b>
    </>
  );
}

export default Informes;
