let todos = [];


function addTodo(){          
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (validateInput(todoInput.value, todoDate.value)) {
          
         const formTodo = { Task : todoInput.value, Date: todoDate.value };
            todos.push(formTodo);
        
            displayTodos();
            todoInput.value = '';
            todoDate.value = '';
        }
    }

function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ""; // Clear existing list   


    todos.forEach((todo, _) => {
        todoList.innerHTML +=            
            `<li class="border-b border-gray-300 py-2"> ${todo.Task} - 
            <span class="text-sm text-gray-500">${todo.Date}</span></li>`    
;
    }); 
}
function deleteTodo() {
}
function filterTodo() {}
function validateInput(todo,date) {
    if (todo.trim() === '' || date.trim() === '') {
        alert('Please enter both a todo and a date.');
        return false;
    }
    return true;
}
