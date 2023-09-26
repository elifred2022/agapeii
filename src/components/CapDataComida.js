import { useState } from "react";

export const CapDataComida = (props) => {
  // console.log(props); comento para q no salga en consola
  const [newTasks, setNewTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewTask(newTasks);
    // localStorage.setItem("task", newTasks);
    setNewTasks("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="ingrese nueva tarea"
          onChange={(e) => setNewTasks(e.target.value)}
          value={newTasks}
          className="form-control"
        ></input>
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Agregar</button>
      </div>
    </form>
  );
};
