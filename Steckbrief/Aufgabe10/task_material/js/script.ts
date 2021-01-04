interface todos {
    todosText: string;
    todosChecked: boolean;
}

var object: todos[] = [
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

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function (): void {


    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");


    addButtonDOMElement.addEventListener("click", addTodo);


    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < object.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + object[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + object[index].todosText +


            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });


        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = object.length + " in total";
}


function addTodo(): void {

    if (inputDOMElement.value != "") {
        object.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";

        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {
    object[index].todosChecked = !object[index].todosChecked;
    drawListToDOM();
}


function deleteTodo(index: number): void {
    object.splice(index, 1);
    drawListToDOM();
}