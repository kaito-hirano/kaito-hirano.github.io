'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ゲーム選択画面------------------------------------------

const waniBtn = document.getElementById("wani_btn");
const numeronBtn = document.getElementById("numeron_btn");
const wanipani = document.getElementById("wanipani");
const numeron = document.getElementById("numeron");

wanipani.style.visibility = "hidden";
numeron.style.visibility = "hidden";

function waniST () {
  waniBtn.style.visibility = "hidden";
  numeronBtn.style.visibility = "hidden";
  wanipani.style.visibility = "visible";
}

function numeST () {
  waniBtn.style.visibility = "hidden";
  numeronBtn.style.visibility = "hidden";
  numeron.style.visibility = "visible";
}

waniBtn.addEventListener("click",waniST);
numeronBtn.addEventListener("click",numeST);


//ヌメロン初期設定------------------------------------------------------------------------------

const start = document.getElementById("numeron_start");
const setText = document.getElementById("set_text");
const numSet = document.getElementsByClassName("num_select");
const numCler = document.getElementById("num_cler");
const attack = document.getElementById("attack");
const setNum = document.getElementById("set_num");
const result = document.getElementById("result");
const endNume = document.getElementById("end");
const stamp = document.getElementById("stamp");

stamp.style.visibility = "hidden";
endNume.style.visibility = "hidden";
numeron.style.visibility = "hidden";
let user1 = [];
let selectNum = [];
let attResult = [];
let count = 0;
let strKeep = 0;
let command = 0;

//ワニワニパニック初期設定------------------------------------------------------------------------------
const waniStart = document.getElementById("wani_start");
const waniGame = document.getElementById("wani_game");
const waniText = document.getElementById("waniwani");
const timerText = document.getElementById("timer");
const sucorText = document.getElementById("sucor");
const wanigameST = document.getElementById("wani_gameST");
const yellowwani = document.getElementsByClassName("wani");
waniGame.style.visibility = "hidden";
let  timer = 30;
let sucor = 0;
let flg = 0;
let count1 = 0;
let waniNumber = 0;
waniText.innerText = "ワニワニパニック";
sucorText.innerText = sucor;
timerText.innerText = String(timer).padStart(2,"0");


//ワニワニパニック##################################################################
//ワニワニパニックゲーム画面移行------------------------------------------

function wani () {
  waniStart.style.visibility = "hidden";
  waniGame.style.visibility = "visible";
}

waniText.addEventListener("click",wani);

//タイマー機能------------------------------------------

function timerStart() {
  wanigameST.style.visibility =   "hidden"; 
    if (timer > 0) {
      setTimeout(timerStart,1000);
      if (timer % 2 === 0) {
        waniNumber = Math.floor((Math.random() * 8));
        setTimeout(wanigoY,2500);
      }
    } else {
      alert(`スコア： ${count1} 点`);
      window.location.reload();
    }
    timer--;
    timerText.innerText =timer;
}

wanigameST.addEventListener("click",timerStart);

//yellowwani移動設定------------------------------------------

//waniY方向移動
function wanigoY () {
  yellowwani[waniNumber].style.transform = "translate(0,500%)";
  yellowwani[waniNumber].style.transition = "1s"; 
  setTimeout(wanireY,1000); 
}
function wanireY () {
  yellowwani[waniNumber].style.transform = "translate(0,0%)";
  yellowwani[waniNumber].style.transition = "1s"; 
}

//wani回転
function waniDown () {
  yellowwani[waniNumber].style.transform = "rotate(360deg)";
  yellowwani[waniNumber].style.transition = "0.1s"; 
}

//スコア------------------------------------------

function counter() {
  count1++;
  sucorText.innerText = count1;
}

yellowwani[0].addEventListener("click",counter);
yellowwani[1].addEventListener("click",counter);
yellowwani[2].addEventListener("click",counter);
yellowwani[3].addEventListener("click",counter);
yellowwani[4].addEventListener("click",counter);
yellowwani[5].addEventListener("click",counter);
yellowwani[6].addEventListener("click",counter);
yellowwani[7].addEventListener("click",counter);


//ヌメロン############################################################################
//ランダムナンバー設定------------------------------------------------------------------

function settei() {
  if (strKeep === 0) {
  user1 = [];
  setNum.innerText = user1.join("");
  for (let countUp = 0; countUp < 3; countUp++){
  let random = Math.floor(Math.random() * 9);
    if (user1.indexOf(random) == -1) {
      user1.push(random);
    } else if (user1.length < 3){
      countUp--;
    }
  }
  // user1 = window.prompt("0~9数字から３つ選んで入力してください　　※同じ数字は使用不可", "");
  // console.log(user1);
  user1 = [...user1];
  setNum.innerText = "❔❔❔数字を3つ選択してATTACK!!!";
  strKeep = 1;
  start.style.visibility = "hidden";
  }
}

start.addEventListener("click",settei);

//ユーザーナンバー選択------------------------------------------------------------------

function numSelect (event) {
  command = 0;
  if (selectNum.length < 3 && selectNum.indexOf(event.target.innerText) === -1) { 
    selectNum.push(event.target.innerText);
  }
  setText.innerText = selectNum.join("");
}

//ユーザーナンバー１つ消す----------------------------------------------------------------

function clear () {
  command++;
  if (command >= 10) {
    comMord();
  }
  selectNum.pop();
  setText.innerText = selectNum.join("");
}

numCler.addEventListener("click",clear);

//コマンドモード移行---------------------------------------------------------------------

function comMord() {
  setNum.innerText = user1.join(" ");
  command = 0;
  setTimeout(comReset,1000);
}

function comReset() {
  setNum.innerText = "❔❔❔数字を3つ選択してATTACK!!!";
}

//ATTACK設定---------------------------------------------------------------------------

function attackNum () {
  if (user1.length === 0) {
    alert("STARTボタンを押してからATTACKしてください");
    return;
  } else if (selectNum.length < 3) {
    alert("3つ数字を選択してからATTACKしてください");
    return;
  }
  attResult.push(selectNum.join(""));
  result.innerText = attResult.join("");
  check();
}

//GameClear設定---------------------------------------------------------------------------

function gameClear () {
  endNume.innerText = "Congratulation!!!!!" ;
  setText.style.visibility = "hidden";
  endNume.style.visibility = "visible";
  stamp.style.visibility = "visible";
  setTimeout(doReload,5000);
}

//GameOver設定---------------------------------------------------------------------------

function gameOver () {
  endNume.innerText = `gameOver!!!正解は ${user1.join(" ")}`;
  setText.style.visibility = "hidden";
  endNume.style.visibility = "visible";
  setTimeout(doReload,5000);
}

//ページリロード設定---------------------------------------------------------------------

function doReload() {
  // reloadメソッドによりページをリロード
  window.location.reload();
}

//Last Chance---------------------------------------------------------------------

function lastChance () {
  endNume.style.visibility = "hidden";
}

//ナンバーチェック設定-------------------------------------------------------------------

function check () {
  let hit = 0;
  let bro = 0;
  let checkflg = 0;
  for (let i = 0; i < 3;i++) {
    for (let x = 0; x < 3;x++) {
      if (user1[i] == selectNum[x] && i === x  && checkflg === 0) {
        hit++;
        checkflg = 1;
      } else if (user1[i] == selectNum[x] && i != x && checkflg === 0) {
        bro++;
        checkflg = 1;
        break;
      }
    }
    checkflg = 0;
  }
  count++;
  attResult.push(`:${hit} H ${bro} B`);
  attResult.push("\n");
  result.innerText = attResult.join("");
  if (hit === 3){
    gameClear();
  } else if (count === 5) {
    endNume.innerText = `Last Chance`;
    endNume.style.visibility = "visible";
    setTimeout(lastChance,3000);       
  } else if (count === 6) {
    gameOver();
  }
  selectNum = [];
  setText.innerText = selectNum.join("");
}

attack.addEventListener("click",attackNum);

//ナンバー選択設定-------------------------------------------------------------------

numSet[0].addEventListener("click",numSelect);
numSet[1].addEventListener("click",numSelect);
numSet[2].addEventListener("click",numSelect);
numSet[3].addEventListener("click",numSelect);
numSet[4].addEventListener("click",numSelect);
numSet[5].addEventListener("click",numSelect);
numSet[6].addEventListener("click",numSelect);
numSet[7].addEventListener("click",numSelect);
numSet[8].addEventListener("click",numSelect);
numSet[9].addEventListener("click",numSelect);


//-------------------------------------------------------------------
