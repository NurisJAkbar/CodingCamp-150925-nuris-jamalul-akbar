// js/script.js

let todos = [];

// Panggil displayTodos saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayTodos(todos);
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (validateInput(todoInput.value, todoDate.value)) {
        const formTodo = { Task: todoInput.value, Date: todoDate.value };
        todos.push(formTodo);

        displayTodos(todos); // Tampilkan semua todos setelah menambah
        todoInput.value = '';
        todoDate.value = '';
        document.getElementById('filter-input').value = ''; // Kosongkan filter
    }
}

// Modifikasi: Fungsi ini sekarang menerima array untuk ditampilkan
function displayTodos(todosToDisplay) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ""; // Clear existing list   

    todosToDisplay.forEach((todo, index) => {
        // Cari index asli dari todo di array utama untuk fungsi delete
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
    // Setelah menghapus, filter ulang tampilan berdasarkan input filter yang ada
    filterTodo();
}

function filterTodo() {
    const filterInput = document.getElementById('filter-input');
    const filterText = filterInput.value.toLowerCase();

    // Buat array baru yang berisi todo yang cocok dengan filter
    const filteredTodos = todos.filter(todo => {
        return todo.Task.toLowerCase().includes(filterText);
    });

    // Tampilkan todos yang sudah difilter
    displayTodos(filteredTodos);
}

function validateInput(todo, date) {
    if (todo.trim() === '' || date.trim() === '') {
        alert('Please enter both a todo and a date.');
        return false;
    }
    return true;
}