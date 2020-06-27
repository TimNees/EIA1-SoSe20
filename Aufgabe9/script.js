"use strict";
let myList = ["Hausaufgaben", "Video schneiden", "Lernen"];
function drawList() {
    document.querySelector("#todos").innerHTML = "";
    for (let index = 0; index < myList.length; index++) {
        document.querySelector("#todos").innerHTML += "<li>" + myList[index] + "<li>";
    }
}
document.querySelector("#newTodoButton").addEventListener("click", addNewElement);
function addNewElement() {
    var neuerTodoTitel = document.querySelector("#eingabeFeld").value;
    myList.push(neuerTodoTitel);
    drawList();
}
drawList();
//# sourceMappingURL=script.js.map