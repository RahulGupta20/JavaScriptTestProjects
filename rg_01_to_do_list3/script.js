const taskInput = document.querySelector('.task-input input');
const taskBox = document.querySelector(".task-box");
//getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    todos.forEach((todo, id) => {
        // console.log(id, todo)
        li += `<li class="task">
                <label for="${id}">
                    <input type="checkbox" id="${id}">
                    <p>${todo.name}</p>
                </label>
                <div class="settings">
                    <i class="uil uil-ellipsis-h"></i>
                    <ul class="task-menu">
                        <li><i class="uil uil-pen"></i> Edit</li>
                        <li><i class="uil uil-trash"></i> Delete</li>
                    </ul>
                </div>
            </li>`;
    });
    taskBox.innerHTML = li;
}

taskInput.addEventListener('keyup', e => {
    let userTask = taskInput.value.trim();
    if(e.key == 'Enter' && userTask) {
        // console.log(userTask)
        
        if(!todos) { // if todo isn't exit, pass and empty array to todo
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo);
        // localStorage.setItem("todo-list", todos)
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
})