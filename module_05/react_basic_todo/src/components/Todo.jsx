import { useState } from "react";
import Edit from "./Edit.jsx";

function Todo({ todo, deleteTodo, toggleCompleted, changeTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="m-6 flex w-2/3 flex-col rounded-3xl bg-green-100 p-4 text-center">
        {isEditing ? (
          <Edit
            changeTitle={changeTitle}
            id={todo.id}
            setIsEditing={setIsEditing}
          />
        ) : (
          <p className={todo.completed ? "p-2 line-through" : "p-2 font-bold"}>
            {todo.title} <span>id: {todo.id}</span>
          </p>
        )}
        <button onClick={() => toggleCompleted(todo.id)}>completed</button>
        <button onClick={() => deleteTodo(todo.id)}>x</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    </>
  );
}

export default Todo;
