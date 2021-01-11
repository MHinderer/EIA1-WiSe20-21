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
var donecounterDOMElement: HTMLElement;
var notdonecounterDOMElement: HTMLElement;



window.addEventListener("load", function (): void {


    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    donecounterDOMElement = document.querySelector("#donecounter");
    notdonecounterDOMElement = document.querySelector("#notdonecounter");


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
    twoCounters();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = object.length + " in total";
}

function twoCounters(): void {
    var donecounter: number = 0;
    var notdonecounter: number = 0;
    for (var index: number = 0; index < object.length; index++) {
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


declare var Artyom: any;
var artyomStart: boolean = false;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            object.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }
    });

    document.getElementById("start").addEventListener("click", function (): void {
        startArtyom();
        artyom.say("Sage ERSTELLE AUFGABE");
    });

    document.getElementById("stop").addEventListener("click", function (): void {
        stopArtyom();
        artyom.say("Heide Getreide, bis Baldrian und ein Kuss auf die Nuss!");
    });
    
    function startArtyom(): void {
        artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
        });
    }
    
    function stopArtyom(): void {
        artyom.fatality();
    }
    
});