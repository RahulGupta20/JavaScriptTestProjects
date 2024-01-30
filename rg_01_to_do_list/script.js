/*
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container')
const taskCountStore = document.querySelector('#taskCountStore');

let taskCount = 0;

function taskCount() {
    
}

function addTask() {
    if(inputBox.value === '') {
        alert("Please enter a task.")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}



listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
})


function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask();

*/



/* ==============================
    New Count feature added
================================*/
/*
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const taskCountStore = document.querySelector('#taskCountStore');

let taskCounter = 0;

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        taskCounter++;
        updateTaskCount();
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        updateTaskCount();
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        taskCounter = Math.max(0, taskCounter - 1);
        updateTaskCount();
        saveData();
    }
});

function updateTaskCount() {
    const checkedTasks = document.querySelectorAll('#list-container li.checked').length;
    taskCounter = document.querySelectorAll('#list-container li').length - checkedTasks;
    taskCountStore.textContent = taskCounter;
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    localStorage.setItem('taskCounter', taskCounter);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
    taskCounter = parseInt(localStorage.getItem('taskCounter')) || 0;
    updateTaskCount();
}

showTask();


*/

/*

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const taskCountStore = document.querySelector('#taskCountStore');

let taskCounter = 0;

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task.')
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li)
        const span = document.createElement('span');
        li.appendChild(span)
        span.innerHTML = "\u00d7";
        taskCounter++;
        updateTaskCount()
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        updateTaskCount();
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        taskCounter = Math.max(0, taskCounter - 1);
        updateTaskCount();
        saveData()
    }
})


function updateTaskCount() {
    const checkedTasks = document.querySelectorAll('#list-container li.checked').length;
    taskCounter = document.querySelectorAll('#list-container li').length - checkedTasks;
    taskCountStore.textContent = taskCounter;
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    localStorage.setItem('taskCounter', taskCounter);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
    taskCounter = parseInt(localStorage.getItem('taskCounter')) || 0;
    updateTaskCount();
}

showTask();


*/




const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask() {
    if(inputBox === ' ') {
        alert(`Please enter your task`);
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}