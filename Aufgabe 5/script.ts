var emissionGesamt: number = 31116.5;
var textGesamt: string = "Die Emission von ZZ ist: XX kg CO2";
var textRelativ: string = "Relativ zur Gesamtemission der Welt verursacht ZZ damit XX%";
var textChange: string = "Für ZZ hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert";
var textVergleich: string = "2018 im Vergleich zu 2008 sind das XX kg CO2";
var prozentAnteil: number;
var prozentAnteilChange: number;
var anteilChange: number;

var resultGesamt: string;
var resultRelativ: string;
var resultChange: string;
var resultVergleich: string;

var emission2018: number;
var emission2008: number;
var land: string;

//Europa
land = "Europa";
emission2018 = 4209.3;
emission2008  = 4965.7;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");

//Africa
land = "Africa";
emission2018 = 1235.5;
emission2008  = 1028;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");

//South America
land = "South America";
emission2018 = 1261.5;
emission2008  = 1132.6;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");

//North America
land = "North America";
emission2018 = 6035.6;
emission2008  = 6600.4;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");

//Asia
land = "Asia";
emission2018 = 16274.1;
emission2008  = 12954.7;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");

//Australia
land = "Australia";
emission2018 = 2100.5;
emission2008  = 1993;
prozentAnteil = emissionGesamt / emission2018;
prozentAnteilChange = emission2018 / emission2008;
anteilChange = emission2018 - emission2008;

resultGesamt = textGesamt.replace("XX", emission2018.toString());
resultRelativ = textRelativ.replace("XX", prozentAnteil.toString());
resultChange = textChange.replace("XX", prozentAnteilChange.toString());
resultVergleich = textVergleich.replace("XX", anteilChange.toString());

resultGesamt = resultGesamt.replace("ZZ", land);
resultRelativ = resultRelativ.replace("ZZ", land);
resultChange = resultChange.replace("ZZ", land);

console.log(resultGesamt);
console.log(resultRelativ);
console.log(resultChange);
console.log(resultVergleich);
console.log("");
