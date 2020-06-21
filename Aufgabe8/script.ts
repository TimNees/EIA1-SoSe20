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
    if (record == true) {
        trashSounds.push(sampleplay)
    }
}

//Teil 2

//Funktionszuweisung
document.querySelector("#playbutton").addEventListener("click", playPause); // playPause abpspielen?


//Funktion für Loop (Hilfestellung Aufgabe 7.2 Punkt 4.)

var meineZaehlervariable: number= 0;


function loop() {

        meinInterval = setInterval(function () {
        playsample(meineZaehlervariable++);             //meineZaehlervariable++
        if (meineZaehlervariable >=3) {
            meineZaehlervariable = 0; 
        }
    }, 800);
    
}



//3. Aufgabe Stop und Play Button

var meinInterval;

function playPause{

    var abspielen = document.querySelector("#playbutton");


    if  (abspielen.getAttribute("class") == "fas fa-play") {
         abspielen.setAttribute ("class", "fas fa-stop");
         loop();
    } else {
        abspielen.setAttribute("class", "fas fa-play");
        stopLoop();
    }
    }
function stopLoop{
clearInterval(meinInterval);
}
    

//3. Aufgabe Beat Recorden

var record: boolean = false;

document.querySelector("#microfon").addEventListener("click", aufnehmen)

function aufnehmen () {

if (record == false){
    record = true
} else {
    record = false
}
}

//4. Aufgabe Trash

var trashSounds: number [] = [4, 5, 8];

document.querySelector("#trash").addEventListener("click", aufnahmedelete)

function aufnahmedelete(){
    trashSounds = [4, 5 , 8];
}

}




}


});

// Hilfestellung durch Herr Rausch in Besprechung mit Anna, Andy  &  ganz viele Mails mit Marcus 
