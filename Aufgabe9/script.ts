let myList: string[] = ["Hausaufgaben", "Video schneiden", "Lernen"];

let trash: HTMLElement = document.querySelector(".fas fa-trash-alt");
drawList();
function drawList() {
    document.querySelector("#todos").innerHTML = "";
    for (let index = 0; index < myList.length; index++) {
        document.querySelector("#todos").innerHTML += "<div>" + "<input type='checkbox'>" + myList[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "<div>";
    }
    var total: HTMLElement = document.querySelector("#total");
        total.innerHTML = myList.length;
    }

}


document.querySelector("#newTodoButton").addEventListener("click", addNewElement);

function addNewElement() {
    var neuerTodoTitel: string = document.querySelector("#eingabeFeld").value;
    myList.push(neuerTodoTitel);
    drawList();
}

document.querySelector("#trash").addEventListener("click", eintragloeschen);

function eintragLoeschen() {
    clearInterval(index);
}
drawList();


//Hilfestellung durch Herr Rausch in der Fragestunde