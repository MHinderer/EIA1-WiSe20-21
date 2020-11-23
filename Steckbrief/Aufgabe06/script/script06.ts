//Zahlenwerte der Länder

//afrika
var afrika2008: number = 1028;
var afrika2018: number = 1235.5;

//suedAmerika
var suedAmerika2008: number = 1132.6;
var suedAmerika2018: number = 1261.5;

//Europa
var europa2008: number = 4965.7;
var europa2018: number = 4209.3;

//Nord Amerika
var nordAmerika2008: number = 6600.4;
var nordAmerika2018: number = 6035.6;

//Asia
var asia2008: number = 12954.7;
var asia2018: number = 16274.1;

//Australien
var australia2008: number = 1993;
var australia2018: number = 2100.5;

//GesamtEmission
var ges2018: number = afrika2018 + suedAmerika2018 + europa2018 + nordAmerika2018 + asia2018 + australia2018;



//Berechnungen

//Afrika   
var prozentAfrikages: number = ((afrika2018 / ges2018) * 100).toFixed(2);
var wachstumAfrika: number = (((afrika2018 / afrika2008) - 1) * 100).toFixed(2);
var afrikaCO2: number = (afrika2018 - afrika2008);


//Süd Amerika
var prozentSuedAmerikages: number = ((suedAmerika2018 / ges2018) * 100).toFixed(2);

var wachstumSuedAmerika: number = (((suedAmerika2018 / suedAmerika2008) - 1) * 100).toFixed(2);

var suedAmerikaCO2: number = (suedAmerika2018 - suedAmerika2008).toFixed(2);


//Europa
var prozentEuropages: number = ((europa2018 / ges2018) * 100).toFixed(2);

var wachstumEuropa: number = (((europa2018 / europa2008) - 1) * 100).toFixed(2);

var europaCO2: number = (europa2018 - europa2008).toFixed(2);


//Nord Amerika
var prozentNordAmerikages: number = ((nordAmerika2018 / ges2018) * 100).toFixed(2);

var wachstumNordAmerika: number = (((nordAmerika2018 / nordAmerika2008) - 1) * 100).toFixed(2);

var nordAmerikaCO2: number = (nordAmerika2018 - nordAmerika2008).toFixed(2);


//Asien
var prozentasiages: number = ((asia2018 / ges2018) * 100).toFixed(2);

var wachstumAsia: number = (((asia2018 / asia2008) - 1) * 100).toFixed(2);

var asiaCO2: number = (asia2018 - asia2008).toFixed(2);


//Australien
var prozentAustraliages: number = ((australia2018 / ges2018) * 100).toFixed(2);

var wachstumAustralia: number = (((australia2018 / australia2008) - 1) * 100).toFixed(2);

var australiaCO2: number = (australia2018 - australia2008).toFixed(2); 




//Funktionen

    //Text
    function Europa(){
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector("#h2-1").innerHTML = europa2018;
        document.querySelector("#h2-2").innerHTML = prozentEuropages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumEuropa + "%";
        document.querySelector("#h2-4").innerHTML = europaCO2;
        document.querySelector("#p1").innerHTML = "Europe";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentEuropages + "%");
    }
    window.addEventListener('load', function(){
        document.querySelector(".europe").addEventListener("click", Europa);
        });


    //Text    
    function Afrika(){
        document.querySelector("#titleRegion").innerHTML = "Africa";
        document.querySelector("#h2-1").innerHTML = afrika2018;
        document.querySelector("#h2-2").innerHTML = prozentAfrikages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumAfrika + "%";
        document.querySelector("#h2-4").innerHTML = afrikaCO2;
        document.querySelector("#p1").innerHTML = "Africa";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentAfrikages + "%");
    }
    window.addEventListener('load', function(){
        document.querySelector(".africa",).addEventListener("click", Afrika);
        });


    //Text
    function SuedAmerika(){
        document.querySelector("#titleRegion").innerHTML = "South America";
        document.querySelector("#h2-1").innerHTML = suedAmerika2018;
        document.querySelector("#h2-2").innerHTML = prozentSuedAmerikages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumSuedAmerika + "%";
        document.querySelector("#h2-4").innerHTML = suedAmerikaCO2;
        document.querySelector("#p1").innerHTML = "South America";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentSuedAmerikages + "%");
     }
    window.addEventListener('load', function(){
        document.querySelector(".southamerica",).addEventListener("click", SuedAmerika);
        });


    //Text
    function NordAmerika(){
        document.querySelector("#titleRegion").innerHTML = "Morth America";
        document.querySelector("#h2-1").innerHTML = nordAmerika2018;
        document.querySelector("#h2-2").innerHTML = prozentNordAmerikages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumNordAmerika + "%";
        document.querySelector("#h2-4").innerHTML = nordAmerikaCO2;
        document.querySelector("#p1").innerHTML = "North America";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentNordAmerikages + "%");
    }
    window.addEventListener('load', function(){
        document.querySelector(".northamerica",).addEventListener("click", NordAmerika);
        });


    //Text
    function Asia(){
        document.querySelector("#titleRegion").innerHTML = "Asia";
        document.querySelector("#h2-1").innerHTML = asia2018;
        document.querySelector("#h2-2").innerHTML = prozentasiages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumAsia + "%";
        document.querySelector("#h2-4").innerHTML = asiaCO2;
        document.querySelector("#p1").innerHTML = "Asia";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentasiages + "%");
        }
        window.addEventListener('load', function(){
            document.querySelector(".asia",).addEventListener("click", Asia);
            });


    //Text
    function Australien(){
        document.querySelector("#titleRegion").innerHTML = "Australia";
        document.querySelector("#h2-1").innerHTML = australia2018;
        document.querySelector("#h2-2").innerHTML = prozentAustraliages + "%";
        document.querySelector("#h2-3").innerHTML = wachstumAustralia + "%";
        document.querySelector("#h2-4").innerHTML = australiaCO2;
        document.querySelector("#p1").innerHTML = "Australia";
        //Diagramm
        document.querySelector('.chart').setAttribute('style' 'height:' + prozentAustraliages + "%");
        }
        window.addEventListener('load', function(){
                document.querySelector(".australia",).addEventListener("click", Australien);
                });