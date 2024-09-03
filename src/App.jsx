import { useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "Primer tarea", done: false },
    { name: "Segunda tarea", done: false },
    { name: "Tercer tarea", done: false },
  ]);

  function createNewTask(taskName) {
    
    const trimmedTaskName = taskName.trim();

    if (trimmedTaskName === "") {
      alert("¡Tarea inválida! Por favor, ingrese un nombre de tarea válido.");
      return; // Salir de la función si la tarea es inválida
    }

    /* Evalúa si ya existe una tarea con el mismo nombre */
    if (!tasksItems.find((task) => task.name === trimmedTaskName)) {
      /*Si no existe crea la tarea */
      setTasksItems([...tasksItems, { name: trimmedTaskName, done: false }]);
    } else {
      /*En caso contrario devuelve un mensaje */
      alert("¡Tarea ya registrada!");
    }
  }

  return (
    <div className="App">
      {/**El componente hijo TaskCreator recibe la funcion createNewTask como propiedad
       * para poder ser usada en su código
       */}
      <TaskCreator createNewTask={createNewTask} />

      {/*Renderiza una tabla de las tareas capturadas*/}
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
