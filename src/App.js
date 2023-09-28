//import "./App.css";
import { useState, useEffect } from "react";
import { CapDataComida } from "./components/CapDataComida";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import Header from "./components/Header";
import Informes from "./components/Informes";

function App() {
  const [comidasItems, setComidasItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function creatNewComida(comidaName, comida, costoComida, acumComida) {
    console.log(comidaName, comida, costoComida, acumComida);
    if (!comidasItems.find((comida) => comida.name === comidaName)) {
      setComidasItems([
        ...comidasItems,
        {
          name: comidaName,
          comida: comida,
          costoComida: costoComida,
          done: false,
          acumComida: acumComida,
        },
      ]);
    }

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])
  }

  const toggleComida = (comida) => {
    setComidasItems(
      comidasItems.map((t) =>
        t.name === comida.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("comida");
    if (data) {
      setComidasItems(JSON.parse(data));
    }
  }, []);

  const cleanComida = () => {
    setComidasItems(comidasItems.filter((comida) => !comida.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("comida", JSON.stringify(comidasItems));
  }, [comidasItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <Header />
        <CapDataComida creatNewComida={creatNewComida} />
        <TaskTable comidas={comidasItems} toggleComida={toggleComida} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanComida={cleanComida}
        />

        {showCompleted === true && (
          <TaskTable
            comidas={comidasItems}
            toggleComida={toggleComida}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
}

export default App;
