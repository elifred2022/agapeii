import { useState } from "react";

export const CapDataComida = (props) => {
  // console.log(props); comento para q no salga en consola
  const [newComensal, setNewComensal] = useState("");
  const [newComida, setNewComida] = useState("");
  const [newCostoComida, setNewCostoComida] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewTask(newComensal, newComida, newCostoComida);
    // localStorage.setItem("task", newTasks);
    setNewComensal("");
    setNewComida("");
    setNewCostoComida("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="ingrese comensal"
          onChange={(e) => setNewComensal(e.target.value)}
          value={newComensal}
          className="form-control"
        ></input>
        <input
          type="text"
          placeholder="ingrese comida"
          onChange={(e) => setNewComida(e.target.value)}
          value={newComida}
          className="form-control"
        ></input>
        <input
          type="number"
          placeholder="ingrese costo comida"
          onChange={(e) => setNewCostoComida(e.target.value)}
          value={newCostoComida}
          className="form-control"
        ></input>
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Agregar</button>
      </div>
    </form>
  );
};
