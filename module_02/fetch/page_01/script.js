const todoListElement = document.getElementById('todo-list');
console.log('todoListElement', todoListElement);

async function fetchTodos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await res.json();
        displayTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function displayTodos(todos) {
    todoListElement.innerHTML = '';

    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.title;
        todoItem.classList.add('mb-2');
        if (todo.completed) {
            todoItem.classList.add('line-through', 'text-green-500');
        } else {
            todoItem.classList.add('text-red-500');
        }
        todoListElement.appendChild(todoItem);
    });
}

fetchTodos();
