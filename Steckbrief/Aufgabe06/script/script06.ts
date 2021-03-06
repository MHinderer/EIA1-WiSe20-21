//Zahlenwerte

//Europa
var europa2008:number = 4965.7;
var europa2018:number = 4209.3;

//Nord Amerika
var nordAmerika2008:number = 6600.4;
var nordAmerika2018:number = 6035.6;

//Süd Amerika
var suedAmerika2008:number = 1132.6;
var suedAmerika2018:number = 1261.5;

//Afrika
var afrika2008:number = 1028;
var afrika2018:number = 1235.5;

//Asien
var asien2008:number = 12954.7;
var asien2018:number = 16274.1;

//Australien
var australien2008:number = 1993;
var australien2018:number = 2100.5;

//gesEmission
var gesEmission:number = europa2018 + nordAmerika2018 + suedAmerika2018 + afrika2018 + asien2018 + australien2018;



//Ausgabe
window.addEventListener('load', function(){
    document.querySelector(".europe").addEventListener("click", function()
    {
    domManipulator("Europe", europa2018, europa2008);
    })
});

window.addEventListener('load', function(){
    document.querySelector(".northamerica").addEventListener("click", function()
    {
    domManipulator("North America", nordAmerika2018, nordAmerika2008);
    })
});

window.addEventListener('load', function(){
    document.querySelector(".southamerica").addEventListener("click", function()
    {
    domManipulator("South America", suedAmerika2018, suedAmerika2008);
    })
});

window.addEventListener('load', function(){
    document.querySelector(".africa").addEventListener("click", function()
    {
    domManipulator("Africa", afrika2018, afrika2008);
    })
});

window.addEventListener('load', function(){
    document.querySelector(".asia").addEventListener("click", function()
    {
    domManipulator("Asia", asien2018, asien2008);
    })
});

window.addEventListener('load', function(){
    document.querySelector(".australia").addEventListener("click", function()
    {
    domManipulator("Australia", australien2018, australien2008);
    })
});


//Funktion
function domManipulator(kontinent:string, kontinent2018:number, kontinent2008:number)
{
    document.querySelector("#titleRegion").innerHTML = kontinent;
    document.querySelector("#titleRegion2").innerHTML = kontinent;
    document.querySelector("#absoluteEmi").innerHTML = kontinent2018.toFixed(2) + "CO2 kg";
    document.querySelector("#totalEmi").innerHTML = (100 / (gesEmission / kontinent2018)).toFixed(2) + "%";
    document.querySelector("#growthPerEmi").innerHTML = (((kontinent2018 / kontinent2008) - 1) * 100).toFixed(2) + "%";
    document.querySelector("#growthAbsEmi").innerHTML = (kontinent2018 - kontinent2008).toFixed(2) + "CO2 kg";

    document.querySelector(".chart").setAttribute('style', 'height:' + (100 / (gesEmission / kontinent2018)).toFixed(2) + "%");
}