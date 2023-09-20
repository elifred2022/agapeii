//import logo from "./logo.svg";
//import "./App.css";
import { useState, useEffect } from "react";
import TransactionIn from "./components/TransactionIn";
import TransactionList from "./components/TransactionList";
import Calculo from "./components/Calculo";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <p>Agape</p>
        </header>
        <TransactionIn />
        <TransactionList />
        <Calculo />
      </div>
    </GlobalProvider>
  );
}

export default App;

/* TRATANDO DE HACER EL LOCALSTORAGE
const [transactionsItems, setTransactionsItems] = useState([]);

  function createNewTransaction(transactionName) {
    console.log(transactionName);
    if (
      !transactionsItems.find(
        (transaction) => transaction.name === transactionName
      )
    ) {
      setTransactionsItems([...transactionsItems, { name: transactionName }]);
    }
  }

  const toggleTransaction = (transaction) => {
    setTransactionsItems(
      transactionsItems.map((t) =>
        t.name === transaction.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("transaction");
    if (data) {
      setTransactionsItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transactionsItems));
  }, [transactionsItems]);


  function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <p>Agape</p>
        </header>
        <TransactionIn createNewTransaction={createNewTransaction} />
        <TransactionList
          transactions={transactionsItems}
          toggleTransaction={toggleTransaction}
        />
        <Calculo />
      </div>
    </GlobalProvider>
  );
}

  */
