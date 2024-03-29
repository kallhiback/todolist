const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoText; 

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-todo');
    deleteButton.textContent = 'Удалить';

    deleteButton.addEventListener('click', deleteTodo);

    newTodo.appendChild(deleteButton);
    newTodo.appendChild(document.createTextNode(todoText));

    newTodo.addEventListener('click', toggleTodoStatus);

    todoList.appendChild(newTodo);

    todoInput.value = '';
  }
}

function deleteTodo(event) {
  const todoItem = event.target.parentNode;
  todoList.removeChild(todoItem);
}

function toggleTodoStatus(event) {
  const todo = event.target;
  todo.classList.toggle('done');
}
