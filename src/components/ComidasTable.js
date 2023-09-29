import React from "react";
import { ComidaRow } from "./ComidaRow";

export const ComidasTable = ({
  comidas,
  toggleComida,
  showCompleted = false,
}) => {
  const comidaTableRows = (doneValue) => {
    return comidas
      .filter((comida) => comida.done === doneValue)
      .map((comida) => (
        <ComidaRow
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
      <tbody>{comidaTableRows(showCompleted)}</tbody>
    </table>
  );
};
