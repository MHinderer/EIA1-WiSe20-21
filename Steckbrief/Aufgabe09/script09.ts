let inputField: HTMLInputElement = (document.getElementById("myInput") as HTMLInputElement);

inputField.addEventListener("keypress", function (e: KeyboardEvent): void {
    if (e.key == "Enter") {
        addValue();
    }
});


function addValue(): void {
    let myDiv: HTMLDivElement = document.createElement("div");
    myDiv.innerHTML = "";
    myDiv.className = "myDiv";
    let myCheckbox: HTMLInputElement = (document.createElement("input") as HTMLInputElement);
    myCheckbox.type = "checkbox";
    myCheckbox.className = "myCheckbox";
    let myDelete: HTMLElement = document.createElement("i");
    myDelete.className = "far delete fa-trash-alt";
    let myLabel: HTMLLabelElement = document.createElement("label");
    let myForm: HTMLFormElement = (document.getElementById("form") as HTMLFormElement);
    myLabel.innerHTML = inputField.value;
    let counter: HTMLSpanElement = document.getElementById("counter");

    myDiv.appendChild(myCheckbox);
    myDiv.appendChild(myDelete);
    myDiv.appendChild(myLabel);
    myForm.appendChild(myDiv);


    myDelete.addEventListener("click", function(): void {
        removeValue(myDiv);
    });


    zahl++;
    anzeige();

}

let zahl: number = 0;
let counter: HTMLSpanElement = document.getElementById("counter");

function removeValue(myDiv: HTMLDivElement): void {
    myDiv.remove();

    zahl--;
    anzeige();
}


function anzeige(): void {
    document.getElementById("counter").innerText = zahl;
}








//// Create a "close" button and append it to each list item
//var myNodelist: HTMLLIElement = document.getElementsByTagName("LI");
//var i;
//for (i = 0; i < myNodelist.length; i++) {
//  var span: HTMLSpanElement = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  myNodelist[i].appendChild(span);
//}
//
//// Click on a close button to hide the current list item
//var close: HTMLElement = document.getElementsByClassName("close");
//var i;
//for (i = 0; i < close.length; i++) {
//  close[i].onclick = function(): void {
//    var div: HTMLDivElement = this.parentElement;
//    div.style.display = "none";
//  };
//}
//
//// Add a "checked" symbol when clicking on a list item
//var list: HTMLUListElement = document.querySelector("ul");
//list.addEventListener("click", function(ev): void {
//  if (ev.target.tagName === "LI") {
//    ev.target.classList.toggle("checked2");
//  }
//},                    false);
//
//// Create a new list item when clicking on the "Add" button
//function newElement(): void {
//  var li: HTMLLIElement = document.createElement("li");
//  var inputValue: HTMLInputElement = document.getElementById("myInput").value;
//  var t = document.createTextNode(inputValue);
//  li.appendChild(t);
//  if (inputValue === "") {
//    alert("You must write something!");
//  } else {
//    document.getElementById("myUL").appendChild(li);
//  }
//  document.getElementById("myInput").value = "";
//
//  var span: HTMLSpanElement = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  li.appendChild(span);
//
//  for (i = 0; i < close.length; i++) {
//    close[i].onclick = function(): void {
//      var div: HTMLDivElement = this.parentElement;
//      div.style.display = "none";
//    };
//  }



















////variable
//let button: HTMLElement = document.getElementById("button");
//
////click functions
//button.addEventListener("click", function(): void {
//    addValue();
//});
//
////functions
//function addValue(): void {
//    let li: HTMLLIElement = document.createElement("li");
//    let input: HTMLInputElement = (document.getElementById("input") as HTMLInputElement);
//    let ul: HTMLUListElement = document.getElementById("dynamic-list");
//    ul.appendChild(li);
//}



























////Ausgabe
//
//events();
//
//let input: HTMLInputElement = document.querySelector("input");
//
//
////Funktionen
//function events(): void {
//    document.getElementById("button").addEventListener("button", add);
//    document.getElementById("dynamic-list").addEventListener("click", removeValue);
//    document.querySelector(".fa-trash-alt").addEventListener("click", deleteValue);
//}
//
//function add(e: Event): void {
//    e.preventDefault();
//    let input: HTMLInputElement = document.querySelector("#input");
//    if (input.value != "")
//    addValue(input.value);
//    input.value = "";
//}
//
//function addValue(value: string): void {
//    let ul: HTMLElement = document.getElementById("dynamic-list");
//    let li: HTMLLIElement = document.createElement("li");
//    li.innerHTML = `<i class="far delete fa-trash-alt"></i><input type="checkbox"><label class="nameElement">${value}</label>`;
//    ul.appendChild(li);
//}
//
//function removeValue(e: Event): void {
//    e.preventDefault();
//    let ul: HTMLElement = document.getElementById("dynamic-list");
//    ul.innerHTML = "";
//}
//
//function deleteValue(e: Event): void {
//    e.preventDefault();
//    let ul: HTMLElement = document.getElementById("dynamic-list");
//    let li: HTMLLIElement = document.querySelector("li");
//    ul.removeChild(li);
//}