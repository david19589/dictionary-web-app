const toggle = document.getElementById("toggle-slider");
const background = document.getElementById("background");
const font = document.getElementById("font-head");
const input = document.getElementById("input");
const p = document.getElementsByClassName("p-1");
const h1 = document.getElementsByTagName("h1");
const search = document.getElementById("search");
const error = document.getElementById("error");
const sansFont = document.getElementById("sans");
const serifFont = document.getElementById("serif");
const monoFont = document.getElementById("mono");
const container2 = document.getElementById("container-2");
const container3 = document.getElementById("container-3");
const selectFont = document.getElementById("select-font");
const fontWindow = document.getElementById("font-window");
const play = document.getElementById("play");
const playActive = document.getElementById("play-active");
const song = document.getElementById("song");

const validword = "keyboard";

toggle.addEventListener("click", (e) => {
    if (toggle.classList != ("toggle-slider selected")){
        toggle.classList.remove("selected");
        toggle.classList.add("selected");
        background.style.background = "#000";
        font.style.color = "#FFF";
        input.style.color = "#FFF";
        input.style.background = "#1F1F1F";
        for (let i = 0; i < p.length; i++){
        p[i].style.color = "#FFF";
        }
        for (let i = 0; i < h1.length; i++){
        h1[i].style.color = "#FFF";
        }
        if (input.classList != ("input input-2")){
            input.classList.remove("input-2");
            input.classList.add("input-2");
        }
        fontWindow.style.backgroundColor = "#1F1F1F";
        fontWindow.style.boxShadow = "0px 5px 30px 0px #A445ED";
    } else {
        toggle.classList.remove("selected");
        input.classList.remove("input-2");
        background.style.background = "";
        font.style.color = "";
        input.style.background = "";
        input.style.color = "";
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "";
            }
        for (let i = 0; i < h1.length; i++){
            h1[i].style.color = "";
            }
            fontWindow.style.backgroundColor = "";
            fontWindow.style.boxShadow = "";
    }
});

search.addEventListener("click", (e) => {
    if (input.value == ""){
        error.style.display = "block";
        input.style.border = "1px solid #FF5252";
        container2.style.display = "none";
        container3.style.display = "none";
        background.style.height = "100%";

    } else if (!input.value.match(validword)){
        container3.style.display = "block";
        error.style.display = "none";
        input.style.border = "none";
        container2.style.display = "none";
        background.style.height = "100%";

    } else if (input.value == (validword)) {
        container2.style.display = "block";
        error.style.display = "none";
        input.style.border = "none";
        container3.style.display = "none";
        background.style.height = "auto";
        input.style.border = "1px solid #A445ED";
    }
});

input.addEventListener("keydown", (e) => {
        if (e.keyCode === 13){
          if (input.value == ""){
        error.style.display = "block";
        input.style.border = "1px solid #FF5252";
        container2.style.display = "none";
        container3.style.display = "none";
        background.style.height = "100%";

    } else if (!input.value.match(validword)){
        container3.style.display = "block";
        error.style.display = "none";
        input.style.border = "none";
        container2.style.display = "none";
        background.style.height = "100%";

    } else if (input.value == (validword)) {
        container2.style.display = "block";
        error.style.display = "none";
        input.style.border = "none";
        container3.style.display = "none";
        background.style.height = "auto";
        input.style.border = "1px solid #A445ED";
    }
}
});


selectFont.addEventListener("click", (e) => {
    if (fontWindow.style.display != "block"){
    fontWindow.style.display = "block";
    } else {
        fontWindow.style.display = "none";
    }
});

sansFont.addEventListener("click", (e) => {
    if (document.body.classList != ("font-sans")){
        document.body.classList.remove("font-serif");
        document.body.classList.remove("font-mono");
        document.body.classList.remove("font-sans");
        document.body.classList.add("font-sans");
        font.textContent = "Sans Serif"
        fontWindow.style.display = "none";
        } else {
            fontWindow.style.display = "none";
        }
    });

serifFont.addEventListener("click", (e) => {
    if (document.body.classList != ("font-serif")){
    document.body.classList.remove("font-serif");
    document.body.classList.remove("font-mono");
    document.body.classList.remove("font-sans");
    document.body.classList.add("font-serif");
    font.textContent = "Serif"
    fontWindow.style.display = "none";
    } else {
        fontWindow.style.display = "none";
    }
});

monoFont.addEventListener("click", (e) => {
    if (document.body.classList != ("font-mono")){
    document.body.classList.remove("font-serif");
    document.body.classList.remove("font-sans");
    document.body.classList.remove("font-mono");
    document.body.classList.add("font-mono");
    font.textContent = "Mono"
    fontWindow.style.display = "none";
    } else {
        fontWindow.style.display = "none";
    }
});

play.addEventListener("click", (e) => {
    song.play()
    if (play.style.display != "none"){
    play.style.display = "none";
    playActive.style.display = "block";
    songended()
    } 

});
function songended(){
song.addEventListener("ended", (e) => {
    play.style.display = "block";
    playActive.style.display = "none";
})
};