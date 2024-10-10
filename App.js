import { useReducer } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];
    case "UPDATE_TODO":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "DELETE_TODO":
      return tasks.filter((t) => t.id !== action.taskId);
    case "DELETE_ALL_TODO":
      return [];
    default:
      return tasks;
  }
}
function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <div>
      <h1>TODO App</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

let nextId = 0;
const initialTasks = [];

export default App;
