// alert('Hello, World!');
const game = document.getElementById("game");
const wanimark = document.getElementById("wanimark");
const waniwani = document.getElementById("waniwani");
const score = document.getElementById("score");
const totalNum = document.getElementById("total");
const time = document.getElementById("sec");
const btn = document.getElementById("btn");
const h1 = document.getElementsByTagName("h1");
const yellowwani = document.getElementsByClassName("wani");
totalNum.innerText = "0";
waniwani.innerText = "ワニワニパニック";
let sec = 30
let flg = 0;
let count = 0;
let waniNumber = 0;

game.style.visibility="hidden";

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
    console.log(count);
    totalNum.innerText = count;
    wanigoY();
    // yellowwani.style.transform = "rotate(720deg)";
    // yellowwani.style.transition = "1s";

    // yellowwani.style.transform = "translate(0,0%)";
    // yellowwani.style.transition = "1s";
}

//waniY方向移動
function wanigoY () {
    yellowwani[waniNumber].style.transform = "translate(0,200%)";
    yellowwani[waniNumber].style.transition = "1s"; 
    setTimeout(wanireY,1000); 
}
function wanireY () {
    yellowwani[waniNumber].style.transform = "translate(0,0%)";
    yellowwani[waniNumber].style.transition = "1s"; 
}

//wani回転
function waniDown () {
    yellowwani[waniNumber].style.transform = "rotate(720deg)";
    yellowwani[waniNumber].style.transition = "1s"; 
}
yellowwani[waniNumber].addEventListener("click",counter);

//gameタイマー終了
function end() {
    setTimeout(end,1000);
    game.style.visibility="hidden";
    for (let i = 0; i < yellowwani.length;i++) {
        yellowwani[i].style.visibility="hidden";
    }
    h1[0].style.visibility = "visible";
    waniwani.innerText = "Finshi!!!!!!!!!";
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
    console.log(flg);
    if (sec > 0) {
        setTimeout(timerStart,1000);
        if (sec % 2 === 0) {
            waniNumber = Math.floor((Math.random() * 6));
            console.log(waniNumber);
            setTimeout(wanigoY,2500);
        }
    } else {
        end();
        // alert("終了");
        return;
    }
    sec--;
    time.innerText =sec;
}

btn.addEventListener("click",timerStart);
