import "./App.css";
import { Ejercicio1 } from "./components/ejercicio1";
import { Ejercicio2 } from "./components/ejercicio2";
import { Ejercicio3 } from "./components/ejercicio3";
import { Ejercicio4 } from "./components/ejercicio4";
import { Ejercicio5 } from "./components/ejercicio5";

function App() {
  return (
    <>
      <h1>Tarea</h1>
      <div className="ejercicioContainer">
        <h3>Ejercicio 1</h3>
        <Ejercicio1 />
      </div>
      <div className="ejercicioContainer">
        <h3>Ejercico 2</h3>
        <Ejercicio2 />
      </div>
      <div className="ejercicioContainer">
        <h3>Ejercico 3</h3>
        <Ejercicio3 />
      </div>
      <div className="ejercicioContainer">
        <h3>Ejercicio 4</h3>
        <Ejercicio4 />
      </div>
      <div className="ejercicioContainer">
        <h3>Ejercicio 5</h3>
        <Ejercicio5 />
      </div>
    </>
  );
}

export default App;
