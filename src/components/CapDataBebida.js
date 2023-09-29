import { useState } from "react";
import Informes from "./Informes";

export const CapDataBebida = (props) => {
  // console.log(props); comento para q no salga en consola
  const [newBebida, setNewBebida] = useState("");
  const [newCostoBebida, setNewCostoBebida] = useState(""); // estado para ir almacenando el monto ingresado
  const [newCantidadBebida, setNewCantidadBebida] = useState("");

  // Estado para mantener la suma total
  const [newAcumBebida, setNewAcumBebida] = useState(0); // estado para ir sumando los montos ingresados

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewBebida(
      newBebida,
      newCostoBebida,
      newCantidadBebida,
      newAcumBebida
    );

    // localStorage.setItem("task", newTasks);
    setNewBebida("");
    setNewCostoBebida("");
    setNewCantidadBebida("");

    // Convierte el monto ingresado a un número
    const montoNumerico = parseFloat(newCostoBebida);

    // Verifica si el monto es un número válido
    if (!isNaN(montoNumerico)) {
      // Suma el monto al total actual
      setNewAcumBebida(newAcumBebida + montoNumerico);

      // Limpia el campo de entrada
      setNewCostoBebida("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Ingrese bebida"
            onChange={(e) => setNewBebida(e.target.value)}
            value={newBebida}
            className="form-control"
          ></input>
          <input
            type="text"
            placeholder="Ingrese costo bebida"
            onChange={(e) => setNewCostoBebida(e.target.value)}
            value={newCostoBebida}
            className="form-control"
          ></input>
          <input
            type="number"
            placeholder="Ingrese cantidad bebida"
            onChange={(e) => setNewCantidadBebida(e.target.value)}
            value={newCantidadBebida}
            className="form-control"
          ></input>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Agregar</button>
        </div>
      </form>
    </>
  );
};
