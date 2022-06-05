let inputField = document.querySelector(".todolist__input");
let taskArea = document.querySelector(".todolist__items");
let todoItems = document.querySelectorAll(".todolist__item");

let saveButton = document.querySelector(".todolist__save");
let clearButton = document.querySelector(".todolist__clear");

function deleteTodo() {
  let deleteIcons = document.querySelectorAll(".iconify");
  for (let i = 0; i < deleteIcons.length; i++) {
    console.log(deleteIcons[i].parentElement);
    deleteIcons[i].addEventListener("click", function (event) {
      deleteIcons[i].parentElement.remove();
      
    });
  }
}

inputField.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13 && inputField.value != "") {
    let listElement = document.createElement("div");
    let deleteIcon = document.createElement("span");
    deleteIcon.setAttribute("data-icon", "ant-design:delete-filled");
    deleteIcon.className = "iconify";
    listElement.className = "todolist__item";
    listElement.innerHTML = "<p>" + inputField.value + "</p>";
    listElement.appendChild(deleteIcon);
    taskArea.appendChild(listElement);
    deleteTodo();
  }
});

taskArea.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    event.target.classList.toggle("checked");
  }
});
deleteTodo();