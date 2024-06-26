// ======================== nav list ========================//
let open = document.querySelector (".header-links .hove");
let nav = document.querySelector (".header-links nav")

open.addEventListener("click", function() {
    nav.classList.toggle("open");
});

// ======================== writing effect ========================//

let myJop = "مرحبا بك فى كلية الاداب جامعة اسيوط" ;
let index = 1 ;

function writeText() {
    document.querySelector(".landing-info .typing").textContent = myJop.slice(0 , index);

    index++

    if (index > myJop.length) {
        index = 1;
    }
}

setInterval(function(){
    writeText();
},140)