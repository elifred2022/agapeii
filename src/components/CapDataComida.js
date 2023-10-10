import { useState } from "react";
import InformesComida from "./InformesComida";

export const CapDataComida = (props) => {
  // console.log(props); comento para q no salga en consola
  const [newComensal, setNewComensal] = useState("");
  const [newComida, setNewComida] = useState("");
  const [newCostoComida, setNewCostoComida] = useState(""); // estado para ir almacenando el monto ingresado

  // Estado para mantener la suma total
  const [newAcumComida, setNewAcumComida] = useState(0); // estado para ir sumando los montos ingresados

  // Estado para almacenar el monto ingresado en el formulario
  //const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewComida(newComensal, newComida, newCostoComida, newAcumComida);

    // localStorage.setItem("task", newTasks);
    setNewComensal("");
    setNewComida("");

    // Convierte el monto ingresado a un número
    const montoNumerico = parseFloat(newCostoComida);

    // Verifica si el monto es un número válido
    if (!isNaN(montoNumerico)) {
      // Suma el monto al total actual
      setNewAcumComida(newAcumComida + montoNumerico);

      // Limpia el campo de entrada
      setNewCostoComida("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Ingrese comensal"
            onChange={(e) => setNewComensal(e.target.value)}
            value={newComensal}
            className="form-control"
          ></input>
          <input
            type="text"
            placeholder="Ingrese comida"
            onChange={(e) => setNewComida(e.target.value)}
            value={newComida}
            className="form-control"
          ></input>
          <input
            type="number"
            placeholder="Ingrese costo comida"
            onChange={(e) => setNewCostoComida(e.target.value)}
            value={newCostoComida}
            className="form-control"
          ></input>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Agregar</button>
        </div>
      </form>
      <InformesComida newAcumComida={newAcumComida} />
    </>
  );
};
