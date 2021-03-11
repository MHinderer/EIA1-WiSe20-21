//Der Code kann parallelen zu dem Code von Julian Himmel aufweisen, da wir die meiste Zeit zusammen über Alfaview programmiert haben!



//Variablen definieren und somit die DOM Element später zu manipulieren
var menü: HTMLDivElement = document.querySelector(".menü");
var gridHARD: HTMLDivElement = document.querySelector(".gridHARD");
var scoreComputer3: HTMLSpanElement = document.querySelector(".scoreComputer3");
var scoreUser3: HTMLSpanElement = document.querySelector(".scoreUser3");
var gamefieldHARD: HTMLDivElement = document.querySelector(".gamefieldHARD");
var hardButton: HTMLButtonElement = (document.getElementById("hardButton") as HTMLButtonElement);
var winMessage: HTMLElement = document.querySelector(".winMessage");
var replay: HTMLButtonElement = document.querySelector("#replay");
var afterGame: HTMLDivElement = document.querySelector("#afterGame");
var memory: HTMLDivElement = document.querySelector(".Memory");

//Boolean Werte
var playerBo: boolean = false;
var computerBo: boolean = true;

//Sobald auf den easyButton geklickt wird, verschwindet die Menübox
//und das Spielfled erscheint. Anschließend werden die Karten generiert
//und im DOM sichtbar. Der Button ist nur einmal anklickbar,
//damit sich bei weiterem klicken darauf, keine neue Karten generieren.
hardButton.addEventListener("click", function(): void {
    menü.setAttribute("style", "display:none");
    memory.setAttribute("style", "display:none");
    gamefieldHARD.setAttribute("style", "display:unset");
    cardGenerator3();
    setTimeout (() => {
        computer3();
    },          1000);
    hardButton.disabled = true;
});



//Karten Interface
interface Wearth {
    icon: string;
    colour: string;
    text: string;
    key: string;
}

//leere Arrays
var openCards: string [] = [];
var hiddenArray: HTMLDivElement [] = [];
var scoreComputerArray: number [] = [];
var scorePlayerArray: number [] = [];
var userIndex: number [] = [];
var computerIndex: number [] = [];

//Karten Array LEICHT
var cards3: Wearth[] = [
    {
        icon: "",
        colour: "#F78181",
        text: "Kaskadierung 1 =",
        key: "karte1"
    },
    {
        icon: "",
        colour: "#F78181",
        text: "alle HTMLElemente",
        key: "karte2"
    },
    {
        icon: "",
        colour: "#F5DA81",
        text: "Kaskadierung 10 =",
        key: "karte3"
    },
    {
        icon: "",
        colour: "#F5DA81",
        text: "class",
        key: "karte4"
    },
    {
        icon: "",
        colour: "#81F781",
        text: "Kaskadierung 100 =",
        key: "karte5"
    },
    {
        icon: "",
        colour: "#81F781",
        text: "id",
        key: "karte6"
    },
    {
        icon: "",
        colour: "#819FF7",
        text: "let-Variablen haben…",
        key: "karte7"
    },
    {
        icon: "",
        colour: "#819FF7",
        text: "einen eingeschränkten Gültigkeitsbereich",
        key: "karte8"
    },
    {
        icon: "",
        colour: "#FE2E2E",
        text: "Einer Variable wird ein Wert…",
        key: "karte9"
    },
    {
        icon: "",
        colour: "#FE2E2E",
        text: "durch den Zuweisungsoperator ‘=’ zugewiesen",
        key: "karte10"
    },
    {
        icon: "",
        colour: "#9AFE2E",
        text: "3 Variablentypen ...",
        key: "karte11"
    },
    {
        icon: "",
        colour: "#9AFE2E",
        text: "var, let, const",
        key: "karte12"
    },
    {
        icon: "",
        colour: "#2EFE9A",
        text: "Datentyp string ...",
        key: "karte13"
    },
    {
        icon: "",
        colour: "#2EFE9A",
        text: "ist eine Zeichenkette",
        key: "karte14"
    },
    {
        icon: "",
        colour: "#2E9AFE",
        text: "Datentyp number ...",
        key: "karte15"
    },
    {
        icon: "",
        colour: "#2E9AFE",
        text: "sind Zahlen",
        key: "karte16"
    },
    {
        icon: "",
        colour: "#B40404",
        text: "Datentyp boolean ...",
        key: "karte17"
    },
    {
        icon: "",
        colour: "#B40404",
        text: "sind Warheitswerte",
        key: "karte18"
    },
    {
        icon: "",
        colour: "#8A4B08",
        text: "Argumente werden ...",
        key: "karte19"
    },
    {
        icon: "",
        colour: "#8A4B08",
        text: "in den Argumentenklammern deklariert",
        key: "karte20"
    },
    {
        icon: "",
        colour: "#5E610B",
        text: "absoluter Pfad",
        key: "karte21"
    },
    {
        icon: "",
        colour: "#5E610B",
        text: "https://github.com",
        key: "karte22"
    },
    {
        icon: "",
        colour: "#38610B",
        text: "relativer Pfad =",
        key: "karte23"
    },
    {
        icon: "",
        colour: "#38610B",
        text: "/Aufgabe1/Style1.css",
        key: "karte24"
    },
    {
        icon: "",
        colour: "#0B6121",
        text: "Parsen 1.Variante =",
        key: "karte25"
    },
    {
        icon: "",
        colour: "#0B6121",
        text: "JS Datei am Ende des Bodys",
        key: "karte26"
    },
    {
        icon: "",
        colour: "#0B614B",
        text: "Parsen 2.Variante =",
        key: "karte27"
    },
    {
        icon: "",
        colour: "#0B614B",
        text: "defer/async hinter src im head",
        key: "karte28"
    },
    {
        icon: "",
        colour: "#0B3861",
        text: "Parsen 3.Variante =",
        key: "karte29"
    },
    {
        icon: "",
        colour: "#0B3861",
        text: "window.addEventListener",
        key: "karte30"
    },
    {
        icon: "",
        colour: "#610B38",
        text: "let ist immer ...",
        key: "karte31"
    },
    {
        icon: "",
        colour: "#610B38",
        text: "Block bezogen",
        key: "karte32"
    }
];

//MITTEL & SCHWER benötigen eine eigene computer function
//Computer
//Kann zufällige Indexe aus meinem Kartenarray wählen und ausgeben.
//Pusht die random Indexe in ein leeres randomArray.
//In diesem werden die zwei Indexe verglichen ob sie gleich sind oder nicht.
//Wenn diese gleich sind wird die function nocheinmal aufgerufen, bis die if-condition erfüllt ist.
//Somit kann der Computer nicht eine Karten zwei mal aufdecken.
function computer3(): void {
    setTimeout (() => {
    //Wenn du Array Länge 4 ist, hört der Computer auf, random Zahlen auszuwählen und zu vergleichen.
    if (computerIndex.length < 16) {
    const random1: number = Math.floor(Math.random() * cards3.length);                       // Diese const müssen ebenfalls für MITTEL & SCHWER erstellt werden, da diese eine andere Array Länge haben.(cards.lenght)
    const random2: number = Math.floor(Math.random() * cards3.length);                       // Diese const müssen ebenfalls für MITTEL & SCHWER erstellt werden, da diese eine andere Array Länge haben.(cards.lenght)
    const randomCard1: Wearth = cards3[random1];                                             
    const randomCard2: Wearth = cards3[random2];                                             

    let card1: HTMLDivElement = document.querySelector(".card" + random1);                  
    let card2: HTMLDivElement = document.querySelector(".card" + random2);                  

    var randomArray: number[] = [];
    randomArray.push(random1);                                                              
    randomArray.push(random2);                                                              

    //randomArray Indexe dürfen nicht gleich sein.
    if (randomArray[0] != randomArray[1]) {
        //random Karte1 muss die Klasse "hidden" besitzen.
        if ( card1.classList.contains("hidden")) {
            computer3();
        //random Karte2 muss die Klasse "hidden" besitzen.
        } else if (card2.classList.contains("hidden")) {
            computer3();
        //Wenn dise nicht diese Klasse besitzen wird die Funktion 
        //element und time mit den jeweiligen randome Karten als
        //Argument ausgeführt.
        } else {
            element3(random1);
            element3(random2);
            time3(random1);
            time3(random2);
            randomArray = [];
        }
    //Wenn beide random Indexe gleich sind, wir die computer Funktion
    //nocheinmal aufgerufen. Das passiert solange bis er die if condition erfüllt.
    //Sprich zwei unterschiedliche Indexe auswählt.   
    } else {
        computer3();
    }
    }
    },          200);

}

//Funktion time dreht die gewählte Karte des Computers nach einer bestimmten Zeit wieder um.
function time3(index: number): void {
    let card: HTMLDivElement = document.querySelector(".card" + index);
    setTimeout (() => {
        card.innerHTML = "";
        card.style.backgroundColor = "grey";
    },          1000);
}




//Schleife die das Grid mit den Array Objekten befüllt. Erzeugtes DIVElement  bekommt die Objekte aus dem Array,
//als auch eine Hintergrundfarbe die als Rückseite erscheint.
function cardGenerator3(): void { 
//Die Schleife wiederholt sich so oft, wie die Länge des Arrays ist. Dadurch bekommt jede "Karte"/Objekt einmal die Klasse
//und einmal den Index. Somit kann auf die CSS Klasse wie auch den Index der jeweiligen Karten zugegriffen werden.
for (let index: number = 0; index < cards3.length; index++) {
    let card: HTMLDivElement = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card" + index);
    
    //Die Rückseite bekommt die Fabre
    card.style.backgroundColor = "grey";

    //Das DIV Element grid (Spielfeld) bekommt die einzelne Karten/Objekte geerbt.
    //Somit werden die Karten im DOM sichtbar.
    gridHARD.appendChild(card);

    //Klick Funktion auf den einzelnen Karten.
    card.addEventListener("click", function (): void {
        //Nur wenn der Spieler am Zug ist, kann der Index der geklickten Karten ins Array gepusht werden.
        //Somit wird verhindert, dass der Player während der Computer am Zug ist, klicken kann.
        if (playerBo == true) {
        userIndex.push(index);
        }
        //Wenn der Player am Zug ist und schon ein Index ins Array gepusht wurde,
        //wird die Funktion element mit dem Index als Argument aufgerufen.
        if (userIndex.length == 1 && playerBo == true) {
                computerBo = false;
                element3(index);
            //Wenn das Array zwei Indexe hat, wird noch eine Condition gestellt.
            }
            else if (userIndex.length == 2) {
                //Hier sagen wir wenn diese zwei Indexe den gleichen Index/Zahl aus dem cards Array haben,
                //dann soll der letzte Index aus dem userIndex wieder rausgelöscht werden.
                if (userIndex[0] == userIndex[1]) {
                    userIndex.pop();
                }
                //Ansonsten wird wieder die Funktion element mit dem Argument Index ausgeführt
                //und danach wird das userIndex Array geleert.
                else {
                    element3(index);
                    userIndex = [];
                }
            }
    });
}
}

//Funktion element pusht die verschiedenen Eigenschaften des cards Array in die nötigen Arrays.
//Außerdem manipuliert sie den DOM, indem mit inner.HTML die Eigenschaften wie Farbe und Piktogram
//auf die erzeugten DIVElemente gepackt werden.
function element3(index: number): void {
    //Wenn das hiddenArray kleiner als zwei ist, dann wird alles manipuliert und gepusht.
    // Die if Condition limitiert den Player auf zwei Klicks.
    if ( hiddenArray.length < 2) {
    let card: HTMLDivElement = document.querySelector(".card" + index);
    card.innerHTML = cards3[index].text;
    card.style.backgroundColor = cards3[index].colour;

    //Die Eigenschaft Farbe und Schlüssel werden in das leere Array openCards gepusht.
    openCards.push(cards3[index].colour);
    openCards.push(cards3[index].key);

    //Das erzeugte DIVElement card wird in das leere hiddenArray gepusht.
    hiddenArray.push(card);

    //Funktion addClickedCards wird mit dem Argument Index aufgerufen
    addClickedCards3(index);
    }
}

//Erzeugte DIVs (Karten) werden beim neu laden der Seite/Spiels durcheinander angeordnet. 
//Dabei bekommen die Index Plätze random die Eigenschaften/Werte zugeschrieben.
function randomizeArray3(): void {
    cards3.sort(() => 0.5 - Math.random());
}

randomizeArray3();

//Funktion addClickedCards limitiert die Länge des openCards Array auf maximal zwei Karten.
//Jedes mal wenn eine Karte geklickt wird, werden die zwei Eigenschaften (Farbe und Schlüssel) 
//ins openCards Array gepusht. Wenn zwei Karten (4 Eigenschaften/Werte) im Array sind, wird
//die Funktion matchingCards aufgerufen.
function addClickedCards3(index: number): void {
    if (openCards.length == 4) {
        matchingCards3();
    }
}

//Funktion matchingCards vergleicht ob die geklickten Karten ein Paar sind oder nicht.
function matchingCards3(): void {
    //setTimeout sagt das die Funktion sobald ein Kartenpaar gefunden wurde,
    //noch 1 Sekunde geöffnet bleibt.
    setTimeout(() => {
    //Wenn der Index 0 und 2 (Farbe) gleich ist und Index 1 und 3 (Schlüssel) des openCards Array
    //ungleich ist, dann dann bekommen die DIVElemente (Karten) im hiddenArray (Index 0&1) die
    //Klasse hidden hinzu. Diese sagt im CSS das die visibillity hidden ist.
    if (openCards[0] == openCards[2] && openCards[1] != openCards[3]) {
        hiddenArray[0].classList.add("hidden");
        hiddenArray[1].classList.add("hidden");
        //Bei jedem erkannten Kartenpaar wird eine Nummer in das computerIndex Array gepusht.
        //Somit weis der Computer in der computer Funktion, wann das Spiel zu Ende ist.
        computerIndex.push(1);
        
        //Die zwei Arrays für die Karten werden anschließend geleert, damit wieder die Index Plätze für
        //neu angeklickte Karten frei werden und diese verglichen werden können.
        openCards = [];
        hiddenArray = [];
       
        //Wenn der Computer ein Paar hat, wird eine Nummer in das scoreComputerArray gepusht und
        //mit dem Aufruf counter() wird sein Punktestand um eins erhöht.
        //Auch die Funktion computer wird nochmals aufgerufen weil er bei einem Paar
        //nochmal einen Zug hat. Anschließend werden die Karten Arrays wieder geleert.
        if (computerBo == true) {
            scoreComputerArray.push(1);
            counter3();
            computer3();
            hiddenArray = [];
            openCards = [];
        }

        //Wenn der Player ein Paar hat, wird eine Nummer in das scorePlayerArray gepusht und
        //mit dem Aufruf counter() wird sein Punktestand um eins erhöht.
        //Anschließend werden die Karten Arrays wieder geleert.
        if (computerBo == false) {
            scorePlayerArray.push(1);
            counter3();
            hiddenArray = [];
            openCards = [];
        }

    //Wenn beide kein Kartenpaar haben:
    } else {
        
        //Der Computer hat kein Kartenpaar, anschließend wird der Player boolean true 
        //womit der Player am Zug ist. Auch wenn kein Kartenpaar vorhanden ist, müssen
        //die Kartenarrays geleert werden um Platz für neu geklickte zu machen.
        if ( computerBo == true && playerBo == false) {
            setTimeout(() => {
                playerBo = true;
            },         1000);
            hiddenArray = [];
            openCards = [];
     
        //Der Player hat kein Kartenpaar, anschließend wird der Computer boolean true 
        //womit der Computer am Zug ist. Doch davor noch, werden die zwei DIVElemente im 
        //hiddenArray manipuliert. Dabei wird der Inhalt des DIVs geleert und eine neue 
        //Hintergrundfarbe gegeben. Dies simuliert das umdrehen der geöffneten Katen.
        //Die Karten werden wieder in die vorherige Position gebracht und erst dann
        //wird der Computer boolean true gesetzt und die Kartenarrays geleert.
        //Damit der Computer anfängt zu Spielen muss noch seine Funktion aufgerufen werden.
        } else if (computerBo == false && playerBo == true) {
            hiddenArray[0].innerHTML = "";
            hiddenArray[1].innerHTML = "";
            hiddenArray[0].style.backgroundColor = "grey";
            hiddenArray[1].style.backgroundColor = "grey";

            setTimeout(() => {
                computerBo = true;
                hiddenArray = [];
                openCards = [];

                playerBo = false;

                computer3();
            },         1000);
        }
    }
},             1000);
}

//Funktion counter erhöht den Spielstand der Spieler, welches ein Kartenpaar aufgedeckt haben.
function counter3(): void {
    //Diese var ist der Gesamtpunktestand. Somit kann ich sagen wann das Spiel zuende ist.
    var res: number = scorePlayerArray.length + scoreComputerArray.length;
    //Spielstand der einzelnen wird bei aktuallisierung manipuliert.
    scoreComputer3.innerHTML = "Computer " + scoreComputerArray.length + " : ";
    scoreUser3.innerHTML =  scorePlayerArray.length + " Player";

    //Wenn der Gesamtpunktestand 4 erreicht, dann wird das Spielfeld verschwinden
    //und die Gewinnbenachrichtigung mit dem replay button erscheinen.
    if ( res == 16) {
        afterGame.setAttribute("style", "display:unset");
        gamefieldHARD.setAttribute("style", "display:none");
        //Wenn der Punktestand des Computers größer ist, wird die Gewinnbenachrichtigung
        //manipuliert und ändert sich von YOU WIN zu YOU LOSE.
        if (scoreComputerArray.length > scorePlayerArray.length) {
            winMessage.innerHTML = "YOU LOSE";
        //Bei Gleichstand wird die Gewinnbenachrichtigung ebenfalls manipuliert
        //und es wird DRAW ausgegeben.
        } else if (scoreComputerArray.length == scorePlayerArray.length) {
            winMessage.innerHTML = "DRAW";
        }

    }
}

//Replay: click function auf dem Button lässt die Seite neu laden.
//Dadurch gelangen wir wieder auf die "Startseite" bzw. Anfangssituation.
replay.addEventListener("click", function (): void {
    location.reload();
});