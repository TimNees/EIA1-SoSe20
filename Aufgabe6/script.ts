window.addEventListener("load", function() {

document.querySelector(".europe").addEventListener("click", EuropeFunction);
document.querySelector(".africa").addEventListener("click", AfricaFunction);
document.querySelector(".southamerica").addEventListener("click", SouthAmericaFunction);
document.querySelector(".northamerica").addEventListener("click", NorthAmericaFunction);
document.querySelector(".asia").addEventListener("click", AsiaFunction);
document.querySelector(".australia").addEventListener("click", AustraliaFunction);

//Europa
function EuropeFunction() {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 7.392%");
    document.querySelector("#RegionName").innerHTML = "Europe";
    document.querySelector("#RegionNameZwei").innerHTML = "Europe in 2018";
    document.querySelector("#Wert1").innerHTML = "4209.3";
    document.querySelector("#Wert2").innerHTML = "7.392%";
    document.querySelector("#Wert3").innerHTML = "0.847%";
    document.querySelector("#Wert4").innerHTML = "-756.399kg";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 7.392%");
    
    
}

//Africa
function AfricaFunction () {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 25.185%");
    document.querySelector("#RegionName").innerHTML = "Africa";
    document.querySelector("#RegionNameZwei").innerHTML = "Africa in 2018";
    document.querySelector("#Wert1").innerHTML = "1235.5";
    document.querySelector("#Wert2").innerHTML = "25.185%";
    document.querySelector("#Wert3").innerHTML = "1.201%";
    document.querySelector("#Wert4").innerHTML = "207.5kg";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 25.185%");
}

//Southamerica
function SouthAmericaFunction () {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 24.666%");
    document.querySelector("#RegionName").innerHTML = "SouthAmerica";
    document.querySelector("#RegionNameZwei").innerHTML = "SouthAmerica in 2018";
    document.querySelector("#Wert1").innerHTML = "1261.5";
    document.querySelector("#Wert2").innerHTML = "24.666%";
    document.querySelector("#Wert3").innerHTML = "1.113%";
    document.querySelector("#Wert4").innerHTML = "128.900kg";
    document.querySelector("Text1").innerHTML="Emission absolute of Africa in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 24.666%");
    }

//Northamerica
function NorthAmericaFunction () {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 5.155%");
    document.querySelector("#RegionName").innerHTML = "NorthAmerica";
    document.querySelector("#RegionNameZwei").innerHTML = "NorthAmerica in 2018";
    document.querySelector("#Wert1").innerHTML = "6035.6kg";
    document.querySelector("#Wert2").innerHTML = "5.155%";
    document.querySelector("#Wert3").innerHTML = "0.914%";
    document.querySelector("#Wert4").innerHTML = "-564.799kg";
    document.querySelector("Text1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 5.155%");
    }

//Asia
function AsiaFunction() {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 1.912%");
    document.querySelector("#RegionName").innerHTML = "Asia";
    document.querySelector("#RegionNameZwei").innerHTML = "Asia in 2018";
    document.querySelector("#Wert1").innerHTML = "16274.1 ";
    document.querySelector("#Wert2").innerHTML = "1.912%";
    document.querySelector("#Wert3").innerHTML = "1.256%";
    document.querySelector("#Wert4").innerHTML = "3319.399kg";
    document.querySelector("Text1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 1.912%");
    }

//Australia
function AustraliaFunction() {
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14.813%");
    document.querySelector("#RegionName").innerHTML = "Australia";
    document.querySelector("#RegionNameZwei").innerHTML = "Australia in 2018";
    document.querySelector("#Wert1").innerHTML = "2100.5kg";
    document.querySelector("#Wert2").innerHTML = "14.813%";
    document.querySelector("#Wert3").innerHTML = "1.053%";
    document.querySelector("#Wert4").innerHTML = "107,5kg";
    document.querySelector("Text1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14.813%");
    }
})


