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
var donecounterDOMElement;
var notdonecounterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    donecounterDOMElement = document.querySelector("#donecounter");
    notdonecounterDOMElement = document.querySelector("#notdonecounter");
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
    twoCounters();
}
function updateCounter() {
    counterDOMElement.innerHTML = object.length + " in total";
}
function twoCounters() {
    var donecounter = 0;
    var notdonecounter = 0;
    for (var index = 0; index < object.length; index++) {
        if (object[index].todosChecked == true) {
            donecounter++;
        }
        else {
            notdonecounter++;
        }
    }
    donecounterDOMElement.innerHTML = donecounter + " done";
    notdonecounterDOMElement.innerHTML = notdonecounter + " not done yet";
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
var artyomStart = false;
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            object.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }
    });
    document.getElementById("start").addEventListener("click", function () {
        startArtyom();
        artyom.say("Sage ERSTELLE AUFGABE");
    });
    document.getElementById("stop").addEventListener("click", function () {
        stopArtyom();
        artyom.say("Heide Getreide, bis Baldrian und ein Kuss auf die Nuss!");
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
//# sourceMappingURL=script.js.map