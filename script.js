// alert('Hello, World!');
const game = document.getElementById("game");
const wanimark = document.getElementById("wanimark");
const waniwani = document.getElementById("waniwani");
const score = document.getElementById("score");
const time = document.getElementById("sec");
const btn = document.getElementById("btn");
let sec = 30
game.style.visibility="hidden";
let count = 0;

function oncClicl(){
    document.getElementById("start").style.visibility="hidden";
    game.style.visibility="visible";
    //   location.href = "start.html";
}

waniwani.addEventListener("click",oncClicl);

function markClick(){
    console.log("he");
    game.style.visibility="hidden";
    document.getElementById("start").style.visibility="visible";    
    //   location.href = "index.html";
}


function counter() {
    count++;
    score.innerText = count;
}

// score.addEventListener("click",counter);

// function  timer() {
//   sec--;
// //   console.log(sec);
// //   document.getElementById("sec").textContent=String(sec).padStart(2,"0");
// return sec;
// }
time.innerText = String(sec).padStart(2,"0") ;

function timerStart() {
    if (sec > 0) {
        setTimeout(timerStart,1000);
    } else {
        alert("終了");
        return;
    }
    sec--;
    time.innerText =sec;
}

btn.addEventListener("click",timerStart);

//  setTimeout(timer,1000);//1秒毎に繰り返す
// console.log(sec);
// btn.onclick = function() {
//     alert('Hello, World!');
// }
