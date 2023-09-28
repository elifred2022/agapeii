import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionIn() {
  // ACA LA FUNCION PARA RECUPERAR LOS DATOS DEL LOCALSTORAGE Y SE COLOCA EL NOMBRE DE LA FUNCION obtenerRegistros EN EL STATE DE ARREGLO const [saveData, setSaveData] = useState(obtenerRegistros());
  const obtenerRegistros = () => {
    var datos = localStorage.getItem("saveData");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };
  ////////////////////////////////////////////////////////////////////

  const { transactions } = useGlobalState();
  const { addTransaction } = useGlobalState();

  const [queridoHermano, setQueridoHermano] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  // const [totalComidas, setTotalComida] = useState("");

  const [saveData, setSaveData] = useState(obtenerRegistros()); // este para hacer un solo arreglo con los demas variables y cargarlos al localstorge con useeffect

  const subAmountComida = transactions.map(
    (transactions) => transactions.amount
  );

  const totalComidas = subAmountComida.reduce((acc, item) => (acc += item), 0);

  /************ UNA VEZ HECHO EL USEEFFECT VAMOS CON LAS BEBIDAS
  const [bebida, setBebida] = useState("");
  const [amountBebida, setAmountBebida] = useState("");
  const [cantBebida, setCantBebida] = useState("");
  const [subAmountBebida, setSubAmountBebida] = useState("");
 *****/ /////

  const onSubmit = (e) => {
    e.preventDefault(); //para que no envie el formulario a backend
    var miObjeto = { queridoHermano, description, amount, totalComidas };
    setSaveData([...saveData, miObjeto]);

    //props.addTransaction([bebida, cantBebida, amountBebida, subAmountBebida]); // se usa el props o se usa el context, estoy vieno si me qiedo con el context
    // addTransaction(bebida);
    //createNewTransaction([bebida, amountBebida, cantBebida, subAmountBebida]); // codigo del context viene de Globalstate
    //---localStorage.setItem("bebida", bebida); // para guardar en el local storage

    setQueridoHermano(""); // para limpiar el campo del input
    //localStorage.setItem("comensal", queridoHermano);
    // alert("guardado");

    setDescription("");
    //localStorage.setItem("plato", description);
    // alert("guardado");

    setAmount("");
    //localStorage.setItem("valorPlato", amount);
    //alert("guardado");

    // setSaveData(true);

    //setTotalComida("");
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
      //totalComidas: +amount,

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

  // ASI SE ENVIA LOS DATOS AL OCALSTORAGE
  useEffect(() => {
    localStorage.setItem("saveData", JSON.stringify(saveData));
  }, [saveData]);
  //////////////////////////////////////

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
      <div>
        <b>Total en comidas: </b>

        <b className="formBebidas">$ {totalComidas}</b>
      </div>
    </div>
  );
}

export default TransactionIn;

// https://www.youtube.com/watch?v=gSSxNt38Jlc 8:50

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
