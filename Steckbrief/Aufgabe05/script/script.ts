var ges2018: number = afrika2018 + suedAmerika2018 + europa2018 + nordAmerika2018 + asia2018 + australia2018;
console.log(ges2018);


//afrika
var afrika2008: number = 1028;
var afrika2018: number = 1235.5;
console.log('Die Emission von Afrika 2018 ist: '+ afrika2018 +'kg CO2');

var prozentAfrikages: number = ((afrika2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfrikages + '%');

var wachstumAfrika: number = (((afrika2018 / afrika2008) - 1) * 100).toFixed(2);
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAfrika + '% verändert');

var afrikaCO2: number = (afrika2018 - afrika2008);
console.log('2018 im Vergleich zu 2008 sind das ' + afrikaCO2 + 'kg CO2”');



//suedAmerika
var suedAmerika2008: number = 1132.6;
var suedAmerika2018: number = 1261.5;
console.log('Die Emission von Süd Amerika 2018 ist: ' + suedAmerika2018 + 'kg CO2');

var prozentSuedAmerikages: number = ((suedAmerika2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + prozentSuedAmerikages + '%');

var wachstumSuedAmerika: number = (((suedAmerika2018 / suedAmerika2008) - 1) * 100).toFixed(2);
console.log('Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumSuedAmerika + '% verändert');

var suedAmerikaCO2: number = (suedAmerika2018 - suedAmerika2008).toFixed(2);
console.log('2018 im Vergleich zu 2008 sind das ' + suedAmerikaCO2 + 'kg CO2”');



//Europa
var europa2008: number = 4965.7;
var europa2018: number = 4209.3;
console.log('Die Emission von Europa 2018 ist: ' + europa2018 + 'kg CO2');

var prozentEuropages: number = ((europa2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropages + '%');

var wachstumEuropa: number = (((europa2018 / europa2008) - 1) * 100).toFixed(2);
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumEuropa + '% verändert');

var europaCO2: number = (europa2018 - europa2008).toFixed(2);
console.log('2018 im Vergleich zu 2008 sind das ' + europaCO2 + 'kg CO2”');



//Nord Amerika
var nordAmerika2008: number = 6600.4;
var nordAmerika2018: number = 6035.6;
console.log('Die Emission von Nord Amerika 2018 ist: ' + nordAmerika2018 + 'kg CO2');

var prozentNordAmerikages: number = ((nordAmerika2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit ' + prozentNordAmerikages + '%');

var wachstumNordAmerika: number = (((nordAmerika2018 / nordAmerika2008) - 1) * 100).toFixed(2);
console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumNordAmerika + '% verändert');

var nordAmerikaCO2: number = (nordAmerika2018 - nordAmerika2008).toFixed(2);
console.log('2018 im Vergleich zu 2008 sind das ' + nordAmerikaCO2 + 'kg CO2”');


//Asia
var asia2008: number = 12954.7;
var asia2018: number = 16274.1;
console.log('Die Emission von Asien 2018 ist: ' + asia2018 + 'kg CO2');

var prozentasiages: number = ((asia2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentasiages + '%');

var wachstumAsia: number = (((asia2018 / asia2008) - 1) * 100).toFixed(2);
console.log('Für Nord Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAsia + '% verändert');

var asiaCO2: number = (asia2018 - asia2008).toFixed(2);
console.log('2018 im Vergleich zu 2008 sind das ' + asiaCO2 + 'kg CO2”');


//Australien
var australia2008: number = 1993;
var australia2018: number = 2100.5;
console.log('Die Emission von Australien 2018 ist: ' + australia2018 + 'kg CO2');

var prozentAustraliages: number = ((australia2018 / ges2018) * 100).toFixed(2);
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustraliages + '%');

var wachstumAustralia: number = (((australia2018 / australia2008) - 1) * 100).toFixed(2);
console.log('Für Nord Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAustralia + '% verändert');

var australiaCO2: number = (australia2018 - australia2008).toFixed(2);
console.log('2018 im Vergleich zu 2008 sind das ' + australiaCO2 + 'kg CO2”'); 