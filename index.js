let nBox = 1;
let img1;
let img2;
let fplayer=0;
let splayer=0;

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}
function playSnakeAudio() {
    var audio = document.getElementById('mySnakeAudio');
    audio.play();
}
function playladderAudio() {
    var audio = document.getElementById('myladderAudio');
    audio.play();
}
function startgame(element){
    element.style.display='none';
    winingAudio.play();
}
let player1=document.getElementById('player1');
let player2=document.getElementById("player2");

function firstplayer(){
    fplayer=fplayer+k;
    players(fplayer);
    let myh=goForward(fplayer);
    fplayer=myh;
    goForwardRed(myh);
}
function secondplayer(){
    splayer=splayer+k;
    players(splayer);
    let mya=goForward(splayer);
    splayer=mya;
    goForwardBlue(mya);
}

function players(nBox){
    if(nBox>90){
        let p=nBox+k;
        if(p<100){
            nBox=nBox+k;
            console.log(k,nBox);
        }
        else if(p==100){
            let myelement=document.querySelector('.joy');
            myelement.style.display='block';
            nBox=nBox+k;
            winingAudio.play();
            setTimeout(()=>{
                nBox=nBox+k;
                let myelement=document.querySelector('.joy');
                myelement.style.display='none';
            },2000);
        }
        else if(nBox >= 100) {
            // let myelement=document.querySelector('.joy');
            // myelement.style.display='none';
            nBox = 1;
        }
}
else{
    nBox=nBox+k;
}
}

let winingAudio=new Audio('images/winneraudio.wav');
let k;
let mybool=true;
function generateRandomnum(btnelement) {
     k = Math.floor(Math.random() * 6) + 1;
    btnelement.innerText = k;
   mybool=!mybool;
   if(mybool){
    player1.innerText = k;
    player2.innerText = 'play now';
    firstplayer();
   }
   else{
    player2.innerText = k;
    player1.innerText = 'play now';
    secondplayer();
   }
    playAudio();
}

function goForward(num) {
    if (num == 4) {
        playladderAudio();
        nBox=38;
    } else if (num == 10) {
        playladderAudio();
        nBox =29;
    } else if (num == 20) {
        playladderAudio();
        nBox=41;
    } else if (num == 36) {
        playladderAudio();
        nBox =87;
    } else if (num == 31) {
        playladderAudio();
        nBox= 71;
    } else if (num == 64) {
        playladderAudio();
        nBox =98;
    } else if (num == 57) {
        playSnakeAudio();
        nBox= 2;
    } else if (num == 27) {
        playSnakeAudio();
        nBox =9;
    } else if (num == 54) {
        playSnakeAudio();
        nBox= 25;
    } 
    else if(num ==73) {
        playSnakeAudio();
        nBox= 33;
    } else if (num == 91) {
        playSnakeAudio();
        nBox= 52;
    }
    else if (num == 96) {
        playSnakeAudio();
        nBox = 65;
    } else if (num == 82) {
        playSnakeAudio();
        nBox= 60;
    } 
    else if(num>100){
        nBox=1;
    }  
    else{
        nBox=num;
    }
    return nBox;
}

function goForwardRed(nBox){
    if(img1){
        img1.style.display='none';
    }
    let mybox = document.querySelector('.box' + `${nBox}`);
    img1 = document.createElement('img');
    img1.src = 'images/yellogoti.png';
    img1.classList.add("user");
    mybox.appendChild(img1);
}
function goForwardBlue(nBox){
    if(img2){
        img2.style.display='none';
    }
    let mybox = document.querySelector('.box' + `${nBox}`);
    img2 = document.createElement('img');
    img2.src = 'images/purplegoti.jpeg';
    img2.classList.add("user");
    mybox.appendChild(img2);
}
   
    
let myarr = [];
let nodelist = document.querySelectorAll(".box");
for (let i = 0; i < nodelist.length - 1; i++) {
    myarr.push(nodelist[i]);
}
// add background color to div
for (let i = 1; myarr.length - 1; i += 3) {
    myarr[i].classList.add("evenbox");
}
