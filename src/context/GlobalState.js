import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /*
  function createNewTransaction(transactions) {
    console.log(transactions);
    if (
      !transactions.find((transactions) => transactions.name === transactions)
    ) {
      dispatch([...transactions, { name: transactions, done: false }]);
    }
    // dispatch([...state, { name: state, done: false }]); //este codigo me bloquea el sistema
    // alert(transactions);
  } */

  // funcion para añadir, ver codigos en el AppReducer
  const addTransaction = (transactions) => {
    //alert(transactions);

    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions, //transactions
    });
  };

  // funcion para eliminar. ver codigos en el AppReducer
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,

        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
