//import logo from "./logo.svg";
//import "./App.css";
import Calculo from "./components/Calculo";
import TransactionIn from "./components/TransactionIn";
import TransactionList from "./components/TransactionList";
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
