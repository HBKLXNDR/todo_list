const form = document.querySelector("form");
const input = document.querySelector(".task_input");
const taskList = document.querySelector(".todo_list");

let todos = [];

const showTasks = (todos) => {
    taskList.innerHTML = ""
    todos.map((task) => {
        const checked = task.done ? "checked" : null;
        const div = document.createElement("div");
        div.setAttribute("class", "flex");

        div.innerHTML = `
        <li accesskey=${task.id} >${task.name}</li>
        <input type="checkbox" class="checkbox" ${checked}>
        <button class="delete_button">delete</button>
        `

        if (task.done === true) {
            div.children[0].classList.add("checked");
        }

        taskList.appendChild(div)
    })
}

const createTask = (task) => {
    if (task) {
        const todo = {
            id: Math.random().toString(10).substring(2, 8),
            name: task,
            done: false
        };

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        showTasks(todos)
        input.value = ""

    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask(input.value)
})

taskList.addEventListener("click", (event) => {
    const id = event.target.parentElement.children[0].getAttribute("accesskey");
    const del = event.target.innerHTML === "delete"
    const checkbox = event.target.classList.contains("checkbox")


    if (del) {
        todos = todos.filter((item) => {
            return item.id !== id;
        });

        localStorage.setItem('todos', JSON.stringify(todos));
        showTasks(todos);
    }

    if (checkbox) {
        todos.map((item) => {
            if (item.id === id) {
                item.done = !item.done;
            }
        });

        localStorage.setItem('todos', JSON.stringify(todos));
        showTasks(todos);
    }
})

const localTodos = localStorage.getItem('todos')
if (localTodos) {
    todos = JSON.parse(localTodos);
    showTasks(todos);
}