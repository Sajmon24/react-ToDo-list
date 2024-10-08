import { TodoItem } from "./TodoItem";

export function TodoList({ tasks, dispatch }) {
  return (
    <>
      <TodoItem tasks={tasks} dispatch={dispatch} />
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_ALL_TODO",
          })
        }
      >
        Delete all
      </button>
    </>
  );
}
