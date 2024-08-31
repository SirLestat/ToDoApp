import { useState } from "react";
import "./App.css";

function App() {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("task", newTaskName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default App;
