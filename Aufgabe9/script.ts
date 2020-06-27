let myList: string[] = ["Hausaufgaben", "Video schneiden", "Lernen"];

drawList();

function drawList() {
    document.querySelector("#todos").innerHTML= "";
    for (let index = 0; index < myList.length; index++) {
        document.querySelector("#todos").innerHTML += "<div>" + myList[index] + "<div>";
}
}

document.querySelector("#newTodoButton").addEventListener("click", addNewElement);

function addNewElement() {
    var neuerTodoTitel: string = document.querySelector("#eingabeFeld").value;
    myList.push(neuerTodoTitel);
    drawList();
}

document.querySelector("#trash").addEventListener("click", eintragloeschen )

function eintragLoeschen() {
    clearInterval(index);
}
drawList();


//Hilfestellung durch Herr Rausch in der Fragestunde