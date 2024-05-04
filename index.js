let nBox = 1;
let img;

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
let winingAudio=new Audio('images\success-1-6297.mp3');
let k;
function generateRandomnum(btnelement) {
     k = Math.floor(Math.random() * 6) + 1;
    btnelement.innerText = k;
    let box = document.querySelector('.box' + `${nBox}`);
    if (img) {
        img.style.display = "none";
    }
    if(nBox>90){
            let p=nBox+k;
            if(p<100){
                nBox=nBox+k;
                console.log(k,nBox);
            }
            else if(p==100){
                let myelement=document.querySelector('.joy');
                myelement.style.display='block';
                // nBox=nBox+k;
                // location.reload();
                nBox=100;
                setTimeout(()=>{
                    nBox=nBox+k;
                },1000);
            }
            else if(nBox >= 100) {
                let myelement=document.querySelector('.joy');
                myelement.style.display='none';
                nBox = 1;
            }
    }
    else{
        nBox=nBox+k;
    }
    playAudio();
    return goForward(nBox);
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
    } else if (num == 96) {
        playSnakeAudio();
        nBox = 65;
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
    let mybox = document.querySelector('.box' + `${nBox}`);
    img = document.createElement('img');
    img.src = 'images/goti.png';
    img.classList.add("user");
    mybox.appendChild(img);
}

let myarr = [];
let nodelist = document.querySelectorAll(".box");
for (let i = 0; i < nodelist.length - 1; i++) {
    myarr.push(nodelist[i]);
}
for (let i = 1; myarr.length - 1; i += 3) {
    myarr[i].classList.add("evenbox");
}
