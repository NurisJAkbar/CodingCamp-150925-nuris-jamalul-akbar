

let todos = [];


document.addEventListener('DOMContentLoaded', () => {
    displayTodos(todos);
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (validateInput(todoInput.value, todoDate.value)) {
        const formTodo = { Task: todoInput.value, Date: todoDate.value };
        todos.push(formTodo);

        displayTodos(todos); 
        todoInput.value = '';
        todoDate.value = '';
        document.getElementById('filter-input').value = ''; 
    }
}


function displayTodos(todosToDisplay) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";    

    todosToDisplay.forEach((todo, index) => {
        const originalIndex = todos.findIndex(originalTodo => originalTodo === todo);

        todoList.innerHTML +=
            `<li class="border-b border-gray-300 py-2 flex justify-between items-center">
                <div>
                    ${todo.Task} - <span class="text-sm text-gray-500">${todo.Date}</span>
                </div>
                <button onclick="deleteTodo(${originalIndex})" class="bg-red-500 text-white rounded-md px-2 py-1 text-sm">Hapus</button>
            </li>`;
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
 
    filterTodo();
}

function filterTodo() {
    const filterInput = document.getElementById('filter-input');
    const filterText = filterInput.value.toLowerCase();


    const filteredTodos = todos.filter(todo => {
        return todo.Task.toLowerCase().includes(filterText);
    });


    displayTodos(filteredTodos);
}

function validateInput(todo, date) {
    if (todo.trim() === '' || date.trim() === '') {
        alert('Please enter both a todo and a date.');
        return false;
    }
    return true;
}