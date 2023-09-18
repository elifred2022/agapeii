import React from "react";
import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function Bebidas() {
  // console.log(props);

  const { addTransaction } = useGlobalState();
  const [bebida, setBebida] = useState("");
  const [amountBebida, setAmountBebida] = useState("");
  const [cantBebida, setCantBebida] = useState("");
  const [subAmountBebida, setSubAmountBebida] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //para que no envie el formulario a backend
    //props.addTransaction([bebida, cantBebida, amountBebida, subAmountBebida]); // se usa el props o se usa el context, estoy vieno si me qiedo con el context
    // addTransaction(bebida);
    //createNewTransaction([bebida, amountBebida, cantBebida, subAmountBebida]); // codigo del context viene de Globalstate
    //---localStorage.setItem("bebida", bebida); // para guardar en el local storage
    setBebida(""); // para limpiar el campo del input
    // localStorage.setItem("costoBebida", amountBebida);
    setAmountBebida("");
    //localStorage.setItem("cantBebida", cantBebida);
    setCantBebida("");
    //localStorage.setItem("subTotalBebidas", subAmountBebida); me lo lleve al BalanceBebidas.js
    //setSubAmountBebida(""); no deberia vaciarse

    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente
      bebida,
      cantBebida,
      amountBebida: +amountBebida,
      subAmountBebida: +amountBebida * cantBebida,
    });

    console.log(bebida, amountBebida, cantBebida, subAmountBebida);
  };

  return (
    <div>
      <form className="formIngreso__bebida" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese bebida"
          onChange={(e) => setBebida(e.target.value)}
          value={bebida} // para ir limpiando el input mientras se va cargando datos
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor de bebida"
          onChange={(e) => setAmountBebida(e.target.value)}
          value={amountBebida}
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingrese cantidad bebidas"
          onChange={(e) => setCantBebida(e.target.value)}
          value={cantBebida}
        />

        <button>Cargar</button>
      </form>
    </div>
  );
}

export default Bebidas;
