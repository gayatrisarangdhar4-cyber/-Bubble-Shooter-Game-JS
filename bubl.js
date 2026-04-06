var timer = 30;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var clutter = "";

 for (var i = 1; i <= 171; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`; 
 }

 document.querySelector("#pbtm").innerHTML = clutter;
 }


 //in this we are using CONSTRUCTOR FUN => we can use another fun in an parent fun
 function runTimer(){
   var timerint = setInterval(function(){
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER!</h1>`;
    }
   }, 1000);
   //in this timer  funn we are use CALLBACK  FUN => we are syaing  the porog to run this fun after some time / or after given time
 }

 function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn 
 }

 function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
 }

document.querySelector("#pbtm").addEventListener("click", 
    function(dets) {
     var clickednum = Number(dets.target.textContent);
      if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
      }
    });

 makeBubble();
 runTimer();
 getNewHit();



