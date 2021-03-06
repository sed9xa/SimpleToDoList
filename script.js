let inputField = document.querySelector(".todolist__input");
let taskArea = document.querySelector(".todolist__items");
let deleteIcon = document.querySelector(".iconify");
let saveButton = document.querySelector(".todolist__save");
let clearButton = document.querySelector(".todolist__clear");
let todoItems = document.querySelectorAll(".todolist__item");

function deleteTodo() {
  let deleteIcons = document.querySelectorAll(".iconify");
  for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener("click", function (event) {
      deleteIcons[i].parentElement.remove();
    });
  }
}

function saveTodo() {
  localStorage.setItem("todoList", taskArea.innerHTML);
}

function loadTodo() {
  if (localStorage.getItem("todoList")) {
    taskArea.innerHTML = localStorage.getItem("todoList");
  }
}

inputField.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13 && inputField.value != "") {
    let listElement = document.createElement("div");
    let deleteIconClone = deleteIcon.cloneNode(true);
    deleteIconClone.className = "iconify";
    listElement.className = "todolist__item";
    listElement.innerHTML = "<p>" + inputField.value + "</p>";
    listElement.appendChild(deleteIconClone);
    taskArea.appendChild(listElement);
    deleteTodo();
  }
});

taskArea.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    event.target.classList.toggle("checked");
  }
});

clearButton.addEventListener("click", function () {
  localStorage.removeItem("todoList");
  todoItems = document.querySelectorAll(".todolist__item");
  for (let item of todoItems) {
    item.remove();
  }
});

saveButton.addEventListener("click", function () {
  saveTodo();
});

loadTodo();

deleteTodo();
