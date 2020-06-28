"use strict";
let myList = ["Hausaufgaben", "Video schneiden", "Lernen"];
let trash = document.querySelector(".fas fa-trash-alt");
drawList();
function drawList() {
    document.querySelector("#todos").innerHTML = "";
    for (let index = 0; index < myList.length; index++) {
        document.querySelector("#todos").innerHTML += "<div>" + "<input type='checkbox'>" + myList[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "<div>";
    }
}
document.querySelector("#newTodoButton").addEventListener("click", addNewElement);
function addNewElement() {
    var neuerTodoTitel = document.querySelector("#eingabeFeld").value;
    myList.push(neuerTodoTitel);
    drawList();
}
document.querySelector("#trash").addEventListener("click", eintragloeschen);
function eintragLoeschen() {
    clearInterval(index);
}
drawList();
//Hilfestellung durch Herr Rausch in der Fragestunde
//# sourceMappingURL=script.js.map