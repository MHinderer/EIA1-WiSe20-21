//Sound Variablen
const sound: HTMLAudioElement[] = [];
sound[0] = new Audio("sounds/bakanotnice.mp3");
sound[1] = new Audio("sounds/Kick(13).wav");
sound[2] = new Audio("sounds/RealNiggaKick.wav");
sound[3] = new Audio("sounds/tinted.wav");
sound[4] = new Audio("sounds/XSNARE(8).wav");
sound[5] = new Audio("sounds/NoHeart808.wav");
sound[6] = new Audio("sounds/808_(6).wav");
sound[7] = new Audio("sounds/X_808_(16).wav");
sound[8] = new Audio("sounds/X_808_(25).wav");


//Ausgabe
window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-1").addEventListener("click", function (): void {
        playSound(0);
        recordSample(0);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-2").addEventListener("click", function (): void {
        playSound(1);
        recordSample(1);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-3").addEventListener("click", function (): void {
        playSound(2);
        recordSample(2);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-4").addEventListener("click", function (): void {
        playSound(3);
        recordSample(3);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-5").addEventListener("click", function (): void {
        playSound(4);
        recordSample(4);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-6").addEventListener("click", function (): void {
        playSound(5);
        recordSample(5);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-7").addEventListener("click", function (): void {
        playSound(6);
        recordSample(6);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-8").addEventListener("click", function (): void {
        playSound(7);
        recordSample(7);
    });
});

window.addEventListener("load", function (): void {
    document.querySelector(".box.pad-9").addEventListener("click", function (): void {
        playSound(8);
        recordSample(8);
    });
});



//Drum Machine 2
//Array der Buttons
let my: HTMLElement[] = [];
my[0] = document.getElementById("play");
my[1] = document.getElementById("pause");
my[2] = document.getElementById("record");
my[3] = document.getElementById("stop");

//dynamisches Array
let varArray: number[] = [1, 2, 3];

let recording: boolean = false;

let playStop: boolean = false;

let i: number = 0;

let myInterval;




//Funktionsaufrufe der Buttons

//Play & Stop Button
window.addEventListener("load", function (): void {
    my[0].addEventListener("click", function (): void {
        changeClasses(my[0], my[1]);
        playStop = true;
        playSample();
        console.log("es geht1");
    });
});

window.addEventListener("load", function (): void {
    my[1].addEventListener("click", function (): void {
        changeClasses(my[1], my[0]);
        playStop = false;
        playSample();
    });
});

//Record Button
window.addEventListener("load", function (): void {
    my[2].addEventListener("click", function(): void {
    if (my[2].classList.contains("inactive")) {
        my[2].classList.remove("inactive");
        my[2].classList.add("active");
        recording = true;
        recordSample;
    } else {
        (my[2].classList.contains("active"));
        my[2].classList.remove("active");
        my[2].classList.add("inactive");
        recording = false;
        recordSample;
    }
});
});

//Delet Button
window.addEventListener("load", function (): void {
my[3].addEventListener("click", function (): void {
    console.log(varArray.length);
    varArray.splice(0, varArray.length);
    console.log(varArray.length);
});
});




//Funktionen

//Funktion (playSample)
function playSound(x: number): void {
    sound[x].play();
}

//Funktion Play&Stop
function changeClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}

//Funktion Recording
function recordSample(x: number): void {
    if (recording == true) {
        varArray.push(x);
    } else {
        console.log("nichts passiert");
    }
}


//Funktion Push-In Array
function playSample(): void {
    if (playStop == true) {
        myInterval = setInterval(function(): void {
            if (i < varArray.length) {
                playSound(varArray[i]);
                i++;
            } else {
                i = 0;
            }
        },                       500);
    } else {
        clearInterval(myInterval);
    }
}

