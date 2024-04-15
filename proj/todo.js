const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");
const compEl = document.querySelector(".comp");
const imgEl = document.querySelector(".imgEl");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Пожалуйста, введите задачу");
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.className = "task";
  taskItem.addEventListener("click", toggleTaskStatus);
  todoList.appendChild(taskItem);
  taskInput.value = "";
}

function toggleTaskStatus() {
  const task = this;
  const imgEl = document.createElement("img");
  imgEl.src = './img/check_14022885.png';
  imgEl.alt = 'done';

  if (task.classList.contains("completed")) {
    task.classList.remove("completed");
    todoList.appendChild(task);
    const existingImg = task.querySelector('img');
    if(existingImg) {
      existingImg.remove();
    }
  } else {
    task.classList.add("completed");
    imgEl.classList.add('imgEl');
    task.appendChild(imgEl);
    completedList.appendChild(task);
  }
}