// const form = document.querySelector('.todo-form');
// const input = document.querySelector('.todo-input');
// const itemsList = document.querySelector('.todo-items');
// let todos = [];
//
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     addTodo(input.value);
// });
//
// function addTodo(item) {
//     if (item !== '') {
//         const todo = {
//             id: Date.now(),
//             name: item,
//             completed: false
//         };
//
//         todos.push(todo);
//         addToLocalStorage(todos);
//         item.value = '';
//     }
// }
//
// function renderTodos(todos) {
//     itemsList.innerHTML = '';
//     todos.forEach(function (item) {
//         const checked = item.completed ? 'checked' : null;
//         const li = document.createElement('li');
//         li.setAttribute('class', 'item');
//         li.setAttribute('data-key', item.id);
//
//         if (item.completed === true) {
//             li.classList.add('checked');
//         }
//
//         li.innerHTML = `
//       <input type="checkbox" class="checkbox" ${checked}>
//       ${item.name}
//       <button class="delete-button">X</button>
//     `;
//
//         itemsList.append(li);
//     });
// }
//
// function addToLocalStorage(todos) {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderTodos(todos);
// }
//
// function getFromLocalStorage() {
//     const reference = localStorage.getItem('todos');
//     if (reference) {
//         todos = JSON.parse(reference);
//         renderTodos(todos);
//     }
// }
//
// function toggle(id) {
//     todos.forEach(function (item) {
//         if (item.id === +id) {
//             item.completed = !item.completed;
//         }
//     });
//     addToLocalStorage(todos);
// }
//
// function deleteTodo(id) {
//     todos = todos.filter(function (item) {
//         return item.id !== +id;
//     });
//     addToLocalStorage(todos);
// }
//
// function sorter() {
//     todos.map(todo=>{
//
//     })
// }
//
//
// getFromLocalStorage();
// itemsList.addEventListener('click', function (event) {
//     if (event.target.type === 'checkbox') {
//         toggle(event.target.parentElement.getAttribute('data-key'));
//     }
//     if (event.target.classList.contains('delete-button')) {
//         deleteTodo(event.target.parentElement.getAttribute('data-key'));
//     }
// });