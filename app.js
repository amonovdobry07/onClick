const bottom_in = document.querySelector(".bottom-in")
const body = document.getElementById('body')
const white = document.getElementById("white")
const white1 = document.getElementById("white1")
const bottom = document.getElementById("bottom1")
const topp = document.getElementById("top")
const head = document.getElementById("headd")
const uzgarishlar = document.getElementsByClassName("uzgarish")



function chek(){
    bottom_in.classList.toggle('bt_in')
    body.classList.toggle("body-in")
    white.classList.toggle("white1")
    white1.classList.toggle("white2")
    bottom.classList.toggle("bottom1")
    for (let i = 0 ;i<uzgarishlar.length;i++){
        uzgarishlar[i].classList.toggle("uzgarish2")
    }
    
}

function change(){
    topp.classList.toggle("top_change")
    head.classList.toggle("head_change")
}




