import { useEffect, useState } from "react";
import Todo from "./Todo.jsx";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function changeTitle(id, newTitle) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  }

  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              changeTitle={changeTitle}
              changeTitle={changeTitle}
            />
          );
        })}
      </div>
    </>
  );
}

export default Todos;
