import { useState } from "react";

export function TodoItem({ tasks, dispatch }) {
  const [edit, setEdit] = useState({
    isEditing: null,
    editedText: "",
  });

  // Edit button
  const handleEdit = (task) => {
    setEdit({ isEditing: task.id, editedText: task.text });
  };

  // Save button
  const handleSave = (task) => {
    dispatch({
      type: "UPDATE_TODO",
      task: { ...task, text: edit.editedText },
    });
    setEdit({ isEditing: null, editedText: "" });
  };

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          {edit.isEditing === task.id ? (
            // If editing
            <input
              type="text"
              value={edit.editedText}
              onChange={(e) => setEdit({ ...edit, editedText: e.target.value })}
            />
          ) : (
            // If not editing
            <>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() =>
                  dispatch({
                    type: "UPDATE_TODO",
                    task: { ...task, done: !task.done },
                  })
                }
              />
              {task.text}
            </>
          )}

          {edit.isEditing === task.id ? (
            // Display Save button during editing
            <button onClick={() => handleSave(task)}>Save</button>
          ) : (
            // Display Edit button when not editing
            <button onClick={() => handleEdit(task)}>Edit</button>
          )}

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                taskId: task.id,
              })
            }
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
