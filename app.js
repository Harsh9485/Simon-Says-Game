let gaseq = [];
let userseq = [];
let btn = ["yellow","red","purple","green"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let highsccur = 0;

document.addEventListener("keydown", function(){
    if(start == false){
    console.log("ga started");
    start = true;
    levelup()
    }
})

function btnFlash(btns) {
    btns.classList.add("flash")
    setTimeout(() => {
        btns.classList.remove("flash"); 
    }, 250);
}

function userFlash(btns) {
    btns.classList.add("userflash")
    setTimeout(() => {
        btns.classList.remove("userflash"); 
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randoind = Math.floor(Math.random() * 4);
    let randoColor = btn[randoind];
    let randomBtn = document.querySelector(`.${randoColor}`);
    // console.log(randoind);
    // console.log(randoColor)
    // console.log(randomBtn)
    gaseq.push(randoColor);
    console.log(gaseq)
    btnFlash(randomBtn);
}

function checkans(index) {
    // console.log("crant level",level)
    
    if(gaseq[index] === userseq[index]){
        console.log("true");
        if (gaseq.length == userseq.length) {
            setTimeout( levelup,1000);
        }
    }else{
        h2.innerHTML = `gae over your sccur <b> ${level-1} </b> <br> praas any key to gan start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        
        if(level > highsccur)
        {
            highsccur = level;
            h3.innerHTML = `high seccur = ${highsccur-1}`
        }
        
        reset();
    }
}

function btnPrass() {
    console.log(this);
    let btn = this;

    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);

}

let btnall = document.querySelectorAll(".box");
for(box of btnall) {
    box.addEventListener("click",btnPrass)
}

function reset() {
    start = false;
    gaseq = [];
    userseq = [];
    level = 0;
}