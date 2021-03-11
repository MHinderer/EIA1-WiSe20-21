//Der Code kann parallelen zu dem Code von Julian Himmel aufweisen, da wir die meiste Zeit zusammen über Alfaview programmiert haben!



//Variablen definieren und somit die DOM Element später zu manipulieren
var menü: HTMLDivElement = document.querySelector(".menü");
var gridEASY: HTMLDivElement = document.querySelector(".gridEASY");
var scoreComputer: HTMLSpanElement = document.querySelector(".scoreComputer");
var scoreUser: HTMLSpanElement = document.querySelector(".scoreUser");
var gamefieldEASY: HTMLDivElement = document.querySelector(".gamefieldEASY");
var easyButton: HTMLButtonElement = (document.getElementById("easyButton") as HTMLButtonElement);
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
easyButton.addEventListener("click", function(): void {
    menü.setAttribute("style", "display:none");
    memory.setAttribute("style", "display:none");
    gamefieldEASY.setAttribute("style", "display:unset");
    cardGenerator();
    setTimeout (() => {
        computer();
    },          1000);
    easyButton.disabled = true;
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
var cards: Wearth[] = [
    {
        icon: "fas fa-cat",
        colour: "#F78181",
        text: "",
        key: "karte1"
    },
    {
        icon: "fas fa-cat",
        colour: "#F78181",
        text: "",
        key: "karte2"
    },
    {
        icon: "fas fa-dragon",
        colour: "#F5DA81",
        text: "",
        key: "karte3"
    },
    {
        icon: "fas fa-dragon",
        colour: "#F5DA81",
        text: "",
        key: "karte4"
    },
    {
        icon: "fas fa-fish",
        colour: "#81F781",
        text: "",
        key: "karte5"
    },
    {
        icon: "fas fa-fish",
        colour: "#81F781",
        text: "",
        key: "karte6"
    },
    {
        icon: "fas fa-horse",
        colour: "#819FF7",
        text: "",
        key: "karte7"
    },
    {
        icon: "fas fa-horse",
        colour: "#819FF7",
        text: "",
        key: "karte8"
    }
];

//MITTEL & SCHWER benötigen eine eigene computer function
//Computer
//Kann zufällige Indexe aus meinem Kartenarray wählen und ausgeben.
//Pusht die random Indexe in ein leeres randomArray.
//In diesem werden die zwei Indexe verglichen ob sie gleich sind oder nicht.
//Wenn diese gleich sind wird die function nocheinmal aufgerufen, bis die if-condition erfüllt ist.
//Somit kann der Computer nicht eine Karten zwei mal aufdecken.
function computer(): void {
    setTimeout (() => {
    //Wenn du Array Länge 4 ist, hört der Computer auf, random Zahlen auszuwählen und zu vergleichen.
    if (computerIndex.length < 4) {
    const random1: number = Math.floor(Math.random() * cards.length);                       // Diese const müssen ebenfalls für MITTEL & SCHWER erstellt werden, da diese eine andere Array Länge haben.(cards.lenght)
    const random2: number = Math.floor(Math.random() * cards.length);                       // Diese const müssen ebenfalls für MITTEL & SCHWER erstellt werden, da diese eine andere Array Länge haben.(cards.lenght)
    const randomCard1: Wearth = cards[random1];                                             
    const randomCard2: Wearth = cards[random2];                                             

    let card1: HTMLDivElement = document.querySelector(".cardEASY" + random1);                  
    let card2: HTMLDivElement = document.querySelector(".cardEASY" + random2);                  

    var randomArray: number[] = [];
    randomArray.push(random1);                                                              
    randomArray.push(random2);                                                              

    //randomArray Indexe dürfen nicht gleich sein.
    if (randomArray[0] != randomArray[1]) {
        //random Karte1 muss die Klasse "hidden" besitzen.
        if ( card1.classList.contains("hidden")) {
            computer();
        //random Karte2 muss die Klasse "hidden" besitzen.
        } else if (card2.classList.contains("hidden")) {
            computer();
        //Wenn dise nicht diese Klasse besitzen wird die Funktion 
        //element und time mit den jeweiligen randome Karten als
        //Argument ausgeführt.
        } else {
            element(random1);
            element(random2);
            time(random1);
            time(random2);
            randomArray = [];
        }
    //Wenn beide random Indexe gleich sind, wir die computer Funktion
    //nocheinmal aufgerufen. Das passiert solange bis er die if condition erfüllt.
    //Sprich zwei unterschiedliche Indexe auswählt.   
    } else {
        computer();
    }
    }
    },          200);

}

//Funktion time dreht die gewählte Karte des Computers nach einer bestimmten Zeit wieder um.
function time(index: number): void {
    let cardEASY: HTMLDivElement = document.querySelector(".cardEASY" + index);
    setTimeout (() => {
        cardEASY.innerHTML = "";
        cardEASY.style.backgroundColor = "grey";
    },          1000);
}




//Schleife die das Grid mit den Array Objekten befüllt. Erzeugtes DIVElement  bekommt die Objekte aus dem Array,
//als auch eine Hintergrundfarbe die als Rückseite erscheint.
function cardGenerator(): void { 
//Die Schleife wiederholt sich so oft, wie die Länge des Arrays ist. Dadurch bekommt jede "Karte"/Objekt einmal die Klasse
//und einmal den Index. Somit kann auf die CSS Klasse wie auch den Index der jeweiligen Karten zugegriffen werden.
for (let index: number = 0; index < cards.length; index++) {
    let cardEASY: HTMLDivElement = document.createElement("div");
    cardEASY.classList.add("cardEASY");
    cardEASY.classList.add("cardEASY" + index);
    
    //Die Rückseite bekommt die Fabre
    cardEASY.style.backgroundColor = "grey";

    //Das DIV Element grid (Spielfeld) bekommt die einzelne Karten/Objekte geerbt.
    //Somit werden die Karten im DOM sichtbar.
    gridEASY.appendChild(cardEASY);

    //Klick Funktion auf den einzelnen Karten.
    cardEASY.addEventListener("click", function (): void {
        //Nur wenn der Spieler am Zug ist, kann der Index der geklickten Karten ins Array gepusht werden.
        //Somit wird verhindert, dass der Player während der Computer am Zug ist, klicken kann.
        if (playerBo == true) {
        userIndex.push(index);
        }
        //Wenn der Player am Zug ist und schon ein Index ins Array gepusht wurde,
        //wird die Funktion element mit dem Index als Argument aufgerufen.
        if (userIndex.length == 1 && playerBo == true) {
                computerBo = false;
                element(index);
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
                    element(index);
                    userIndex = [];
                }
            }
    });
}
}

//Funktion element pusht die verschiedenen Eigenschaften des cards Array in die nötigen Arrays.
//Außerdem manipuliert sie den DOM, indem mit inner.HTML die Eigenschaften wie Farbe und Piktogram
//auf die erzeugten DIVElemente gepackt werden.
function element(index: number): void {
    //Wenn das hiddenArray kleiner als zwei ist, dann wird alles manipuliert und gepusht.
    // Die if Condition limitiert den Player auf zwei Klicks.
    if ( hiddenArray.length < 2) {
    let cardEASY: HTMLDivElement = document.querySelector(".cardEASY" + index);
    cardEASY.innerHTML = "<i class='" + cards[index].icon + "'></i>";
    cardEASY.style.backgroundColor = cards[index].colour;

    //Die Eigenschaft Farbe und Schlüssel werden in das leere Array openCards gepusht.
    openCards.push(cards[index].colour);
    openCards.push(cards[index].key);

    //Das erzeugte DIVElement card wird in das leere hiddenArray gepusht.
    hiddenArray.push(cardEASY);

    //Funktion addClickedCards wird mit dem Argument Index aufgerufen
    addClickedCards(index);
    }
}

//Erzeugte DIVs (Karten) werden beim neu laden der Seite/Spiels durcheinander angeordnet. 
//Dabei bekommen die Index Plätze random die Eigenschaften/Werte zugeschrieben.
function randomizeArray(): void {
    cards.sort(() => 0.5 - Math.random());
}

randomizeArray();

//Funktion addClickedCards limitiert die Länge des openCards Array auf maximal zwei Karten.
//Jedes mal wenn eine Karte geklickt wird, werden die zwei Eigenschaften (Farbe und Schlüssel) 
//ins openCards Array gepusht. Wenn zwei Karten (4 Eigenschaften/Werte) im Array sind, wird
//die Funktion matchingCards aufgerufen.
function addClickedCards(index: number): void {
    if (openCards.length == 4) {
        matchingCards();
    }
}

//Funktion matchingCards vergleicht ob die geklickten Karten ein Paar sind oder nicht.
function matchingCards(): void {
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
            counter();
            computer();
            hiddenArray = [];
            openCards = [];
        }

        //Wenn der Player ein Paar hat, wird eine Nummer in das scorePlayerArray gepusht und
        //mit dem Aufruf counter() wird sein Punktestand um eins erhöht.
        //Anschließend werden die Karten Arrays wieder geleert.
        if (computerBo == false) {
            scorePlayerArray.push(1);
            counter();
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

                computer();
            },         1000);
        }
    }
},             1000);
}

//Funktion counter erhöht den Spielstand der Spieler, welches ein Kartenpaar aufgedeckt haben.
function counter(): void {
    //Diese var ist der Gesamtpunktestand. Somit kann ich sagen wann das Spiel zuende ist.
    var res: number = scorePlayerArray.length + scoreComputerArray.length;
    //Spielstand der einzelnen wird bei aktuallisierung manipuliert.
    scoreComputer.innerHTML = "Computer " + scoreComputerArray.length + " : ";
    scoreUser.innerHTML =  scorePlayerArray.length + " Player";

    //Wenn der Gesamtpunktestand 4 erreicht, dann wird das Spielfeld verschwinden
    //und die Gewinnbenachrichtigung mit dem replay button erscheinen.
    if ( res == 4) {
        gamefieldEASY.setAttribute("style", "display:none");
        afterGame.setAttribute("style", "display:unset");
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