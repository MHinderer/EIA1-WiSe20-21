//Zahlenwerte der Länder

//Europa
var europa2008: number = 4965.7;
var europa2018: number = 4209.3;

//Nord Amerika
var nordAmerika2008: number = 6600.4;
var nordAmerika2018: number = 6035.6;

//suedAmerika
var suedAmerika2008: number = 1132.6;
var suedAmerika2018: number = 1261.5;

//afrika
var afrika2008: number = 1028;
var afrika2018: number = 1235.5;

//Asia
var asia2008: number = 12954.7;
var asia2018: number = 16274.1;

//Australien
var australia2008: number = 1993;
var australia2018: number = 2100.5;

//GesamtEmission
var gesEmission: number = afrika2018 + suedAmerika2018 + europa2018 + nordAmerika2018 + asia2018 + australia2018;



    // Ausgabe
    window.addEventListener('load', function(){
        document.querySelector(".europe").addEventListener("click", function(){
        domManipulator("Europa", europa2018, europa2008);
        })
        });

    window.addEventListener('load', function(){
        document.querySelector(".northamerica").addEventListener("click", function(){
        domManipulator("Nord Amerika", nordAmerika2018, nordAmerika2008);
        })
        });

    window.addEventListener('load', function(){
        document.querySelector(".southamerica").addEventListener("click", function(){
        domManipulator("Süd Amerika", suedAmerika2018, suedAmerika2008);
        })
        });

    window.addEventListener('load', function(){
        document.querySelector(".africa").addEventListener("click", function(){
        domManipulator("Afrika", afrika2018, afrika2008);
        })
        });

    window.addEventListener('load', function(){
        document.querySelector(".asia").addEventListener("click", function(){
        domManipulator("Asien", asia2018, asia2008);
        })
        });

    window.addEventListener('load', function(){
        document.querySelector(".australia").addEventListener("click", function(){
        domManipulator("Australia", australia2018, australia2008);
        })
        });


    //Funktion

    function domManipulator(kontinent: string, kontinent2018: number, kontinent2008: number){
        //Text
        document.querySelector(".titleRegion").innerHTML = kontinent;
        document.querySelector(".titleRegion2").innerHTML = kontinent;
        document.querySelector("#absoluteEmi").innerHTML = kontinent2018.toFixed(2) + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = (100 / (gesEmission / kontinent2018)).toFixed(2) + "%";
        document.querySelector("#growthPerEmi").innerHTML = (((kontinent2018 / kontinent2008) - 1) * 100).toFixed(2) + "%";
        document.querySelector("#growthAbsEmi").innerHTML = (kontinent2018 - kontinent2008).toFixed(2) + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + (100 / (gesEmission / kontinent2018)).toFixed(2) + "%" );
        }