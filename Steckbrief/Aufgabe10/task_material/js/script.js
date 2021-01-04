var object = [
    {
        todosText: "teste",
        todosChecked: true
    },
    {
        todosText: "mich",
        todosChecked: false
    },
    {
        todosText: "bitte",
        todosChecked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + object[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + object[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < object.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = object.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        object.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    object[index].todosChecked = !object[index].todosChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    object.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map