import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem(
      "task",
      newTaskName
    ); /*Guarda el input y lo reinicia con un string vacio*/
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa una nueva tarea"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
};
