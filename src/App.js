//import logo from "./logo.svg";
//import "./App.css";
import Bebidas from "./components/Bebidas";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <p>Agape</p>
        </header>
        <Bebidas />
      </div>
    </GlobalProvider>
  );
}

export default App;
