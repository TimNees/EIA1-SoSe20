//Einfaches Array

var alleSounds:string[] = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"]

//Funktion/zuweisung

window.addEventListener("load", function(){

document.querySelector("#button1").addEventListener("click", function(): void {playsample(0)});
document.querySelector("#button2").addEventListener("click", function(): void {playsample(1)});
document.querySelector("#button3").addEventListener("click", function(): void {playsample(2)});
document.querySelector("#button4").addEventListener("click", function(): void {playsample(3)});
document.querySelector("#button5").addEventListener("click", function(): void {playsample(4)});
document.querySelector("#button6").addEventListener("click", function(): void {playsample(5)});
document.querySelector("#button7").addEventListener("click", function(): void {playsample(6)});
document.querySelector("#button8").addEventListener("click", function(): void {playsample(7)});
document.querySelector("#button9").addEventListener("click", function(): void {playsample(8)});


function playsample(sampleplay: number) {
    var sound = new Audio(alleSounds[sampleplay]);
    sound.play();
}

//Teil 2

//Funktionszuweisung
document.querySelector("#playbutton").addEventListener("click", loop);


//Funktion für Loop (Hilfestellung Aufgabe 7.2 Punkt 4.)

function loop() {
    setInterval(function() {
        playsample(4);
    }, 500);

    setInterval(function() {
        playsample(5);
    }, 800);

    setInterval(function() {
        playsample(8);
    }, 900);
}

});

// Hilfestellung durch Herr Rausch in Besprechung mit Marie & Kenan + Support in der Fehlersuche mit Dino ( Mail an Markus)