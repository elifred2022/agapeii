import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ comidas, toggleComida, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return comidas
      .filter((comida) => comida.done === doneValue)
      .map((comida) => (
        <TaskRow
          comida={comida}
          key={comida.name}
          toggleComida={toggleComida}
        />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Comidas ordenadas</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
