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



//Konsolenausgabe

    //GesamtEmission
    console.log('Gesamt Emission 2018: '+ ges2018);
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Afrika
    console.log('Die Emission von Afrika 2018 ist: '+ afrika2018 +'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfrikages + '%');
    console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAfrika + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + afrikaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Süd Amerika
    console.log('Die Emission von Süd Amerika 2018 ist: ' + suedAmerika2018 + 'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + prozentSuedAmerikages + '%');
    console.log('Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumSuedAmerika + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + suedAmerikaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Europa
    console.log('Die Emission von Europa 2018 ist: ' + europa2018 + 'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropages + '%');
    console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumEuropa + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + europaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Nord Amerika
    console.log('Die Emission von Nord Amerika 2018 ist: ' + nordAmerika2018 + 'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit ' + prozentNordAmerikages + '%');
    console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumNordAmerika + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + nordAmerikaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Asien
    console.log('Die Emission von Asien 2018 ist: ' + asia2018 + 'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentasiages + '%');
    console.log('Für Nord Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAsia + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + asiaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');

    //Australien
    console.log('Die Emission von Australien 2018 ist: ' + australia2018 + 'kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustraliages + '%');
    console.log('Für Nord Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAustralia + '% verändert');
    console.log('2018 im Vergleich zu 2008 sind das ' + australiaCO2 + 'kg CO2”');
    console.log('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   ');