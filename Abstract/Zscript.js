const getStarted = document.querySelector(".get-started");
const checkBoxs = document.querySelectorAll("input");
const nextBtn = document.querySelectorAll(".next-btn");
const backBtn = document.querySelectorAll(".back-btn");
const submit = document.querySelector(".submit-btn");

var background = new Audio('sounds/background2.mp3');
var start = new Audio('sounds/start.wav');
var jump = new Audio('sounds/jump.mp3');
var nextBack = new Audio('sounds/nextBack.mp3');
var submitAudio = new Audio('sounds/submit.wav');

var scoreSelected = document.querySelector(".score");
let interval = 0;

let ans = [1,1,1,1,1,0,1,1,1,1,1,0];
let score = 0;
background.play();

background.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
getStarted.addEventListener("click", ()=>{
    // window.location.href = "http:localhost:3000/questions";
    // redirect to qustion one
    start.play();
    // console.log(checkBoxs.length);

})
console.log(backBtn.length, nextBtn.length);
for (let i = 0; i < backBtn.length; i++) {
    let btns = nextBtn[i]
    ;
    let btns2 = backBtn[i+1];
    if (btns != undefined)
    btns.addEventListener('click', ()=>{
        nextBack.play();
    })
    if (btns != undefined)
    btns2.addEventListener('click', ()=>{
        nextBack.play();
    })
}
for (let i = 0; i < checkBoxs.length; i++) {
    checkBoxs[i].checked = false;
}
submit.addEventListener("click", ()=>{
    submitAudio.play();
        for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked && ans[i] == 1) score+=1;
        checkBoxs[i].checked = false;
    }
    doCounting();
     
})

function doCounting(){
    if (1 == 1)
    {
        let startValue = 0;
        let endValue = parseInt((score * 100) / 10)+1;
        console.log(endValue, "End value", score, "Score");
        if (endValue !=0 ){
        let duration = 100;
        let counter = setInterval(function() {
         startValue += 1;
         scoreSelected.innerHTML = startValue + "%";
         if (startValue == endValue) {
             clearInterval(counter);
         }
         }, duration);
        }
     }
}
