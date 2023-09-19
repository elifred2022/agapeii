import React from "react";
import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionIn() {
  // console.log(props);

  const { addTransaction } = useGlobalState();
  const [queridoHermano, setQueridoHermano] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  //const [totalComidas, setTotalComidas] = useState();

  /************ UNA VEZ HECHO EL USEEFFECT VAMOS CON LAS BEBIDAS
  const [bebida, setBebida] = useState("");
  const [amountBebida, setAmountBebida] = useState("");
  const [cantBebida, setCantBebida] = useState("");
  const [subAmountBebida, setSubAmountBebida] = useState("");
 *****/ /////

  const onSubmit = (e) => {
    e.preventDefault(); //para que no envie el formulario a backend
    //props.addTransaction([bebida, cantBebida, amountBebida, subAmountBebida]); // se usa el props o se usa el context, estoy vieno si me qiedo con el context
    // addTransaction(bebida);
    //createNewTransaction([bebida, amountBebida, cantBebida, subAmountBebida]); // codigo del context viene de Globalstate
    //---localStorage.setItem("bebida", bebida); // para guardar en el local storage

    setQueridoHermano(""); // para limpiar el campo del input
    // localStorage.setItem("costoBebida", amountBebida);
    setDescription("");
    //localStorage.setItem("cantBebida", cantBebida);
    setAmount("");
    //localStorage.setItem("cantBebida", cantBebida);
    // setTotalComidas("");

    /******* UNA VEZ HECHO EL USEEFFECT VAMOS CON LAS BEBIDAS

    setBebida(""); // para limpiar el campo del input
    // localStorage.setItem("costoBebida", amountBebida);
    setAmountBebida("");
    //localStorage.setItem("cantBebida", cantBebida);
    setCantBebida("");
    //localStorage.setItem("subTotalBebidas", subAmountBebida); me lo lleve al BalanceBebidas.js
    //setSubAmountBebida(""); no deberia vaciarse


    ****/

    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente

      queridoHermano,
      description,
      amount: +amount,
      //totalComidas: +amount

      /*** bebida,
      cantBebida,
      amountBebida: +amountBebida,
      subAmountBebida: +amountBebida * cantBebida,

      ****/
    });

    console.log(
      queridoHermano,
      description,
      amount

      /*****
       bebida,
      amountBebida,
      cantBebida,
      subAmountBebida,
       */
    );
  };

  return (
    <div>
      <h2 className="formBebidas">Ingresar Comidas</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese Comensal"
          onChange={(e) => setQueridoHermano(e.target.value)}
          value={queridoHermano}
        />
        <input
          type="text"
          placeholder="Ingrese plato"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor del plato"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default TransactionIn;

/****
 * 
 * 
      
      <h2 className="formBebidas">Ingresar Bebidas</h2>
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

        <button>Agregar</button>
      </form>
 */
