import React from "react";
import { BebidaRow } from "./BebidaRow";

export const BebidasTable = ({
  bebidas,
  toggleBebida,
  showCompleted = false,
}) => {
  const bebidaTableRows = (doneValue) => {
    return bebidas
      .filter((bebida) => bebida.done === doneValue)
      .map((bebida) => (
        <BebidaRow
          comida={bebida}
          key={bebida.name}
          toggleBebida={toggleBebida}
        />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Bebidas ordenadas</th>
        </tr>
      </thead>
      <tbody>{bebidaTableRows(showCompleted)}</tbody>
    </table>
  );
};
