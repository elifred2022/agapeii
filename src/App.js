//import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { CapDataComida } from "./components/CapDataComida";
import { ComidasTable } from "./components/ComidasTable";
import { VisibilityControlComida } from "./components/VisibilityControlComida";
import { CapDataBebida } from "./components/CapDataBebida";
import { BebidasTable } from "./components/BebidasTable";
import { VisibilityControlBebida } from "./components/VisibilityControlBebida";

function App() {
  const [comidasItems, setComidasItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const [bebidasItems, setBebidasItems] = useState([]);
  const [showCompletedBebida, setShowCompletedBebida] = useState(false);

  // SECCION DE COMIDAS
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
          acumComida: acumComida.toString(), // asi se convierte numero en string
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

  // SECCION DE BEBIDAS

  function creatNewBebida(bebidaName, costoBebida, cantidadBebida, acumBebida) {
    console.log(bebidaName, costoBebida, cantidadBebida, acumBebida);
    if (!bebidasItems.find((bebida) => bebida.name === bebidaName)) {
      setBebidasItems([
        ...bebidasItems,
        {
          name: bebidaName,
          costoBebida: costoBebida,
          cantidadBebida: cantidadBebida,
          doneBebida: false,
          acumBebida: acumBebida.toString(),
        },
      ]);
    }

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])
  }

  const toggleBebida = (bebida) => {
    setBebidasItems(
      bebidasItems.map((t) =>
        t.name === bebida.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("bebida");
    if (data) {
      setBebidasItems(JSON.parse(data));
    }
  }, []);

  const cleanBebida = () => {
    setBebidasItems(bebidasItems.filter((bebida) => !bebida.done));
    setShowCompletedBebida(false);
  };

  useEffect(() => {
    localStorage.setItem("bebida", JSON.stringify(bebidasItems));
  }, [bebidasItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Header />
      <div className="container p-4 col-md-4 offset-md-4">
        <h2 className="yellow">Seccion de comidas</h2>
        <CapDataComida creatNewComida={creatNewComida} />
        <ComidasTable comidas={comidasItems} toggleComida={toggleComida} />

        {showCompleted === true && (
          <ComidasTable
            comidas={comidasItems}
            toggleComida={toggleComida}
            showCompleted={showCompleted}
          />
        )}

        <VisibilityControlComida
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanComida={cleanComida}
        />
      </div>

      <div className="container p-4 col-md-4 offset-md-4">
        <h2 className="yellow">Seccion de Bebidas</h2>
        <CapDataBebida creatNewBebida={creatNewBebida} />
        <BebidasTable bebidas={bebidasItems} toggleBebida={toggleBebida} />

        {showCompletedBebida === true && (
          <BebidasTable
            bebidas={bebidasItems}
            toggleBebida={toggleBebida}
            showCompletedBebida={showCompletedBebida}
          />
        )}

        <VisibilityControlBebida
          isChecked={showCompletedBebida}
          setShowCompletedBebida={(checked) => setShowCompletedBebida(checked)}
          cleanBebida={cleanBebida}
        />
      </div>
    </main>
  );
}

export default App;

/*



 

CARGA EN LSO DOS ESTADOS COMIDA Y BEBIDA, PERO AUN NO PINTA AL USUARIO

  {showCompletedBebida === true && (
          <BebidasTable
            bebidas={bebidasItems}
            toggleBebida={toggleBebida}
            showCompletedBebida={showCompletedBebida}
          />
        )}

        <VisibilityControlBebida
          isChecked={showCompletedBebida}
          setShowCompletedBebida={(checked) => setShowCompletedBebida(checked)}
          cleanBebida={cleanBebida}
        />

       
        */
