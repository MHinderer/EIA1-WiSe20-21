//Sound Variablen
var audio = [];
audio[0] = new Audio('../sounds/A.mp3');
audio[1] = new Audio('../sounds/C.mp3');
audio[2] = new Audio('../sounds/F.mp3');
audio[3] = new Audio('../sounds/G.mp3');
audio[4] = new Audio('../sounds/hihat.mp3');
audio[5] = new Audio('../sounds/kick.mp3');
audio[6] = new Audio('../sounds/laugh-1.mp3');
audio[7] = new Audio('../sounds/laugh-2.mp3');
audio[8] = new Audio('../sounds/snare.mp3');


//Ausgabe
window.addEventListener('load', function () {
    document.querySelector(".box.pad-1").addEventListener("click", function () {
        playSample(0);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-2").addEventListener("click", function () {
        playSample(1);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-3").addEventListener("click", function () {
        playSample(2);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-4").addEventListener("click", function () {
        playSample(3);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-5").addEventListener("click", function () {
        playSample(4);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-6").addEventListener("click", function () {
        playSample(5);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-7").addEventListener("click", function () {
        playSample(6);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-8").addEventListener("click", function () {
        playSample(7);
    })
});

window.addEventListener('load', function () {
    document.querySelector(".box.pad-9").addEventListener("click", function () {
        playSample(8);
    })
});


//Funktion (playSample)
function playSample(x: number) {
    audio[x].play();
}


//Drum Machine
window.addEventListener('load', function () {
    document.querySelector(".button").addEventListener("click", function () {
        melody(4, 5, 8);
    })
});

//Funktion (Drum Machine)
function melody(hihat: number, kick: number, snare: number) {
    setInterval(function () {
        playSample(hihat);
        playSample(kick);
        playSample(snare);
    }, 5000);
    console.log('es geht nicht');
}