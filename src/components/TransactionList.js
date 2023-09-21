import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import Calculo from "./Calculo";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  const [tasksItems, setTasksItems] = useState([]);

  /* useEffect(() => {
    let data = localStorage.getItem("saveData");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []); */

  return (
    <div>
      <table>
        <thead className="formBebidas">
          <tr>
            <th>Coemnsal</th>
            <th> ---- </th>
            <th>Plato</th>
            <th> ---- </th>
            <th>Valor del plato</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions) => (
            <tr className="formBebidas" key={transactions.id}>
              <td>
                <b>{transactions.queridoHermano}</b>
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.description}</b>{" "}
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.amount}</b>
              </td>
              <td> ------ </td>

              <td>
                <button
                  onClick={() => {
                    deleteTransaction(transactions.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Calculo />
    </div>
  );
}

export default TransactionList;

// https://www.youtube.com/watch?v=XUHYQEJhVzs

/*
 <table>
        <thead className="formBebidas">
          <tr>
            <th>Bebida</th>
            <th> ---- </th>
            <th>Costo unit</th>
            <th> ---- </th>
            <th>Cantidad</th>
            <th> ---- </th>
            <th>Subtotal bebida</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions) => (
            <tr className="formBebidas" key={transactions.id}>
              <td>
                <b>{transactions.bebida}</b>
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.amountBebida}</b>{" "}
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.cantBebida}</b>
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.subAmountBebida}</b>{" "}
              </td>
              <td> ------ </td>
              <td>
                <button
                  onClick={() => {
                    deleteTransaction(transactions.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
