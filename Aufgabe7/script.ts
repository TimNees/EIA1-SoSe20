//Arry erstellen und jeden Sound einbinden

var fullSounds:string[] = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3" "snare.mp3" ]

//querySelector

document.querySelector("#button1").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button2").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button3").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button4").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button5").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button6").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button7").addEventListener("click", function(): void {playsample(0)}));
document.querySelector("#button8").addEventListener("click", function(): void {playsample(0)}););
document.querySelector("#button9").addEventListener("click", function(): void {playsample(0)}););


// Funktion

function playsample(buttonnumber) {
var sound = new Audio (fullsounds[buttonnumber]);
sound.play();
}